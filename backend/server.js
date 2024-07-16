import express from "express"
import cors from "cors"
import connectDB from "./db/db.js"
import Router from "./routes/routes.js"
let app=express()
connectDB();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use("/todos/",Router)



app.listen(4000,()=>console.log("port is running at 4000"))