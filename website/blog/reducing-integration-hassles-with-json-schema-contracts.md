---
title: "Reducing Integration Hassles With JSON Schema Contracts"
date: 2019-04-03
source: http://datalackey.com/2019/04/03/reducing-integration-hassles-with-json-schema-contracts/
---

![](/blog/images/monkeys-computers.jpg)

I recently worked on a project where the 'contract' between service
consumers and providers consisted primarily of annotated mock-ups of the
JSON responses one would obtain from each of a given service's
end-points. A much better way of expressing the contract for a service
is to use a standard schema format. If your stuck with XML, use [XML
schema](https://www.w3.org/standards/xml/schema). If you are using JSON
then there are tools and libraries (presented below ) which will help
you use [JSON schema](https://json-schema.org/understanding-json-schema)
to express a service's contract. This article will assume that you have
gone through the available JSON schema documentation and have a basic
ideas of how to use it. It assumes that you are developing on a
JVM-based platform, and most of the recipes will be helpful for Java
developers (although our example of dynamic schema validation is
presented using a bit of Scala.)

### Why Use JSON Schema As Your Contract ?
Suppose you are supporting a JSON-based service, with your contract
expressed in some type of "by-example" format rather than the JSON
schema standard. Now one of the components consuming your service throws
an exception while parsing a response. The developer of said client
service comes to you and says "your service has a problem". Well, both
of you then have to pore over the examples that define your service's
responses and figure out if the response sent in this instance honors or
violates the implicit contract. This is a very manual process with room
for mistakes, and at the worst, can lead to finger pointing and debates
about whether the response is correct. Not fun.

However, if the server and client teams on your project come to
agreement on a schema for each JSON response, then the task of figuring
out if a given response is correct boils down to simply running a
validation tool where the inputs are the response document in question,
and the schema to which it must conform. If the validator reports no
errors then you are off the hook, with no debate.

### Json Schema Tools
This section describes how to install and use various tools for
auto-generation of JSON schema from sample documents, generation of
sample instance documents from schema, and schema validation. As long as
your environment is configured with Java 1.8, Python 2.7+, and the pip
installer, then the provided set-up instructions should work on either
Linux or Mac (at least they worked for me!)

#### Auto-generating JSON Schema From Instance Documents
[genson](https://github.com/wolverdude/GenSON) is a utility for
auto-generating JSON schema from instance documents. It can be installed
via the command

``` wp-block-code
    sudo pip install genson==0.1.0   # install it
```

Next try generating a schema for a simple document.

``` wp-block-code
    echo '{ "foo": 100 }'  > /tmp/foo.json
    cat /tmp/foo.json | genson | tee /tmp/foo.schema 
```

*foo.schema* should contain the following content:

``` wp-block-code
    {
      "$schema": "http://json-schema.org/schema#",
      "required": [
        "foo"
      ],
      "type": "object",
      "properties": {
        "foo": {
          "type": "integer"
        }
      }
    }
```

Sometimes you will be generating multiple schemas from a related set of
JSON documents (e.g., you might be starting from a set of sample
responses from a legacy service with no defined schema, which you plan
to retrofit .) In this case you will definitely want to familiarize
yourself with the [\$ref
keyword](https://json-schema.org/understanding-json-schema/structuring.html)
which lets you refactor commonly occurring fragments of schema code into
one place (even a different file.)

#### generation of sample instance documents from schema
Once you have a schema you can feed it into a tool, such as this one
from [Liquid
Technologies](https://www.liquid-technologies.com/online-schema-to-json-converter),
to facilitate generation of mock data that you can use for testing.

#### Command LINE TOOLS FOR Schema validation
The best command line tool I have found for JSON schema validation is
*json-schema-validator.* Its [current
documentation](https://github.com/java-json-tools/json-schema-validator)
indicates support for JSON Schema draft v4 which is a bit behind the
latest draft (7, at the time of this writing.) So, if you need the
latest spec-supported features in your schemas, you should take extra
care to ensure this tool is right for your needs.

Assuming you have gone through the previous step of installing and
testing genson, you can download and verify the validator via the
commands below (if you are on a Mac without *wget*, then please try
*curl*):

``` wp-block-code
wget 'https://bintray.com/fge/maven/download_file?file_path=com%2Fgithub%2Ffge%2Fjson-schema-validator%2F2.2.6%2Fjson-schema-validator-2.2.6-lib.jar' -O /tmp/validator.jar

# now validate your sample document against the schema you created above

cd /tmp ;  java -jar validator.jar /tmp/foo.schema /tmp/foo.json
```

You should see:

``` wp-block-code
validation: SUCCESS
```

Now let's see how the tool reports validation failures. Deliberately
mess up your instance document (so it no longer conforms to the schema)
via the command:

``` wp-block-code
cat /tmp/foo.json |  sed -e's/foo/zoo/' > /tmp/bad.json

cd /tmp ; java -jar validator.jar /tmp/foo.schema /tmp/bad.json
```

You should see error output which includes the line:

`"message" : "object has missing required properties ([\"foo\"])",`

#### On THE FLY SCHEMA VALIDATION At RUN-TIME
When previously discussed, the
*[json-schema-validator ](https://github.com/java-json-tools/json-schema-validator)*was
shown in command line mode. As a bonus you can also embed this this
project's associated Java library into any of your services that require
run-time validation of arbitrary instance documents against a schema.
The code snippet below (available as a project
[here) ](https://github.com/buildlackey/json-schema-validation-demo) is
written in Scala, but you could easily use this in Java projects as
well.

``` wp-block-preformatted
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.JsonNode
import com.github.fge.jackson.JsonLoader
import com.github.fge.jsonschema.main.{JsonSchema, JsonSchemaFactory}
import com.fasterxml.jackson.databind._
import com.github.fge.jsonschema.core.report.ProcessingReport

object SchemaValidator {
  lazy val mapper: ObjectMapper = new ObjectMapper
  lazy val jsonSchemaFactory: JsonSchemaFactory = JsonSchemaFactory.byDefault
  lazy val schemaNode: JsonNode = JsonLoader.fromResource("/schema.json")
  lazy val schema: JsonSchema = jsonSchemaFactory.getJsonSchema(schemaNode)

  def validateWithReport(json: String): Boolean = {
    val bytes: Array[Byte] = json.getBytes("utf-8")
    val parser: JsonParser = mapper.getFactory.createParser(bytes)
    val node: JsonNode = mapper. readTree( parser)
    val validationResult: ProcessingReport = schema.validate(node)
    if (validationResult.isSuccess) {
      true
    } else {
      val errMsg = 
            s"Validation error. Instance=$json, msg=$validationResult"
      System.out.println("errMsg:" + errMsg)
      false
    }
  }
}

object FakeGoodWebService {
  def getJsonResponse =   """{ "foo": 100 }"""
}

object FakeBadWebService {
  def getJsonResponse =   """{ "zoo": 100 }"""
}
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.JsonNode
import com.github.fge.jackson.JsonLoader
import com.github.fge.jsonschema.main.{JsonSchema, JsonSchemaFactory}
import com.fasterxml.jackson.databind._
import com.github.fge.jsonschema.core.report.ProcessingReport

object SchemaValidator {
  lazy val mapper: ObjectMapper = new ObjectMapper
  lazy val jsonSchemaFactory: JsonSchemaFactory = JsonSchemaFactory.byDefault
  lazy val schemaNode: JsonNode = JsonLoader.fromResource("/schema.json")
  lazy val schema: JsonSchema = jsonSchemaFactory.getJsonSchema(schemaNode)

  def validateWithReport(json: String): Boolean = {
    val bytes: Array[Byte] = json.getBytes("utf-8")
    val parser: JsonParser = mapper.getFactory.createParser(bytes)
    val node: JsonNode = mapper. readTree( parser)
    val validationResult: ProcessingReport = schema.validate(node)
    if (validationResult.isSuccess) {
      true
    } else {
      val errMsg = s"Validation error. Instance=$json, msg=$validationResult"
      System.out.println("errMsg:" + errMsg)
      false
    }
  }
}

object FakeGoodWebService {
  def getJsonResponse =   """{ "foo": 100 }"""
}

object FakeBadWebService {
  def getJsonResponse =   """{ "zoo": 100 }"""
}


object JsonSchemaValidationDemo extends App {
  import SchemaValidator._

  val goodResult = 
    validateWithReport(
      FakeGoodWebService.getJsonResponse)
  System.out.println("result:" + goodResult);

  val badResult = 
    validateWithReport(
      FakeBadWebService.getJsonResponse)
  System.out.println("result:" + badResult);
}





object JsonSchemaValidationDemo extends App {
  import SchemaValidator._

  val goodResult = validateWithReport(FakeGoodWebService.getJsonResponse)
  System.out.println("result:" + goodResult);

  val badResult = validateWithReport(FakeBadWebService.getJsonResponse)
  System.out.println("result:" + badResult);
}


```

We have stashed the 'foo' schema from our previous discussion into
*src/main/resources* and the object constructor for *SchemaValidator*
loads that schema into the 'schema' variable. We then call
*validateWithReport* from *JsonSchemaValidationDemo* first with a valid
response from a mock of a nicely behaving web service, then we feed
*validateWithReport* a JSON response from a misbehaving web service. The
resultant output is shown below.

``` wp-block-code
result:true
errMsg:Validation error. Instance={ "zoo": 100 }, 
    msg=com.github.fge.jsonschema.core.report.ListProcessingReport: failure
--- BEGIN MESSAGES ---
error: object has missing required properties (["foo"])
    level: "error"
    schema: {"loadingURI":"#","pointer":""}
    instance: {"pointer":""}
    domain: "validation"
    keyword: "required"
    required: ["foo"]
    missing: ["foo"]
---  END MESSAGES  ---

result:false
```

## Conclusion
Miscommunication and incorrect assumptions are most likely at what
formally trained project managers call "interface points at subsystem
boundaries" (you can read up more
[here](https://www.pmi.org/learning/library/interface-management-theory-approach-pm-5729).)
But now you have some tools for minimizing the thrash and churn that can
occur around these interface points.

## License
This work is licensed under the [Creative Commons Attribution 4.0
International License](http://creativecommons.org/licenses/by/4.0/). Use
as you wish, but if you can, please give attribution to the [Data Lackey
Labs Blog](http://datalackey.com).
