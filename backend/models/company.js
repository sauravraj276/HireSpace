//schema for company reg
const mongoose = require("mongoose");


const CompanySchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    website:{
        type:String
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Company", CompanySchema, "Companies");