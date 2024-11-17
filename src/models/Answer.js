const db = require("../config/db");

const Answer = {
  create: async (questionId, answerText, isCorrect) => {
    const [result] = await db.query(
      "INSERT INTO answers (question_id, answer_text, is_correct) VALUES (?, ?, ?)",
      [questionId, answerText, isCorrect]
    );
    return result.insertId;
  },

  getByQuestionId: async (questionId) => {
    const [rows] = await db.query(
      "SELECT * FROM answers WHERE question_id = ?",
      [questionId]
    );
    return rows;
  },
};

module.exports = Answer;
