const path = require("node:path");
const { Router } = require("express");
const { getMediaTypes } = require("../controllers/mediaController");

const mediaRouter = Router();

mediaRouter.get("/", getMediaTypes);

module.exports = mediaRouter;
