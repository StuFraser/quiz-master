export const renderQuestion = (question, index, total, currentAnswer, onNext, onPrev, onFinish) => {
  const app = document.getElementById("app");
  app.innerHTML = "";

  console.log("Question", question);

  const questionDiv = document.createElement("div");
  questionDiv.className = "question-form";

  const qText = document.createElement("h2");
  qText.textContent = `Question ${index + 1} of ${total}: ${question.question}`;
  questionDiv.appendChild(qText);


  const answersDiv = document.createElement("div");
  answersDiv.className = "answers";

  question.answers.forEach((answer) => {
    const label = document.createElement("label");
    label.className = "answer-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer"; // group name
    input.value = answer.id;

    if (currentAnswer != null && currentAnswer === answer.id) {
      input.checked = true;
    }

    const span = document.createElement("span");
    span.textContent = answer.answer;

    label.appendChild(input);
    label.appendChild(span);
    answersDiv.appendChild(label);
  });

  questionDiv.appendChild(answersDiv);

  const getSelectedAnswerId = () => {
    const checked = answersDiv.querySelector('input[name="answer"]:checked');
    return checked ? parseInt(checked.value, 10) : null;
  };

  // Navigation buttons container
  const navDiv = document.createElement("div");
  navDiv.className = "nav-buttons";

  if (index > 0) {
    const backBtn = document.createElement("button");
    backBtn.type = "button";
   // backBtn.textContent = "Back";
    backBtn.className = "nav-button";

    const img = document.createElement("img");
    img.src = "../assets/back.png"; // replace with your image path
    img.alt = "Back";
    backBtn.appendChild(img);


    backBtn.onclick = () => {
      const selectedId = getSelectedAnswerId();
      onPrev(question.id, selectedId);
    };
    navDiv.appendChild(backBtn);
  }

  if (index < total - 1) {
    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    //nextBtn.textContent = "Next";
    nextBtn.className = "nav-button";
    const img = document.createElement("img");
    img.src = "../assets/next.png"; // replace with your image path
    img.alt = "Next";
    nextBtn.appendChild(img);
    nextBtn.onclick = () => {
      const selectedId = getSelectedAnswerId();
      if (selectedId !== null) {
        onNext(question.id, selectedId);
      } else {
        alert("Please select an answer before continuing.");
      }
    };
    navDiv.appendChild(nextBtn);
  } else {
    const finishBtn = document.createElement("button");
    finishBtn.textContent = "Finish Quiz";
    finishBtn.className = "nav-button";
    finishBtn.onclick = onFinish;
    navDiv.appendChild(finishBtn);
  }

  questionDiv.appendChild(navDiv);

  app.appendChild(questionDiv);
}
