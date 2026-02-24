const path = require("node:path");
const { Router } = require("express");
const { getUsernames } = require("../controllers/controller");

const myRouter = Router();

myRouter.get("/", getUsernames)

module.exports = myRouter;
