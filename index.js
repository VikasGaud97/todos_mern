//main server
import express from 'express';
import DataConnection from './database/data.js';
import cors from "cors" // cors is used when fontend and backend server is not  same
import Routes from "./router/route.js"
import bodyParser from "body-parser"
// import path from "path"

// const __dirname = path.resolve();
const app = express();



const PORT = process.env.PORT || 8080;  

app.use(cors());

app.use(bodyParser.json({extended:true})); // BODY-PARSER IS USED TO MANAGE THE DATA
app.use(bodyParser.urlencoded({extended:true})); //when both frontend server and backend server are not on the same site
app.use(express.json())

app.use('/',Routes)// using routes for different paths



app.listen(PORT,()=> console.log("your server is running " + PORT))
DataConnection();
