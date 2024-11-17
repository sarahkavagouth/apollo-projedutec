const db = require("../config/db");

const Question = {
  create: async (quizId, questionText) => {
    const [result] = await db.query(
      "INSERT INTO questions (quiz_id, question_text) VALUES (?, ?)",
      [quizId, questionText]
    );
    return result.insertId;
  },

  getByQuizId: async (quizId) => {
    const [rows] = await db.query("SELECT * FROM questions WHERE quiz_id = ?", [
      quizId,
    ]);
    return rows;
  },
};

module.exports = Question;
