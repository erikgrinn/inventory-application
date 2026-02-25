const pool = require("../db/pool");
const path = require("node:path");

async function getMediaTypes(req, res) {
  try {
    const { rows: mediaTypes } = await pool.query("SELECT * FROM media_types");
    console.log("Media Types: ", mediaTypes);
    res.send({ "mediaTypes": mediaTypes.map((mediaType) => mediaType.name) });
  } catch (error) {
    console.error("Error fetching:", error);
    res.status(500).json({
      error: "Error fetching",
      details: error.message,
    });
  }
}

// this would be at backend 8080
// async function createMediaGet(req, res) {
//   res.sendFile(path.join(__dirname, "../forms/mediaForm.html"));
// }

async function createMediaPost(req, res) {
  const { mediaType } = req.body;

  console.log(mediaType);
  if (!mediaType) return res.end();

  await pool.query("INSERT INTO media_types (name) VALUES ($1)", [mediaType]);
  res.end();
}

module.exports = {
  getMediaTypes,
  // createMediaGet,
  createMediaPost,
};
