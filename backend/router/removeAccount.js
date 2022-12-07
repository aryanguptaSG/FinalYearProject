require("dotenv").config();
const express = require("express")
const router = express.Router()
const customer = require('../model/customer')
const worker = require("../model/worker")
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY;



const auth = (req, res, next) => {
    const authToken = req.body.authToken;
    jwt.verify(authToken, SECRET_KEY, (err, user) => {
        if (err) {
            res.status(404).json({ "msg": "Un Authorised!" })
        }
        else {
            req.userid = user.id;
            next()
        }
    })
}


//delete a Customers
router.delete("/c", auth, async (req, res) => {
    try {
        const account = customer.findById(req.userid);
        await account.deleteOne();
        res.status(200).json({ "msg": "Account deleted" })
    }
    catch {
        res.status(500).json({ "msg": "Account dose not exits" })
    }
})

//delete  a Worker
router.delete("/w", auth, async (req, res) => {
    try {
        const account = worker.findById(req.userid);
        console.log(account);
        await account.deleteOne();
        res.status(200).json({ "msg": "Account deleted" })
    }
    catch {
        res.status(500).json({ "msg": "Account dose not exits" })
    }
})

module.exports = router