const express = require("express")
const router = express.Router()
const customer = require('../model/customer')
const worker = require("../model/worker")
const bcrypt = require("bcrypt")

//signup as a Customers
router.post("/c", async (req, res) => {
    const email = req.body.email;
    if ((await customer.find({ "Email": email })).length > 0) {
        res.status(400).json({ message: "This Email is Already used" })
    }
    else {
        const pass = await bcrypt.hash(req.body.pass, 10);
        const Customer = new customer({
            Name: "",
            Password: pass,
            Email: req.body.email,
            Phone: "",
            Location: ""
        })
        try {
            const newCustomer = await Customer.save()
            res.status(201).json(newCustomer)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
})

//signup as a Worker
router.post("/w", async (req, res) => {
    const email = req.body.email;
    if ((await worker.find({ "Email": email })).length > 0) {
        res.status(400).json({ message: "This Email is Already used" })
    }
    else {
        const pass = await bcrypt.hash(req.body.pass, 10);
        const Worker = new worker({
            Name: "",
            Password: pass,
            Email: req.body.email,
            Phone: "",
            Location: "",
            Profession: "",
            Price: "",
            Rating: []
        })
        try {
            const newWorker = await Worker.save()
            res.status(201).json(newWorker)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
})

module.exports = router