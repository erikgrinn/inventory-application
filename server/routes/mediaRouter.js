const path = require("node:path");
const { Router, json } = require("express");
const { getMediaTypes, createMediaGet, createMediaPost } = require("../controllers/mediaTypesController");

const mediaRouter = Router();

mediaRouter.get("/", getMediaTypes);
// mediaRouter.get("/new", createMediaGet)
mediaRouter.post("/new", createMediaPost)

module.exports = mediaRouter;
