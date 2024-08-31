const express = require("express");
const cors = require('cors');
require("dotenv").config()
const connectToDatabase = require('./db')
const todo = require("./routes/todos")

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.json());
app.use(cors())

app.use('/api/todos',todo);
app.listen(process.env.PORT,async() =>{
  await connectToDatabase();
  console.log("Serving running on port ",process.env.PORT);
})
