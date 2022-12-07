require("dotenv").config();
const env = process.env;

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");



//connecting to the database----------------------------------------------
mongoose.connect('mongodb://localhost/HomeMate', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", (err) => {
    console.error(err)
})
db.on("open", () => {
    console.log("connected to database")
})

//All the middlewire----------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//starting the server----------------------------------------------
app.listen(env.PORT, () => { console.log(`Server is listening at Port : ${env.PORT} `); })


app.get("/", (req, res) => {
    res.status(200).send("This is Backend Server .");
})


//for signup
const register = require("./router/register")
app.use("/signup", register)



//for login
const login = require("./router/login")
app.use("/login", login)


//for updateing the profile 
const updateProfile = require("./router/updateProfile")
app.use("/update-profile", updateProfile)

//for deleting the profile 
const removeAccount = require("./router/removeAccount")
app.use("/delete-profile", removeAccount)



//for order realated stuff 
const order = require("./router/orders")
app.use("/order", order)