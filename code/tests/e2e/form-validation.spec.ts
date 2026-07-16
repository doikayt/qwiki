/**
 * Browser-level validation tests for the Tool submission form.
 *
 * Requires the wiki to be running: npm run test:e2e starts it, or
 * bring it up manually with docker compose up.
 *
 * First run: npx playwright install chromium
 *
 * Each test asserts TWO things:
 *   1. The generic "There were errors" banner is visible.
 *   2. A .pf-error-row is visible immediately after the failing field's <tr>.
 *
 * These tests are intentionally FAILING until the field-highlight behaviour
 * is fully wired up (known issue noted in last checkpoint commit).
 */
import { test, expect, type Page } from "@playwright/test";

/** Direct URL to a blank Tool form (PageForms FormEdit special page).
 *  Uses /index.php/ prefix: the /wiki/ short-URL rewrite is broken for
 *  Special: pages in the Docker image (redirects to Main_Page). */
const FORM_URL = "/index.php/Special:FormEdit/Tool/PW_Validation_Test";

const WIKI_USER = process.env.WIKI_ADMIN_USER ?? "Admin";
const WIKI_PASS = process.env.WIKI_ADMIN_PASS ?? "AdminPass123";

async function login(page: Page): Promise<void> {
    await page.goto("/index.php/Special:UserLogin");
    await page.fill('input[name="wpName"]', WIKI_USER);
    await page.fill('input[name="wpPassword"]', WIKI_PASS);
    await page.getByRole("button", { name: /log in/i }).click();
    // MediaWiki redirects to Main Page on successful login.
    await page.waitForURL(/Main_Page|Special:FormEdit/, { timeout: 10_000 });
}

/** Banner text PageForms shows when numErrors > 0. */
const ERROR_BANNER = "There were errors with your form input";

/**
 * Fill fields that are not under test so they do not themselves cause errors.
 * url defaults to a reachable domain; selectCategory defaults to true.
 */
async function fillSafeFields(
    page: Page,
    opts: {
        pricing?: string;
        amount?: string;
        url?: string;
        selectCategory?: boolean;
    } = {},
): Promise<void> {
    await page.fill('input[name="Tool[company]"]', "Test Company");

    const url = opts.url ?? "example.com";
    await page.fill('input[name="Tool[url]"]', url);

    if (opts.pricing) {
        await page.selectOption('select[name="Tool[pricing]"]', opts.pricing);
    }
    if (opts.amount !== undefined) {
        await page.fill('input[name="Tool[amount]"]', opts.amount);
    }

    const selectCategory = opts.selectCategory ?? true;
    if (selectCategory) {
        // jsTree renders checkbox ICONS (<i class="jstree-checkbox">), not real
        // <input type=checkbox> elements. Clicking a leaf's anchor toggles its
        // checked state; PageForms syncs it to the hidden Tool[category] input.
        const leaf = page.locator(".pfTreeInput .jstree-leaf .jstree-anchor").first();
        await leaf.waitFor({ state: "visible", timeout: 5_000 });
        await leaf.click();
    }
}

test.describe("Tool form validation — field-level error rows", () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
        await page.goto(FORM_URL);
        await page.waitForSelector("form#pfForm", { timeout: 10_000 });
    });

    // ── 1. pricing=free with a non-zero amount ──────────────────────────────
    test("1. pricing=free with non-zero amount → error row on amount field", async ({ page }) => {
        await fillSafeFields(page, { pricing: "free", amount: "5" });
        await page.getByRole("button", { name: "Save page" }).click();

        await expect(page.getByText(ERROR_BANNER)).toBeVisible();
        const amountRow = page.locator('tr:has(input[name="Tool[amount]"])');
        await expect(amountRow.locator("+ tr.pf-error-row")).toBeVisible();
    });

    // ── 2. pricing!=free with zero or blank amount ──────────────────────────
    test("2a. pricing=recurring/mo with blank amount → error row on amount field", async ({ page }) => {
        await fillSafeFields(page, { pricing: "recurring/mo", amount: "" });
        await page.getByRole("button", { name: "Save page" }).click();

        await expect(page.getByText(ERROR_BANNER)).toBeVisible();
        const amountRow = page.locator('tr:has(input[name="Tool[amount]"])');
        await expect(amountRow.locator("+ tr.pf-error-row")).toBeVisible();
    });

    test("2b. pricing=one time with zero amount → error row on amount field", async ({ page }) => {
        await fillSafeFields(page, { pricing: "one time", amount: "0" });
        await page.getByRole("button", { name: "Save page" }).click();

        await expect(page.getByText(ERROR_BANNER)).toBeVisible();
        const amountRow = page.locator('tr:has(input[name="Tool[amount]"])');
        await expect(amountRow.locator("+ tr.pf-error-row")).toBeVisible();
    });

    // ── 3. no category selected ─────────────────────────────────────────────
    test("3. no category selected → error row on category field", async ({ page }) => {
        await fillSafeFields(page, { selectCategory: false });
        await page.getByRole("button", { name: "Save page" }).click();

        await expect(page.getByText(ERROR_BANNER)).toBeVisible();
        const categoryRow = page.locator('tr:has([name="Tool[category]"])');
        await expect(categoryRow.locator("+ tr.pf-error-row")).toBeVisible();
    });

    // ── 4. unreachable URL ──────────────────────────────────────────────────
    test("4. unreachable URL → error row on URL field", async ({ page }) => {
        // Abort the reachability probe immediately so the test does not
        // wait for the real 8-second network timeout.
        await page.route("https://not-there-no-no-bad123.org/**", (route) =>
            route.abort("failed"),
        );

        await fillSafeFields(page, { url: "not-there-no-no-bad123.org" });
        // Tab away from the URL field to trigger the blur → probe.
        await page.press('input[name="Tool[url]"]', "Tab");
        await expect(page.locator("#pf-url-status")).toHaveText("✗ Not reachable", {
            timeout: 10_000,
        });

        await page.getByRole("button", { name: "Save page" }).click();

        await expect(page.getByText(ERROR_BANNER)).toBeVisible();
        const urlRow = page.locator('input[name="Tool[url]"]').locator("xpath=ancestor::tr");
        await expect(urlRow.locator("+ tr.pf-error-row")).toBeVisible();
    });

    // ── 5. blank URL ─────────────────────────────────────────────────────────
    test("5. blank URL → error row on URL field", async ({ page }) => {
        await fillSafeFields(page, { url: "" });
        await page.getByRole("button", { name: "Save page" }).click();

        await expect(page.getByText(ERROR_BANNER)).toBeVisible();
        const urlRow = page.locator('input[name="Tool[url]"]').locator("xpath=ancestor::tr");
        await expect(urlRow.locator("+ tr.pf-error-row")).toBeVisible();
    });
});
