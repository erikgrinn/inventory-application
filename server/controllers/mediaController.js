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

// async function createUsernameGet(req, res) {
//   res.sendFile(path.join(__dirname, "../form.html"));
// }

// async function createUsernamePost(req, res) {
//   const { username } = req.body;
//   await db.insertUsername(username);
//   res.redirect("/");
// }

module.exports = {
  getMediaTypes,
  //   createUsernameGet,
  //   createUsernamePost,
};
