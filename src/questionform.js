export function renderQuestion(
  question,
  currentIndex,
  totalQuestions,
  selectedAnswerId,
  onNext,
  onPrev
) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const container = document.createElement("div");
  container.className = "question-form";

  const questionText = document.createElement("h2");
  questionText.textContent = `Q${currentIndex + 1}. ${question.question}`;
  container.appendChild(questionText);

  const answersWrapper = document.createElement("div");
  answersWrapper.className = "answers";

  question.answers.forEach(a => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = a.id;
    if (selectedAnswerId === a.id) input.checked = true;

    const label = document.createElement("label");
    label.textContent = a.answer;
    label.prepend(input);

    answersWrapper.appendChild(label);
  });

  container.appendChild(answersWrapper);

  const nav = document.createElement("div");
  nav.className = "button-container";

  if (currentIndex > 0) {
    const prevBtn = document.createElement("button");
    //prevBtn.textContent = "Previous";
    
    prevBtn.className = "nav-button";
    prevBtn.addEventListener("click", () => {
      const selected = parseInt(document.querySelector('input[name="answer"]:checked')?.value, 10);
      onPrev(selected);
    });
    nav.appendChild(prevBtn);
  }

  const nextBtn = document.createElement("button");
  //nextBtn.textContent = currentIndex === totalQuestions - 1 ? "Finish" : "Next";
  const img = document.createElement("img");
  if (currentIndex === totalQuestions - 1) {

    img.src = "../assets/finish.png";
    img.alt = "Finish";
  } else {
    const img = document.createElement("img");
    img.src = "../assets/next.png";
    img.alt = "Next";
  }
  nextBtn.appendChild(img);
  nextBtn.className = "nav-button";
  nextBtn.addEventListener("click", () => {
    const selected = parseInt(document.querySelector('input[name="answer"]:checked')?.value, 10);
    onNext(selected);
  });
  nav.appendChild(nextBtn);

  container.appendChild(nav);
  app.appendChild(container);
}
