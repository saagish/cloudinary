const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Connect Database
mongoose.connect(process.env.MONGO_URI)
.then((result) => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log(err);
});

// middleware
app.use(express.json());

// route
app.use('/user', require('./routes/user'))

app.listen(9000, () => console.log('listening on port 5000'));