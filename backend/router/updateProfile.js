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
            res.status(404).send("Un Authrised.")
        }
        else {
            req.user = user;
            next()
        }
    })
}

// customer Profile 
router.put("/c", auth, async (req, res) => {
    try {
        const customerProfile = await customer.findById(req.user.id);
        customerProfile.Name = req.body.Name;
        customerProfile.Phone = req.body.Phone;
        customerProfile.Location = req.body.Location;
        try {
            const updatedProfile = await customerProfile.save();
            res.status(201).json(updatedProfile);
        }
        catch {
            res.status(500).json({ Meaasage: "Sorry Not Updated" })
        }
    }
    catch {
        res.status(500).json({ Meaasage: "User Not Found ." })
    }
})


// Worker Profile
router.put("/w", auth, async (req, res) => {
    try {
        const workerProfile = await worker.findById(req.user.id);
        workerProfile.Name = req.body.Name;
        workerProfile.Phone = req.body.Phone;
        workerProfile.Location = req.body.Location;
        workerProfile.Profession = req.body.Profession;
        workerProfile.Price = req.body.Price;

        try {
            const updatedProfile = await workerProfile.save();
            res.status(201).json(updatedProfile);
        }
        catch {
            res.status(500).json({ Meaasage: "Sorry Not Updated" })
        }
    }
    catch {
        res.status(500).json({ Meaasage: "Worker Not Found ." })
    }
})

module.exports = router