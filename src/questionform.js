export const renderQuestion = (question, index, total, currentAnswer, onNext, onPrev, onFinish) => {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const questionDiv = document.createElement("div");
  questionDiv.className = "question-form";
  questionDiv.style.display = "flex";
  questionDiv.style.flexDirection = "column";
  questionDiv.style.height = "100%"; // fill the app container

  // ---------------------
  // Question text + answers container
  // ---------------------
  const contentDiv = document.createElement("div");
  contentDiv.className = "question-content";
  contentDiv.style.flex = "1"; // take all available vertical space
  contentDiv.style.display = "flex";
  contentDiv.style.flexDirection = "column";
  contentDiv.style.justifyContent = "flex-start";

  const qText = document.createElement("h2");
  qText.textContent = `Question ${index + 1} of ${total}: ${question.question}`;
  contentDiv.appendChild(qText);




  if (question.imageUrl) {
    const img = document.createElement("img");
    img.src = question.image;
      console.log(img.src)
    img.alt = "Question Image";
    img.className = "question-image";
    img.style.maxWidth = "100%";
    img.style.margin = "10px 0";
    contentDiv.appendChild(img);
  }

  const answersDiv = document.createElement("div");
  answersDiv.className = "answers";
  answersDiv.style.display = "flex";
  answersDiv.style.flexDirection = "column";
  answersDiv.style.gap = "0.5rem";

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

  contentDiv.appendChild(answersDiv);
  questionDiv.appendChild(contentDiv);

  // ---------------------
  // Navigation buttons container
  // ---------------------
  const navDiv = document.createElement("div");
  navDiv.className = "nav-buttons";
  navDiv.style.display = "flex";
  navDiv.style.justifyContent = "center";
  navDiv.style.gap = "1rem";
  navDiv.style.marginTop = "1rem";

  const getSelectedAnswerId = () => {
    const checked = answersDiv.querySelector('input[name="answer"]:checked');
    return checked ? parseInt(checked.value, 10) : null;
  };

  if (index > 0) {
    const backBtn = document.createElement("button");
    backBtn.type = "button";
    backBtn.className = "nav-button";

    const img = document.createElement("img");
    img.src = "../assets/back.png";
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
    nextBtn.className = "nav-button";

    const img = document.createElement("img");
    img.src = "../assets/next.png";
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
    finishBtn.className = "nav-button";
    finishBtn.onclick = onFinish;
    navDiv.appendChild(finishBtn);

    const img = document.createElement("img");
    img.src = "../assets/finish.png";
    img.alt = "Finish";
    finishBtn.appendChild(img);
  }

  questionDiv.appendChild(navDiv);
  app.appendChild(questionDiv);
};
