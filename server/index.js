const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require('mongoose');

app.use(cors())


app.use(express.json())
app.use('/auth', require('./routes/user'))
require("dotenv").config()



const PORT = process.env.PORT || 5000
// Database Config

 
mongoose.connect(process.env.MONGO_URI,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });


app.listen(PORT, ()=> {
    console.log(`Server run on ${PORT}`)
})