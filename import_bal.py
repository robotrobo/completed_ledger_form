# is requested by the php file to call tally and ask for data
import requests
bal_req = '<ENVELOPE>  <HEADER>  <VERSION>1</VERSION>  <TALLYREQUEST>EXPORT</TALLYREQUEST>  <TYPE>COLLECTION</TYPE>  <ID>Remote Ledger Coll</ID>  </HEADER>  <BODY>  <DESC>  <STATICVARIABLES>  <SVEXPORTFORMAT>$$SysName:ASCII</SVEXPORTFORMAT>  </STATICVARIABLES>  <TDL>  <TDLMESSAGE>  <COLLECTION NAME="Remote Ledger Coll" ISINITIALIZE="Yes">  <TYPE>Ledger</TYPE>  <NATIVEMETHOD>Name</NATIVEMETHOD>  <NATIVEMETHOD>OpeningBalance </NATIVEMETHOD>  <NATIVEMETHOD>ClosingBalance </NATIVEMETHOD>  <NATIVEMETHOD>LedgerPhone </NATIVEMETHOD>  <NATIVEMETHOD>LedgerMobile </NATIVEMETHOD>  </COLLECTION>  </TDLMESSAGE>  </TDL>  </DESC> </BODY> </ENVELOPE>'

r = requests.post("http://anishfoods.in:9000", data=bal_req)
# r = requests.post("http://localhost:9000", data=bal_req)
print(r.text)
