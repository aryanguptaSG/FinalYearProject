require("dotenv").config();
const express = require("express")
const router = express.Router()
const customer = require('../model/customer')
const worker = require("../model/worker")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY;

//login as a Customer
router.post("/c", async (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const user = await customer.find({ "Email": email })
    if (user.length <= 0) {
        return res.status(500).json({ auth: false, message: "Not user with this email" })
    }
    try {
        if (await bcrypt.compare(pass, user[0].Password)) {
            const data = { id: user[0]._id }
            const authToken = jwt.sign(data, SECRET_KEY, { expiresIn: "1440m" })
            res.status(200).json({ authToken: authToken, auth: true, user: user[0] })
        }
        else {
            res.status(500).json({ auth: false, message: "Wrong Password ." })
        }
    }
    catch {
        return res.status(500).json({ auth: false, message: "Wrong Password ." })
    }
})


//login as a Worker
router.post("/w", async (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const user = await worker.find({ "Email": email })
    if (user.length <= 0) {
        return res.status(500).json({ auth: false, message: "Not user with this email" })
    }
    try {
        if (await bcrypt.compare(pass, user[0].Password)) {
            const data = { id: user[0]._id }
            const authToken = jwt.sign(data, SECRET_KEY, { expiresIn: "1440m" })
            return res.status(200).json({ authToken: authToken, auth: true, user: user[0] })
        }
        else {
            return res.status(500).json({ auth: false, message: "Wrong Password ." })
        }
    }
    catch {
        return res.status(500).json({ auth: false, message: "Wrong Password." })
    }
})

router.get("/getuser", (req, res) => {
    const authToken = req.headers["authtoken"];
    jwt.verify(authToken, SECRET_KEY, (err, user) => {
        if (err) {
            res.status(400).send("Un Authrised.")
        }
        else {
            res.status(200).json({ auth: true, userid: user.id })
        }
    })
})


module.exports = router