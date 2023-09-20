from lxml import etree

# Load XML and XSL files

xml = etree.parse("Labworks\Labexam3\Question3\dogs.xml")
xsl = etree.parse("Labworks\Labexam3\Question3\dogs.xsl")
xsd = etree.parse("Labworks\Labexam3\Question3\dogs.xsd")

transform = etree.XSLT(xsl)
html = transform(xml)
print(html)


with open('Labworks\Labexam3\Question3\dogs.html', 'wb') as output_file:
    output_file.write(etree.tostring(html, pretty_print=True))

schema = etree.XMLSchema(xsd)

# Validate transformed HTML against XSD schema
validation_result = schema.validate(xml)

if validation_result:
    print("Validation successful!")
else:
    print("Validation errors:")
    print("Validation Result :",validation_result)
    print(schema.error_log)
