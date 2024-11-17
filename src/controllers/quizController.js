const Quiz = require("../models/quiz");

exports.createQuiz = async (req, res) => {
  const { title, description } = req.body;
  try {
    const quizId = await Quiz.create(title, description);
    res.status(201).json({ quizId });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar quiz" });
  }
};

exports.listQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.getAll();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar quizzes" });
  }
};
