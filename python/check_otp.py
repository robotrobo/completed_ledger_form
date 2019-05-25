# # is requested by the php file to call tally and ask for data
import requests
import sys
if len(sys.argv) == 3:
    ses = sys.argv[1]
    otp = sys.argv[2]
    apiKey = "50900ad3-d2e6-11e8-a895-0200cd936042"
    check_url = 'https://2factor.in/API/V1/{0}/SMS/VERIFY/{1}/{2}'.format(apiKey,ses,otp)
    r = requests.post(check_url)

    if r.text == "":
        print("there's an error ")
    else:
        print(r.text)
elif len(sys.argv) == 4:
    print("Only two arg needed")
else:
    print("please enter an arguement")
