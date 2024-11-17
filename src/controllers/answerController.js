const Answer = require("../models/answer");

exports.createAnswer = async (req, res) => {
  const { questionId, answerText, isCorrect } = req.body;
  try {
    const answerId = await Answer.create(questionId, answerText, isCorrect);
    res.status(201).json({ answerId });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar resposta" });
  }
};

exports.listAnswersByQuestion = async (req, res) => {
  const { questionId } = req.params;
  try {
    const answers = await Answer.getByQuestionId(questionId);
    res.status(200).json(answers);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar respostas" });
  }
};
