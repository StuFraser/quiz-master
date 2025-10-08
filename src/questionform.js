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

  const questionIndex = document.createElement("h3");
  questionIndex.className = ""
  questionIndex.textContent = `Question ${currentIndex + 1} of ${totalQuestions}`;
  container.appendChild(questionIndex);

  const questionText = document.createElement("h2");
  questionText.textContent = question.question;
  container.appendChild(questionText);

  //console.log("question: ", question);

  if (question.image) {

    //console.log(question.image)

    const questionImage = document.createElement("img"); 
    questionImage.src = question.image;                 
    questionImage.alt = "Question image";               
    questionImage.className = "question-image";        

    container.appendChild(questionImage);
  }

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
    const img = document.createElement("img");
    img.src = "../assets/back.png";
    img.alt = "Next";
    prevBtn.appendChild(img);
    nav.appendChild(prevBtn);
  }

  const nextBtn = document.createElement("button");
  //nextBtn.textContent = currentIndex === totalQuestions - 1 ? "Finish" : "Next";
  const img = document.createElement("img");
  if (currentIndex === totalQuestions - 1) {
    img.src = "../assets/finish.png";
    img.alt = "Finish";
  } else {
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
