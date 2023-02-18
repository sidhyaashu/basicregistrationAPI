const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoute")
dotenv.config()
const PORTTR = process.env.PORT
const DB = process.env.MONGO_URL

app.use(express.json())
app.use("/user",userRouter)







mongoose.connect(DB).then(()=>{
    app.listen(PORTTR || 5000,()=>{
        console.log(`server is running on port ${PORTTR}`)
    })
}).catch((err)=>{
    console.log(err)
})


