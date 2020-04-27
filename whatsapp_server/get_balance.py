import xml.etree.ElementTree as ET
import  sys
import requests

if len(sys.argv) < 2 : 
    print("please enter the mobile number to be searched")
    exit(0)

bal_req = '<ENVELOPE>  <HEADER>  <VERSION>1</VERSION>  <TALLYREQUEST>EXPORT</TALLYREQUEST>  <TYPE>COLLECTION</TYPE>  <ID>Remote Ledger Coll</ID>  </HEADER>  <BODY>  <DESC>  <STATICVARIABLES>  <SVEXPORTFORMAT>$$SysName:ASCII</SVEXPORTFORMAT>  </STATICVARIABLES>  <TDL>  <TDLMESSAGE>  <COLLECTION NAME="Remote Ledger Coll" ISINITIALIZE="Yes">  <TYPE>Ledger</TYPE>  <NATIVEMETHOD>Name</NATIVEMETHOD>  <NATIVEMETHOD>OpeningBalance </NATIVEMETHOD>  <NATIVEMETHOD>ClosingBalance </NATIVEMETHOD>  <NATIVEMETHOD>LedgerPhone </NATIVEMETHOD>  <NATIVEMETHOD>LedgerMobile </NATIVEMETHOD>  </COLLECTION>  </TDLMESSAGE>  </TDL>  </DESC> </BODY> </ENVELOPE>'

r = requests.post("http://anishfoods.in:9000", data=bal_req)
balance_string = r.text

number = sys.argv[1]


root = ET.fromstring(balance_string)

collection = root[1][1][0]

for ledger in collection.findall("LEDGER"):
    mobile_element = ledger.find("LEDGERMOBILE") 
    if mobile_element is not None:
        if mobile_element.text == number:
            print(ledger.find("CLOSINGBALANCE").text)
            print(ledger.attrib['NAME'])


