const express = require('express')
const bodyParser = require("body-parser")

const server = express();
const port = 5000;

server.use(bodyParser.json())


function returnThirds(string){
    let thirds = ""
    for(let i = 0; i < string.length; i++){
        if((i+1)%3===0){
            thirds = thirds+string[i]
        }
    }
    return thirds
}


server.post("/test", (req, res) => {
    try{
        let thirds = returnThirds(req.body.string_to_cut)
        res.status(200).json({return_string: thirds})
    }catch(err){
        res.status(404).json({error: "Failed to return thrids.", details: err})
    }
})

server.listen(port, ()=>{
    console.log(`SERVER is on port: ${port}`)
})