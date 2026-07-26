---
title: "Configuring the Xerces XML Parser With Content Model Defaults"
date: 2019-04-08
source: http://datalackey.com/2019/04/08/configuring-the-xerces-xml-parser-with-content-model-defaults/
---

![](/blog/images/new-ape-1024x583.jpeg)

My [previous post on JSON
schema](/blog/reducing-integration-hassles-with-json-schema-contracts.html)
included a slight dig at XML, which perhaps wasn't really warranted.
True, XML is clunkier and more verbose than JSON, but it has its strong
points. The clincher for me in past projects has been the superior
expressiveness of XML's schema format: XSD. XSD has quite a few
capabilities that JSON schema lacks, such as [referential integrity
constraints](http://www.informit.com/articles/article.aspx?p=31477),  
and the ability to specify attribute defaults in one's content model.
This article provides a quick overview of the latter feature via a code
sample that illustrates how to configure [Apache
Xerces.](http://xerces.apache.org/xerces2-j/)  The configuration we
present enables you to read in XML content such that it is
auto-populated with the proper default values for attributes, even if
the original source XML does not contain any definition at all for those
attributes.

Why is this useful? Well, suppose you have developed a content model
that allows your users to configure some run time data. For example, say
you have a game with actors that can be animals or people. You define an
XSD (schema) which allows game configurers to define a cast of
characters for the game using XML, like this:\

``` wp-block-code
 <animal name="Rover"/>
 <person name="Bob"/>
 <animal name="Fluffy"/>
```

Each character type has an associated class which defines the behavior
of the character in the game. You provide defaults for each character,
but you also allow your game configurers to define and reference their
own classes. In typical usage, let's assume that your configurers will
want to go with the defaults. In this case you don't want them  to have
to tediously type out the default class name for each character
instance. Forcing them to do so would  likely result in typos
(and *ClassNotFound* errors), and would potentially hinder your ability
to refactor the names of your default classes when you release new
versions of your game.

So you develop an XSD similar to the one shown below.\

``` wp-block-code
<xs:schema
        xmlns="http://com.lackey/dog" targetNamespace="http://com.lackey/dog"
        attributeFormDefault="unqualified"
        elementFormDefault="qualified"
        xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xs:element name="animal" type="animalType"  />
  <xs:element name="person" type="personType"  />

  <xs:complexType name="animalType">
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute type="xs:string"
            name="name" use="required"/>
        <xs:attribute type="xs:string"
            name="behaviorClass"
            default="com.lackey.animal.behavior.AnimalBehavior"
            use="optional"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

  <xs:complexType name="personType">
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute type="xs:string"
            name="name" use="required"/>
        <xs:attribute type="xs:string"
            name="behaviorClass"
            default="com.lackey.animal.behavior.PersonBehavior"
            use="optional"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
</xs:schema>
```

## 
The key feature to note is the definition  of
the 'behaviorClass' attribute for each model type
(*animalType* and *personType*), which looks like this:\

``` wp-block-preformatted
<xs:attribute type="xs:string"
   name="behaviorClass"
   default="com.lackey.animal.behavior.AnimalBehavior"
   use="optional"/>
```

Users may elect to leave out the 'behaviorClass' attribute from their
character definitions, but if you use a validating XML parser, such as
Xerces, and configure it as shown in the remainder of this article, when
you read and process the XML you will see that the parser fills in the
behaviorClass attribute with the correct default.

For example, if your source XML was:\
\

``` wp-block-preformatted
<animal xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"     xsi:schemaLocation="http://com.lackey/dog /tmp/animal.xsd"     xmlns="http://com.lackey/dog"     
name="rover"/>
```

The parser would deliver the following content to you (this is called
the "[Post Schema Validation
Infoset](http://courses.ischool.berkeley.edu/i290-14/s05/lecture-17/allslides.html)"
if you want to explore the theory in more depth):\

``` wp-block-preformatted
 <animal    
 xmlns="http://com.lackey/dog"    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    behaviorClass="com.lackey.animal.behavior.AnimalBehavior"    name="rover"    
xsi:schemaLocation="http://com.lackey/dog /tmp/animal.xsd"/>
```

The next chunk of (Groovy) code presents a unit test which illustrates
how to configure Xerces to inject content model defaults.\

``` wp-block-code
import org.testng.annotations.Test
import org.w3c.dom.Document
import org.xml.sax.InputSource
import org.xml.sax.SAXException

import javax.xml.parsers.DocumentBuilder
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.parsers.ParserConfigurationException
import javax.xml.transform.OutputKeys
import javax.xml.transform.Transformer
import javax.xml.transform.TransformerException
import javax.xml.transform.TransformerFactory
import javax.xml.transform.dom.DOMSource
import javax.xml.transform.stream.StreamResult

public class ParsingTest {


    String xmlDoc =
            """
<animal xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://com.lackey/dog /tmp/animal.xsd"
         xmlns="http://com.lackey/dog"
         name="rover"/>
"""

    String xmlSchema =
            """<?xml version="1.0" encoding="UTF-8"?>
<xs:schema
        xmlns="http://com.lackey/dog" targetNamespace="http://com.lackey/dog"
        attributeFormDefault="unqualified"
        elementFormDefault="qualified"
        xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xs:element name="animal" type="animalType"  />
  <xs:element name="person" type="personType"  />

  <xs:complexType name="animalType">
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute type="xs:string"
            name="name" use="required"/>
        <xs:attribute type="xs:string"
            name="behaviorClass"
            default="com.lackey.AnimalBehavior"
            use="optional"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

  <xs:complexType name="personType">
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute type="xs:string"
            name="name" use="required"/>
        <xs:attribute type="xs:string"
            name="behaviorClass"
            default="com.lackey.PersonBehavior"
            use="optional"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>

</xs:schema>
"""


    @Test(enabled = true)
    public void testHappyPath() {
        validateXml(xmlDoc)
    }

    private void validateXml(String xmlText) {
        String xmlPath = "/tmp/animal.xml"
        String xsdPath = "/tmp/animal.xsd"

        File xml = new File(xmlPath)
        File xsd = new File(xsdPath)

        // write file content to temp files
        xml.text = xmlText;
        xsd.text = xmlSchema;

        println "path to xml is " + xml.canonicalPath
        println "path to xsd is " + xsd.canonicalPath

        Document doc =
                parseToDom(
                        xmlText,
                        "http://com.lackey/dog", xsd.path)
        System.out.println("doc:" + doc);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        printDocument(doc, baos);
        def parsedDoc = baos.toString()
        System.out.println("parsedDoc:" + parsedDoc);
        assert parsedDoc.contains(
                "behaviorClass=\"com.lackey.AnimalBehavior")

    }

    public static Document parseToDom(final String xmlContent,
                                      final String nameSpace,
                                      final String xsdPath)
            throws ParserConfigurationException,
                    SAXException,
                    IOException {
        final DocumentBuilderFactory dbf =
                    DocumentBuilderFactory.newInstance();
        if (null != xsdPath) {
            final File xsd = new File(xsdPath);
            if (!xsd.exists()) {
                throw new IllegalArgumentException(
                        "no xsd found at path: $xsdPath");
            }
            dbf.setNamespaceAware(true);
            dbf.setAttribute(
                    "http://apache.org/xml/features/validation/schema",
                    Boolean.TRUE);
            dbf.setAttribute(
                    "http://xml.org/sax/features/validation",
                    Boolean.TRUE);
            dbf.setAttribute(
                    "http://apache.org/xml/features/validation/schema/normalized-value",
                    Boolean.TRUE);
            dbf.setAttribute(
                    "http://apache.org/xml/features/validation/schema/element-default",
                    Boolean.TRUE);
            dbf.setAttribute(
                    "http://apache.org/xml/properties/schema/external-schemaLocation",
                    nameSpace + " " + xsdPath);
        }

        final DocumentBuilder db = dbf.newDocumentBuilder();
        final InputSource is = new InputSource();
        is.setCharacterStream(new StringReader(xmlContent));
        return db.parse(is);
    }

    public static void printDocument(Document doc,
                                     OutputStream out)
            throws IOException, TransformerException {
        TransformerFactory tf = TransformerFactory.newInstance();
        Transformer transformer = tf.newTransformer();
        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no");
        transformer.setOutputProperty(OutputKeys.METHOD, "xml");
        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
        transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "4");

        transformer.transform(new DOMSource(doc),
                new StreamResult(new OutputStreamWriter(out, "UTF-8")));
    }
}
```
