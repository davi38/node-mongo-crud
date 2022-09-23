const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express();

const connectDB = require("./config/db.js");

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler)  //change default error

const port = process.env.PORT || 5000;
connectDB()
app.listen(port, () => console.log(`Server running on port ${port}`))