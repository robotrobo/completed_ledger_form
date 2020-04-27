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
    let strToSend = "";
    if(req.body.type == 'message'){
        // console.log(req)
        incoming = req.body.payload.payload["text"];
        in_Arr = incoming.split(" ");
        keyword = in_Arr.shift()  
        // console.log(incoming);

        phone_number = req.body.payload.sender.phone
        if (phone_number.length == 12 && phone_number.startsWith("91")){
            phone_number = phone_number.substring(2)
        }
        console.log(phone_number)
        // let comp_name = get_name(phone_number)
        console.log(keyword)
        // let bal = ""
        if (keyword == "bal"){
            console.log("doing this")
            let bal = ""
            exec(`py.exe C:\\inetpub\\wwwroot\\whatsapp_server\\get_balance.py ${phone_number}`,  (err, stdout, stderr)=>{
                if(err) console.log(err)
                else if (stderr) console.log(stderr)
                res.statusCode =200
                strToSend = strToSend + stdout;
                console.log(strToSend)
            })
        }
        res.statuscode = 200 
        // res.text = "heldedelo"
        console.log(strToSend)
        res.send(strToSend)
    }

})



// con.end()