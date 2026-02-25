const pool = require("../db/pool");
const path = require("node:path");

async function getMediaTypes(req, res) {
  try {
    const { rows: mediaTypes } = await pool.query("SELECT * FROM media_types");
    console.log("Media Types: ", mediaTypes);
    res.send({ "Media Types": mediaTypes.map((mediaType) => mediaType.name) });
  } catch (error) {
    console.error("Error fetching:", error);
    res.status(500).json({
      error: "Error fetching",
      details: error.message,
    });
  }
}

async function createMediaGet(req, res) {
  res.sendFile(path.join(__dirname, "../forms/mediaForm.html"));
}

async function createMediaPost(req, res) {
  const { media_type } = req.body;
  console.log(media_type)
  await pool.query("INSERT INTO media_types (name) VALUES ($1)", [media_type]);
  res.redirect("/");
}

module.exports = {
  getMediaTypes,
    createMediaGet,
    createMediaPost,
};
