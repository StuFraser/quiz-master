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

    // --- STATE ---
    let currentIndex = 0;

    // --- HANDLERS ---
    const handleNextQuestion = (questionId, answerId) => {
      const response = getSessionVar("response");
      const r = response.find(q => q.questionId === questionId);
      console.log(`QuestionId: ${questionId} - AnswerId: ${answerId}`);
      //console.log("Response Array: ", response);
      r.answerId = answerId;
      saveSessionVar("response", response);
      currentIndex++;
      renderCurrentQuestion();
    }

    const handlePrevQuestion = (questionId, answerId) => {
      const response = getSessionVar("response");
      const r = response.find(q => q.questionId === questionId)
      r.answerId = answerId;
      saveSessionVar("response", response);
      currentIndex--;
      renderCurrentQuestion();
    }

    const handleFinish = () => {
      console.log("Quiz complete!");
      console.log("Responses:", getSessionVar("response"));
      //alert("Quiz finished! Check console for results.");
      renderResults(getSessionVar("quiz") ,getSessionVar("response"));
    };

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
        handleFinish
      );
    };

    // --- START QUIZ ---
    renderCurrentQuestion();
  });
};

init();
