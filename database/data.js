import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const USERNAME = process.env.TODO_URL_USERNAME;
const PASSWORD = process.env.TODO_URL_PASSWORD ;
const DataConnection = () =>{


    mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.obhdw1t.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser: true})
    .then(()=>{
        console.log("data connection is sucessful with mongoDB database")
      }).catch((err)=>{
        console.log("while connnecting to database there is "+ err.message)
      })
}

export default DataConnection;





















