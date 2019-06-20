# # is requested by the php file to call tally and ask for data
import requests
import sys
apiKey = "50900ad3-d2e6-11e8-a895-0200cd936042"
# print(apiKey)
method = sys.argv[1]
if(method=="request_otp"):
    num = sys.argv[2]
    r = requests.post("https://2factor.in/API/V1/{0}/SMS/{1}/AUTOGEN/otp_ledger_form".format(apiKey,num))
    if r.text == "":
        print("there's an error ")
    else:
        print(r.text)
elif(method=="verify_otp"):
    ses = sys.argv[2]
    otp = sys.argv[3]
    # apiKey = "50900ad3-d2e6-11e8-a895-0200cd936042"
    check_url = 'https://2factor.in/API/V1/{0}/SMS/VERIFY/{1}/{2}'.format(apiKey,ses,otp)
    # print(check_url)
    r = requests.post(check_url)
    if r.text == "":
        print("there's an error ")
    else:
        print(r.text)
