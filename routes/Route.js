const express = require("express")
const Router = express.Router();

const Controller = require('../controllers/Controller');

Router.get("/",Controller.index);
Router.get("/:name",Controller.show);
Router.post("/",Controller.create);
Router.put('/:name',Controller.update);
Router.delete('/:name',Controller.destroy);

module.exports = Router;