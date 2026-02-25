// not used - middleman between pool and controller
const pool = require("./pool");

async function getMediaTypes() {
  const { rows } = await pool.query("SELECT * FROM media_types");
  return rows;
}

// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

module.exports = {
  getMediaTypes,
//   insertUsername
};