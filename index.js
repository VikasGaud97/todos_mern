//main server
import express from 'express';
import DataConnection from './database/data.js';
import cors from "cors" // cors is used when fontend and backend server is not  same
import Routes from "../server/route/route.js"
import bodyParser from "body-parser"

const app = express();



const PORT = 8000;

app.use(cors(
   {
        origin:["https://todos-api-ashy.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));

app.use(bodyParser.json({extended:true})); // BODY-PARSER IS USED TO MANAGE THE DATA
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes)// path of route
app.get("/",(req,res)=>{
    res.json("hello its working")
})


app.listen(PORT,()=> console.log("your server is running" + PORT))
DataConnection();
