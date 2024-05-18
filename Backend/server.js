const express = require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken')
const utils = require("./utils")
const app = express()
const config = require("./config")
const { autherization } = require("./middlewares/auth")

//middle-wares
app.use(cors())
app.use(express.json())

app.use(autherization)

const userRouter = require('./Routes/user');
const receptionistRouter = require('./Routes/Receptionist')


app.use('/user' , userRouter);
app.use('/Receptionist' , receptionistRouter)

app.listen(4000,'0.0.0.0',()=>{
    console.log(`server started on port 4000`)
});