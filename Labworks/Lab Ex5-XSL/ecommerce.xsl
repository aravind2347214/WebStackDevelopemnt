<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/products">
    <html>
        <body>
            <h1>Product Catalogue</h1>
            <table border="1">
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Price Description</th>
                </tr>
                <xsl:for-each select="product">
                <tr>
                    <td><xsl:value-of select="id" /> </td>
                    <td><xsl:value-of select="name" /> </td>
                    <td><xsl:value-of select="price" /> </td>
                    <td><xsl:value-of select="description" /> </td>
                    <td>
                        <xsl:choose>
                            <xsl:when test="price &gt; 200">Greater Than 200</xsl:when>
                            <xsl:when test="price &gt; 50">Greater Than 50</xsl:when>
                            <xsl:when test="price &gt; 5">Greater Than 5</xsl:when>
                            <xsl:otherwise>Dont Know What to do</xsl:otherwise>
                        </xsl:choose>
                    </td>
                    
                </tr>
            </xsl:for-each>
            </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>