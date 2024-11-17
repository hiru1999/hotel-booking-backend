import bodyParser from 'body-parser'
import express from 'express'
import userRouter from './routes/usersRoute.js'
import galleryItemRouter from './routes/galleryItemsRoute.js'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import categoryRouter from './routes/categoriesRoute.js'

const app = express()

app.use(bodyParser.json())

const connectionString = "mongodb+srv://tester2:456@cluster0.njqb2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


app.use((req,res,next)=>{
    const token = req.header("Authorization")?.replace
    ("Bearer ", "")
    if(token != null){
        jwt.verify(token,"secret",
            (err,decoded)=>{
            if(decoded != null){
                req.user = decoded
                next()
            }else{
                next()
            }
        })
    }else{
        next()
    }
});

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Connected to the database")
    }
).catch(
    ()=>{
        console.log("Connection failed")
    }
)

app.use("/api/users",userRouter)
app.use("/api/gallery",galleryItemRouter)
app.use("/api/category",categoryRouter)

app.listen(5000,(req,res)=>{
    console.log("server is running on port 5000")
});