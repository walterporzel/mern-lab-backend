const Model = require("../db/model");

module.exports = {
    index: (req,res) => {
        Model.find({}).then(data =>{
            res.json(data);
        })
    }
}