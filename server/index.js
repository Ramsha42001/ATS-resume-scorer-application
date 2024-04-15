const express = require('express');
const dotenv = require('dotenv').config();
const cors=require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser')
//DB connect
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('DB connected'))
.catch((err)=> console.log('DB not connected', err))
const app = express();
const port = 8000;

//middleware
app.use(express.json()); //parsing of response data
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use('/',require('./routes/authRoutes'))

app.listen(port,()=> console.log(`Server is running on port ${port}`))