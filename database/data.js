import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const DataConnection = () => {
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.obhdw1t.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
    .then(()=>{
      console.log("data connection is sucessful with mongoDB database")
    }).catch((err)=>{
      console.log("while connnecting to database there is "+ err.message)
    })

     
     }


export default DataConnection;