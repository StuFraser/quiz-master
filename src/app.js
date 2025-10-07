import { renderSetupForm } from "./setupform.js";
import { quizTopics, getQuizQuestions, createResponseArray } from "./functions/QuizFunctions.js";
import { saveSessionVar, getSessionVar } from "./functions/StateManager.js";
import { renderQuestion } from "./questionform.js";
import { renderResults } from "./resultsForm.js";

const init = () => {
  renderSetupForm(quizTopics(), ({ topicId, numQuestions, numAnswers }) => {
    // --- SETUP QUIZ DATA ---
    const quiz = getQuizQuestions(topicId, numQuestions, numAnswers);
    saveSessionVar("quiz", quiz);
    saveSessionVar("response", createResponseArray(quiz.map(q => q.id)));
    saveSessionVar("questionCount", numQuestions);
    saveSessionVar("answerCount", numAnswers);

    // --- STATE ---
    let currentIndex = 0;

    // --- HANDLERS ---
    const handleNextQuestion = (selectedAnswerId) => {
      if (selectedAnswerId == null) return alert("Please select an answer!");

      const response = getSessionVar("response");
      const currentQuestion = quiz[currentIndex];
      const r = response.find(q => q.questionId === currentQuestion.id);
      r.answerId = selectedAnswerId;
      saveSessionVar("response", response);

      if (currentIndex === quiz.length - 1) {
        renderResults(quiz, response, numQuestions, numAnswers, init);
      } else {
        currentIndex++;
        renderCurrentQuestion();
      }
    };

    const handlePrevQuestion = (questionId, answerId) => {
      const response = getSessionVar("response");
      const r = response.find(q => q.questionId === questionId)
      r.answerId = answerId;
      saveSessionVar("response", response);
      currentIndex--;
      renderCurrentQuestion();
    }

    const renderCurrentQuestion = () => {
      const quiz = getSessionVar("quiz");
      const currentQuestion = quiz[currentIndex];
      //console.log("Question: ", currentQuestion);
      const response = getSessionVar("response");
      const r = response.find(q => q.questionId === currentQuestion.id)
      renderQuestion(
        currentQuestion,
        currentIndex,
        quiz.length,
        r.answerId,
        handleNextQuestion,
        handlePrevQuestion,
      );
    };

    // --- START QUIZ ---
    renderCurrentQuestion();
  });
};

init();
