export function renderSetupForm( quizTopics, onSubmit) {
  const app = document.getElementById("app");
  app.innerHTML = `
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
      <button type="submit">Generate Quiz</button>
    </form>
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

    //console.log(selectedId);

    onSubmit({ topicId: selectedId, numQuestions, numAnswers });
  });
}
