const express = require('express')
const bodyParser = require('body-parser') 
const { exec } = require('child_process')
const mysql = require('mysql')
const app = express()
const port = 3000

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9575024567",
    database: "phone_numbers"
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("connected to mysql server");

  })

function get_name(number){
    con.query("SELECT comp from numbers where number=" + number, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    })
}
  
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.post('/', (req, res) => {

    if(req.body.type == 'message'){
        // console.log(req)
        incoming = req.body.payload.payload["text"];
        in_Arr = incoming.split(" ");
        keyword = in_Arr.shift()  
        console.log(incoming);

        phone_number = req.body.payload.sender.phone
        console.log(phone_number)
        if (phone_number.length == 12 && phone_number.startWith("91")){
            phone_number = phone_number.substring(2)
        }
        get_name(phone_number)

    }
res.statuscode = 200 
res.send("hello")

})



con.end()