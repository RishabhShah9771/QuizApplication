import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionsIndex = userAnswers.length;

    const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy Icon" />
                <h2>Quiz Completed</h2>
            </div>
        );
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionsIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionsIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionsIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
