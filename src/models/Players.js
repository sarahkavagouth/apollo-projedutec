const db = require("../config/db");

const Player = {
  create: async (fullName, email, birthDate, username, password, score = 0) => {
    const [result] = await db.query(
      "INSERT INTO players (full_name, email, birth_date, username, password, score) VALUES (?, ?, ?, ?, ?, ?)",
      [fullName, email, birthDate, username, password, score]
    );
    return result.insertId;
  },
  findByUsername: async (username) => {
    const [rows] = await db.query("SELECT * FROM players WHERE username = ?", [
      username,
    ]);
    return rows[0];
  },
  getAll: async () => {
    const [rows] = await db.query(
      "SELECT full_name, username, score FROM players ORDER BY score DESC"
    );
    return rows;
  },

  incrementScore: async (playerId) => {
    const [result] = await db.query(
      "UPDATE players SET score = score + 1 WHERE id = ?",
      [playerId]
    );
    return result.affectedRows > 0;
  },
};

module.exports = Player;
