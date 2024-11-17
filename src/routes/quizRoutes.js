const express = require("express");
const router = express.Router();

const quizController = require("../controllers/quizController");
const questionController = require("../controllers/questionController");
const answerController = require("../controllers/answerController");

router.post("/quiz", quizController.createQuiz);
router.get("/quizzes", quizController.listQuizzes);

router.post("/question", questionController.createQuestion);
router.get("/quiz/:quizId/questions", questionController.listQuestionsByQuiz);

router.post("/answer", answerController.createAnswer);
router.get(
  "/question/:questionId/answers",
  answerController.listAnswersByQuestion
);

module.exports = router;
