const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
const family = require("./data.json");

//app.use(bodyParser.urlencoded({extended: false}));
const PORT = 4000;

app.get("/message",
    (req, res) => {
        res.send("This is the message route");
    }
)

app.get("/apitest",
    (req, res) => {
        res.send("This is th apitest route");
    }
)

app.get("/family",
    (req, res) => {
        res.send(family);
    }
)

app.get("/family/:id",
    (req, res) => {
        const id = req.params.id;
        const person = family[id];
        if(person){
            res.send(person);
        }else{
            res.status(404).send("Person not found");
        }
    }
)

app.put("/family/:id",
    (req, res) => {
        const id = req.params.id;
        if(family[id] != null){
            res.status(404).send("Person already exists");
        }else{
            family[id];
            res.status(200).send("New person added !");
        }
        
    }
            
)

app.listen(PORT,
    () => {
        console.log("Success, my server is running on port", PORT);
    }
)