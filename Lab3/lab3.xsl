<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
        <h2>Cars for service</h2>
        <table border="1">
            <tr bgcolor="#06CCF9">
                <th>carID</th>
                <th>ownerID</th>
                <th>serviceID</th>
                <th>model</th>
                <th>year</th>
                <th>lastservice</th>
                <th>nextservice</th>
            </tr>
            <xsl:for-each select="carservice/car">
            <tr>
                <td><xsl:value-of select="carID"/></td>
                <td><xsl:value-of select="ownerID"/></td>
                <td><xsl:value-of select="serviceID"/></td>
                <td><xsl:value-of select="model"/></td>
                <td><xsl:value-of select="year"/></td>
                <td><xsl:value-of select="lastservice"/></td>
                <td><xsl:value-of select="nextservice"/></td>
            </tr>
            </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>