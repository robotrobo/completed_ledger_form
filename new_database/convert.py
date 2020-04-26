import xml.etree.ElementTree as ET
import mysql.connector



mydb = mysql.connector.connect(
host = "localhost",
user = "root",
passwd = "9575024567",
database = "phone_numbers"
)

mycursor = mydb.cursor()





root = ET.parse("balance.xml").getroot()



entries = []

for ledger in root.findall("LEDGER"):
    number = ""
    try:
        number = ledger.find("LEDGERMOBILE").text
        entries.append((ledger.attrib["NAME"].replace("&", "&amp;"), number))
    except AttributeError:
        pass


sql = "INSERT INTO numbers (comp, number) VALUES (%s, %s)"


mycursor.executemany(sql, entries)
mydb.commit()

print(mycursor.rowcount, "was inserted")
