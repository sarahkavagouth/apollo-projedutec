const db = require("../config/db");

const Quiz = {
  create: async (title, description) => {
    const [result] = await db.query(
      "INSERT INTO quizzes (title, description) VALUES (?, ?)",
      [title, description]
    );
    return result.insertId;
  },

  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM quizzes");
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query("SELECT * FROM quizzes WHERE id = ?", [id]);
    return rows[0];
  },
};

module.exports = Quiz;
