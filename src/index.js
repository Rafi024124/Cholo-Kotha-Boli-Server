import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/auth.router.js'
import messageRoutes from './routes/message.route.js'
import cookieParser from "cookie-parser"
import {connectDB} from "./lib/db.js"
import cors from "cors";
import { app, server } from "./lib/socket.js"
dotenv.config();



const PORT = process.env.PORT
 app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)



console.log("PORT:", process.env.PORT);
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "Loaded" : "Missing");


server.listen(PORT,()=>{
    console.log("server is running on port:", PORT);
    connectDB();
})