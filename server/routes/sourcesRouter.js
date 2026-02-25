const path = require("node:path");
const { Router, json } = require("express");
const { getSources, createSourcePost } = require("../controllers/sourcesController");

const sourcesRouter = Router();

sourcesRouter.get("/", getSources);
sourcesRouter.post("/new", createSourcePost);

module.exports = sourcesRouter;
