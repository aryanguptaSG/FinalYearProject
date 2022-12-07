const mongoose = require("mongoose")

const history = new mongoose.Schema({
    PlacedDate: {
        type: String,
        required: true
    },
    Customer: {
        type: String,
        required: true
    },
    Worker: {
        type: String,
        required: true
    },
    RequestStatus: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    PaymentStatus: {
        type: String,
    },
    Msg: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("History", history)