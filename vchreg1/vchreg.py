# is requested by the php file to call tally and ask for data
import requests
LoL_req = '<ENVELOPE > <HEADER > <TALLYREQUEST > Export Data < /TALLYREQUEST > </HEADER > <BODY > <EXPORTDATA > <REQUESTDESC > <STATICVARIABLES > <!--Specify the FROM DATE here--> < SVFROMDATE > 20080401 < /SVFROMDATE > <!--Specify the TO DATE here--> < SVTODATE > 20220331 < /SVTODATE ><EXPLODEFLAG>Yes</EXPLODEFLAG><!--Displays Bill-wise details--><DBBILLEXPLODEFLAG>Yes</DBBILLEXPLODEFLAG><!--Display Stock Item details--><DBINVEXPLODEFLAG>Yes</DBINVEXPLODEFLAG><SVEXPORTFORMAT >$$SysName: HTML < /SVEXPORTFORMAT > <!--Specify the LedgerName here--> < LEDGERNAME >Ashish Agencies Raigarh< /LEDGERNAME > </STATICVARIABLES > <!--Report Name--> < REPORTNAME > Ledger Vouchers < /REPORTNAME > </REQUESTDESC > </EXPORTDATA > </BODY > </ENVELOPE >'
r = requests.post("http://anishfoods.in:9000", data=LoL_req)
# r = requests.post("http://localhost:9000", data=LoL_req)
print(r.text)
