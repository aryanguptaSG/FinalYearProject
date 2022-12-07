const mongoose = require("mongoose")

const customer = new mongoose.Schema({
    Name: {
        type: String,
    },
    Password: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
    },
    Email: {
        type: String,
        required: true
    },
    Location: {
        type: String,
    }
})

module.exports = mongoose.model("Customer", customer)