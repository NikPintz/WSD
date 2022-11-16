<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
  <h2>CUSTOMER DETAILS</h2>
  <table border="1">
    <tr bgcolor="#ffeecc">
      <th>CUSTOMER ID</th>
      <th>NAME</th>
      <th>PHONE NUMBER</th>
      <th>BILL NUMBER</th>
      <th>ADDRESS</th>
      <th>EMPLOYEE ID</th>

    </tr>
    <xsl:for-each select="retail/customer">
    <tr bgcolor="ddeeff">
      <td><xsl:value-of select="c_id"/></td>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="ph_no"/></td>
      <td><xsl:value-of select="bill_no"/></td>
      <td><xsl:value-of select="address"/></td>
      <td><xsl:value-of select="e_id"/></td>

    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>