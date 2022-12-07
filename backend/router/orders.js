require("dotenv").config();
const express = require("express")
const router = express.Router()
const worker = require("../model/worker")
const history = require("../model/history");
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

router.post("/search", auth, async (req, res) => {
    try {
        const regex1 = new RegExp([req.body.profession].join(""), "i");
        const regex2 = new RegExp([req.body.pinCode].join(""), "i");
        const workerList = await worker.find({ Profession: regex1, Location: regex2 })
        res.status(200).json(workerList);
    }
    catch {
        console.log("error");
        res.status(500).json([]);
    }
})


// place a order
router.post("/place-order", auth, async (req, res) => {
    const order = new history({
        PlacedDate: req.body.date,
        Customer: req.body.customer_id,
        Worker: req.body.worker_id,
        Status: req.body.status,
        PaymentStatus: req.body.paymentStatus,
        Msg: req.body.msg,
        RequestStatus: "Panding"
    })
    try {
        const orderDatails = await order.save();
        res.status(200).json(orderDatails);
    }
    catch {
        res.status(500).json({ msg: "Failed !" });
    }
})


// update request status of a order
router.post("/update-request-status", auth, async (req, res) => {
    try {
        const order = await history.findById(req.body.oid);
        order.RequestStatus = req.body.requestStatus;
        try {
            const orderDatails = await order.save();
            res.status(201).json(orderDatails);
        }
        catch {
            res.status(500).json({ Meaasage: "Failed !" })
        }
    }
    catch {
        res.status(500).json({ Meaasage: "Failed !" })
    }
})

// update status of a order
router.post("/update-status", auth, async (req, res) => {
    try {
        const order = await history.findById(req.body.oid);
        order.Status = req.body.status;
        try {
            const orderDatails = await order.save();
            res.status(201).json(orderDatails);
        }
        catch {
            res.status(500).json({ Meaasage: "Failed !" })
        }
    }
    catch {
        res.status(500).json({ Meaasage: "Failed !" })
    }
})

// Add Rating to a worker
router.post("/rate", auth, async (req, res) => {
    try {
        const workerProfile = await worker.findById(req.body.uid);
        workerProfile.Rating.push(req.body.rate);
        try {
            await workerProfile.save();
            res.status(201).json({ msg: "Rated The Worker" });
        }
        catch {
            res.status(500).json({ Meaasage: "Sorry Not Updated" })
        }
    }
    catch {
        res.status(500).json({ Meaasage: "Worker Not Found ." })
    }
})


// get all orders related to a customer
router.post("/get-c", auth, async (req, res) => {
    try {
        const orderList = await history.find({ Customer: req.body.customer_id })
        res.status(200).json(orderList);
    }
    catch {
        res.status(500).json([]);
    }
})


// get all orders related to a worker
router.post("/get-w", auth, async (req, res) => {
    try {
        const orderList = await history.find({ Worker: req.body.worker_id })
        res.status(200).json(orderList);
    }
    catch {
        res.status(500).json([]);
    }
})



module.exports = router