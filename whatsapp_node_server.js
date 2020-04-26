const express = require('express')
const bodyParser = require('body-parser') 
const { exec } = require('child_process')
const app = express()
const port = 3000
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.post('/', (req, res) => {

    if(req.body.type == 'message'){
        console.log(req)
        incoming = req.body.payload.payload["text"];
        in_Arr = incoming.split(" ");
        keyword = in_Arr.shift()
        
        console.log(incoming);
    }
res.statuscode = 200 
res.send("hello")

})
