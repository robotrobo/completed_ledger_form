# is requested by the php file to call tally and ask for data
import requests
import sys
if len(sys.argv) == 2:

    name = sys.argv[1]
    req = '<ENVELOPE > <HEADER > <TALLYREQUEST > Export Data < /TALLYREQUEST > </HEADER > <BODY > <EXPORTDATA > <REQUESTDESC > <STATICVARIABLES > <!--Specify the FROM DATE here--> < SVFROMDATE > 20080401 < /SVFROMDATE > <!--Specify the TO DATE here--> < SVTODATE > 20200331 < /SVTODATE > <SVEXPORTFORMAT >$$SysName: ASCII < /SVEXPORTFORMAT > <!--Specify the LedgerName here--> < LEDGERNAME >{}< /LEDGERNAME > </STATICVARIABLES > <!--Report Name--> < REPORTNAME > Ledger Vouchers < /REPORTNAME > </REQUESTDESC > </EXPORTDATA > </BODY > </ENVELOPE >'.format(
        name)
    r = requests.post("http://anishfoods.in:9000", data=req)
    # r = requests.post("http://localhost:9000", data=req)
    if r.text == "":
        print(name)
    else:
        print(r.text)
elif len(sys.argv) == 3:
    print("Only one arg needed")
else:
    print("please enter an arguement")
