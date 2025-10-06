import QuizData from "../../data/QuizData.js"

export const quizTopics = () => {
    return QuizData.map(({ id, topic }) => ({ id, topic }));
}

export const createResponseArray = (questionIds) => {
    const responseArray = [];
    questionIds.forEach(qId =>{
        responseArray.push({
            questionId: qId,
            answerId: null
        });
    });
    return responseArray;
}

export const getQuizQuestions = (topicId, numQuestions, numAnswers) => {
    const topic = QuizData.find(t => t.id === topicId);
    if (!topic) return []  //Safety check, shouldn't happen if I've done my job.

    const questionPool = [...topic.questions];  //clone the array as sort mutates it
    questionPool.sort(() => 0.5 - Math.random()); //Randomise the question order.
    //console.log("questionPool", questionPool);

    if (numQuestions > topic.questions.length) { numQuestions = topic.questions.length; } // Avoid trying to take a too big slice
    const selectedQuestions = questionPool.slice(0, numQuestions);

    //Now should have our questions, now to randomise the answers and return the correct ammount

    selectedQuestions.forEach(q => {
        let questionAnswers = [];
        const answerPool = [...q.answers];

        //Ensure the correct answer is always in the list
        questionAnswers = questionAnswers.concat(answerPool.filter(a => a.correct));


        const incorrectAnswers = answerPool.filter(a => !a.correct); // array of incorrect answers;
        questionAnswers = questionAnswers.concat(incorrectAnswers.slice(0, numAnswers - 1)); // -1 because already pushed correct answer
        //console.log("questionAnswers", questionAnswers);
        q.answers = questionAnswers.sort(() => 0.5 - Math.random());
    });
    return selectedQuestions;
}