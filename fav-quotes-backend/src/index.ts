import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import   dotenv from "dotenv"
import router from "./router";
dotenv.config()
const app = express()

app.use(cors({
    origin: "https://fav-quotes-server.onrender.com",
    credentials: true
    
}))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())

const port = 8080

 const  connectDatabase = async ()=>{

    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to the database');
         // Start the server after successful MongoDB connection
        app.listen(port,()=>{
            console.log(`Server connected to http://localhost:${port}`);
        })

    }catch(error){
        console.error('Error connecting to the database:', error);
    }

 }
 connectDatabase()

app.use("/", router())