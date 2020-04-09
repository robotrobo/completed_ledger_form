const express = require('express')
const bodyParser = require('body-parser') 
const { exec } = require('child_process')
const app = express()
const port = 3000
app.use(bodyParser.json())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.post('/', (req, res) => {
    if(req.body.type == 'message'){
        incoming = req.body.payload.payload["text"];
        in_Arr = incoming.split(" ");
        keyword = in_Arr.shift()
        console.log(incoming);
        // if(incoming.toLowerCase() == 'hi')
        // exec("py.exe ./testpython.py", (error, stdout, stderr) =>{

        //         console.log(stdout);
        //         res.send(stdout);
        //     })
         if(keyword == "name"){
            // console.log(`py.exe ./import_ledger.py ""${in_Arr.join(' ')}`)
            exec(`py.exe ./import_ledger.py "${in_Arr.join(" ")}"`, (error, stdout, stderr) =>{

                console.log(stdout);
                res.send(stdout.split('\n')[0]);
            })

        }
            else{
                res.send("Not reccognised sorry");
            }
        }


    // res.send("yayayay")
    res.statusCode = 200;

})
