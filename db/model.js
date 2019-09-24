const mongoose = require("./connection")

const Schema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("Schema", Schema)