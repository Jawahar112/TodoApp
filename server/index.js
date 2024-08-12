import express from "express"
import 'dotenv/config'
import { connectDB } from "./configs/Mongodbconfig.js"
import  Router  from "./Routes/userRouter.js"
import cors from 'cors'
const app=express()
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine','handlebars')
app.use('/api/',Router)
app.disable('x-powered-by');
const PORT=process.env.PORT || 3000;
connectDB();
app.listen(PORT,(err)=>{
    if(err)console.log(err);
    console.log(`Server Running On Server http://localhost:${PORT} or http://127.0.0.1:${PORT}`);
})
