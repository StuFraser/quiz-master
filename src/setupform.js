export function renderSetupForm(quizTopics, onSubmit) {
  const app = document.getElementById("app");
  app.innerHTML = `
  <div class="setup-container">
    <div class="form-wrapper">
      <h2>Generate Your Quiz</h2>
      <form id="setup-form" class="generator-form">
        <div class="form-row">
          <label for="topic">Topic:</label>
          <select name="topic" id="topic" required></select>
        </div>
        <div class="form-row">
          <label for="numQuestions">Number of Questions:</label>
          <input type="number" name="numQuestions" id="numQuestions" value="5" min="1" max="20" required />
        </div>
        <div class="form-row">
          <label for="numAnswers">Answers per Question:</label>
          <input type="number" name="numAnswers" id="numAnswers" value="4" min="2" max="6" required />
        </div>
        <button type="submit" class="control-button">Generate Quiz</button>
      </form>
    </div>
    <div class="instructions-panel">
        <h3>How to Use Quiz Master</h3>
        <h4>1. Choose a topic from the dropdown.</h4>
        <p class="indented">Use the dropdown menu to pick the quiz topic you’d like to try.</p>
        <h4>2. Set Your Preferences</h4>
        <p class="indented">Enter how many questions you want and how many answer options each question should have.  The more answers, the better you score</p>
        <h4>3. Click "Generate Quiz" to start.</h4>
        <p class="indented"> Each question will appear one at a time — read carefully and select your answer. </p>
        <h4>4. Navigate questions with the next/back buttons.</h4>
        <p class="indented">Use the Next and Back buttons (arrow icons) to move through the quiz</p>
        <h4>5. View Your Results.</h4>
        <p class="indented">When you finish, your results page will show: </br>
            ✅ The correct answers </br>
            ❌ Any answers you got wrong </br>
            💯 Your total score
          </p>
    </div>
  </div>
  </div>
  `;

  // Populate topic select
  const topicSelect = document.getElementById("topic");
  quizTopics.forEach(({ id, topic }) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = topic;
    topicSelect.appendChild(option);
  });

  // Form submit handler
  document.getElementById("setup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedId = parseInt(topicSelect.value, 10);
    const numQuestions = parseInt(formData.get("numQuestions"), 10);
    const numAnswers = parseInt(formData.get("numAnswers"), 10);

    onSubmit({ topicId: selectedId, numQuestions, numAnswers });
  });
}
