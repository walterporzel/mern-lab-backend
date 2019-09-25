const Model = require("../db/model");

module.exports = {
    index: (req,res) => {
        Model.find({}).then(data =>{
            res.json(data);
        })
    },
    show: (req,res) => {
        Model.findOne({name: req.params.name}).then(country =>
            res.json(country));
    },
    create: (req,res) => {
        const newCountry = req.body;
        Model.create(newCountry).then(country =>
            res.json(country));
    },
    update: (req,res) => {
        const updatedCountry = req.body;
        Model.findOneAndUpdate({name: req.params.name},updatedCountry, {new: true})
        .then(country => res.json(country));
    },
    destroy: (req,res) => {
        Model.findOneAndDelete({name: req.params.name})
        .then(country => res.json(country))
    }
}