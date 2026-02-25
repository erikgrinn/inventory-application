const pool = require("../db/pool");
const path = require("node:path");

async function getSources(req, res) {
  try {
    const { rows: sources } = await pool.query("SELECT * FROM sources");
    console.log("Sources: ", sources);
    res.send({ sources: sources.map((source) => source.name) });
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

// error: null value in column "media_type_id" of relation "sources" violates not-null constraint
async function createSourcePost(req, res) {
  const { source } = req.body;

  console.log(source);
  if (!source) return res.end();

  await pool.query("INSERT INTO sources (name) VALUES ($1)", [source]);
  res.end();
}

module.exports = {
  getSources,
  createSourcePost,
};
