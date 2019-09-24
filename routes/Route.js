const express = require("express")
const Router = express.Router();

const Controller = require('../controllers/Controller');

Router.get("/",Controller.index);

module.exports = Router;