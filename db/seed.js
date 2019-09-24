const mongoose = require("./connection")
const Model = require('./model')
const axios = require('axios')

const seedData = require('./sample.json')

Model.deleteMany({}).then(() => {
    Model.create(seedData).then((data) => {
        console.log(data);
    })
})