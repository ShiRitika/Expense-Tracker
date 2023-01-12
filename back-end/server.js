const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// const IncomeTransaction = require("./models/model");

//using routes
app.use(require("./routes/route")); //added new route to this server

//use middleware in express
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
// app.use(cors(corsOptions)); //to share data
app.use(express.json()); //share data in json format

//get congif.env file
require("dotenv").config({path:"./config.env"});
const port = process.env.PORT || 5000; //using process object access env port variable

//mongodb connection
const con = require("./db/connection");

//using routes
// app.use(require("./routes/route")); //added new route to this server

con.then(db => {
    if(!db)return process.exit(1);

    //listen to the http server
    app.listen(port, () => {
        console.log(`server is running at port: http://localhost:${port}`);
    });

    app.on("error", error => console.log(`Failed to connect with http server: ${error}`));
    
    //error in mongdb connection
}).catch(error => {
    console.log(`connection Failed${error}`);
});

app.get("/",async (req,res) => {
    res.send("hello i m data");
});