import requests
import json
from urllib.parse import unquote,quote
url = "https://api.gupshup.io/sm/api/v1/msg"

tosend = {
"channel":"whatsapp",
"source":917834811114,
"destination":919575804031,
"src.name":"ledgerSsap",
"message.payload" : json.dumps({        
        "isHSM":"false",
        "type": "text",
        "text": "Hi John, how are you?"
})
}
headers = {
    'Cache-Control': "no-cache",
    'Content-Type': "application/x-www-form-urlencoded", 
    'apikey': "43a2bc8ef5c94b88cb9671fa1c5801c5",
    }



response = requests.request("POST", url, data=tosend, headers=headers)

# print(response)