import { calculateScore } from "./QuizFunctions.js";
import { getSessionVar } from "./StateManager.js";

export function renderResults(quiz, responses, onRestart) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear previous view

  const resultsContainer = document.createElement("div");
  resultsContainer.className = "results-container";

  const scrollArea = document.createElement("div");
  scrollArea.className = "results-scroll-area";
  resultsContainer.appendChild(scrollArea);

  console.log("Questions:", quiz);
  console.log("responses:", responses);

  quiz.forEach(q => {
    const userResponse = responses.find(r => r.questionId === q.id);
    const correctAnswer = q.answers.find(a => a.correct);
    const userAnswer = q.answers.find(a => a.id === userResponse?.answerId);

    //console.log("UserResponse: ", userResponse)
    //console.log("correctAnswer: ", correctAnswer)
    //console.log("userAnswer: ", userAnswer)

    const questionDiv = document.createElement("div");
    questionDiv.className = "result-question";

    const questionText = document.createElement("h3");
    questionText.textContent = q.question;

    questionDiv.appendChild(questionText);
    if (q.image) {
      const questionImage = document.createElement("img");
      questionImage.src = q.image;
      questionImage.alt = "Question image";
      questionImage.className = "question-image";
      questionDiv.appendChild(questionImage);
    }

    const correctText = document.createElement("p");
    correctText.textContent = `✅ Correct answer: ${correctAnswer.answer}`;


    questionDiv.appendChild(correctText);

    if (userResponse?.answerId === correctAnswer.id) {
      questionDiv.classList.add("correct");
    } else if (userAnswer) {
      const userText = document.createElement("p");
      userText.textContent = `❌ Your answer: ${userAnswer.answer}`;
      questionDiv.appendChild(userText);
      questionDiv.classList.add("incorrect");
    }

    scrollArea.appendChild(questionDiv);
  });

  const yourScore = calculateScore(quiz, responses, getSessionVar("answerCount"));

  const scoreSummary = document.createElement("h2");
  scoreSummary.textContent = `Your score: ${yourScore}%`;
  resultsContainer.prepend(scoreSummary);

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Try Again";
  restartBtn.className = "control-button";
  restartBtn.addEventListener("click", () => { onRestart(); }
  );

  resultsContainer.appendChild(restartBtn);

  app.appendChild(resultsContainer);
}
