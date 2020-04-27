const express = require('express')
const bodyParser = require('body-parser') 
const { exec } = require('child_process')
// const mysql = require('mysql')
const app = express()
const port = 3000

// let con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "9575024567",
//     database: "phone_numbers"
//   });
//   con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected to mysql server");

//   })

function get_name(number){
    let comp = ""
    con.query("SELECT comp from numbers where number=" + number, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        comp = result[0]["comp"];
    })

    return comp;
}
  
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.post('/', (req, res) => {
    if(req.body.type == 'message'){
        // let strToSend = "";

        incoming = req.body.payload.payload["text"];
        in_Arr = incoming.split(" ");
        keyword = in_Arr.shift().toLowerCase();  

        phone_number = req.body.payload.sender.phone
        if (phone_number.length == 12 && phone_number.startsWith("91")){
            phone_number = phone_number.substring(2)
        }
        console.log(phone_number)
        console.log(keyword)
        if (keyword == "bal"){
            exec(`py.exe C:\\inetpub\\wwwroot\\whatsapp_server\\get_balance.py ${phone_number}`,  (err, stdout, stderr)=>{
                if(err) console.log(err)

                else if (stderr) console.log(stderr)
                
                output = stdout.split("\n")
                res.statusCode =200
                let bal = output[0]
                let name = output[1].replace("\n", "")
                let msg =`Hi M/s ${name} your closing balance is Rs. ${Math.abs(parseFloat(bal))}(${parseFloat(bal)<0?"dr":"cr"})\nThanks for contacting Anish Foods Raipur` 
                exec(`py.exe C:\\inetpub\\wwwroot\\whatsapp_server\\text_vishal.py ${msg}`)
                res.send(msg)
            
            })
            
        }
        else if (keyword == "help"){
            res.send("These are the commands that you can type currently - \n1. bal - to get your closing balance\n2. help - to get this help message")
        }
        else {
            res.send("Sorry, this command is not recognized, type help for help")
        }
        // res.statuscode = 200 
        // console.log(strToSend)
        // res.send(strToSend)
    }

})



// con.end()