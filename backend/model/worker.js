const mongoose = require("mongoose")

const worker = new mongoose.Schema({
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
    },
    Profession: {
        type: String
    },
    Price: {
        type: String
    },
    Rating: {
        type: Array
    }
})

module.exports = mongoose.model("Worker", worker)