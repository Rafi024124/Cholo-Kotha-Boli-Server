import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/auth.router.js'
import cookieParser from "cookie-parser"
import {connectDB} from "./lib/db.js"
dotenv.config();

const app = express();

const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
console.log("PORT:", process.env.PORT);
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "Loaded" : "Missing");


app.listen(PORT,()=>{
    console.log("server is running on port:", PORT);
    connectDB();
})