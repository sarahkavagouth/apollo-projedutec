const Question = require("../models/question");
const Answer = require("../models/answer");

exports.createQuestion = async (req, res) => {
  const { quizId, questionText, answers } = req.body;
  try {
    const questionId = await Question.create(quizId, questionText);

    for (let answer of answers) {
      await Answer.create(questionId, answer.text, answer.isCorrect);
    }

    res.status(201).json({ questionId });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar pergunta" });
  }
};

exports.listQuestionsByQuiz = async (req, res) => {
  const { quizId } = req.params;
  try {
    const questions = await Question.getByQuizId(quizId);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar perguntas" });
  }
};
