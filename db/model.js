const mongoose = require("./connection")

const Schema = new mongoose.Schema({
    id_: false,
    name: String,
    capital: String,
    region: String,
    population: Number,
    flag: String
},{ versionKey: false})

module.exports = mongoose.model("Schema", Schema)