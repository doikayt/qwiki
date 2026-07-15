---
title: "MediaWiki:Common.js"
categories:
redirect_from: []
raw: true
---
/* Pre-fill the sidebar "Add new entry" link with the current page's categories,
   so creating a new entry from within a category defaults to that category.
   Forwards every category the current page belongs to (not a guessed "best"
   one) so a multi-select field on the destination form can pre-check them all. */
( function () {
	'use strict';

	// Once a real "add new entry" form exists, update these two constants to
	// match its Form: page name and its (multi-select) category field's name.
	var TARGET_FORM_NAME = 'GeneralPage';
	var CATEGORY_FIELD_NAME = 'category';

	mw.loader.using( 'mediawiki.util' ).then( function () {
		var categories = mw.config.get( 'wgCategories' ) || [];
		if ( !categories.length ) {
			return;
		}

		// PFTreeInput (and list-type fields generally) expect their current
		// value as a single comma-delimited string, not an array-style query
		// param - the same convention the destination template's #arraymap
		// loop uses to split it back out.
		var fieldKey = TARGET_FORM_NAME + '[' + CATEGORY_FIELD_NAME + ']';
		var fieldValue = categories.join( ',' );
		var innerParams = encodeURIComponent( fieldKey ) + '=' + encodeURIComponent( fieldValue );

		// Special:FormStart only forwards query args through its own hidden
		// "params" field (see PFFormStart.php), appended verbatim to the
		// eventual Special:FormEdit redirect URL.
		document.querySelectorAll( 'a[href*="Special:FormStart"]' ).forEach( function ( link ) {
			var url = new URL( link.href, window.location.origin );
			url.searchParams.set( 'params', innerParams );
			link.href = url.toString();
		} );

		// Special:FormEdit links (no page-name prompt step) read query args
		// directly.
		document.querySelectorAll( 'a[href*="Special:FormEdit"]' ).forEach( function ( link ) {
			var url = new URL( link.href, window.location.origin );
			url.searchParams.set( fieldKey, fieldValue );
			link.href = url.toString();
		} );
	} );
}() );
