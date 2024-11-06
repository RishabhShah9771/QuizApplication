import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionsIndex = userAnswers.length;
    const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
  },
      []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy Icon" />
                <h2>Quiz Completed</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
          <Question
              key={activeQuestionsIndex}
              index={activeQuestionsIndex}
              onSelectAnswer={handleSelectAnswer}
              onSkipAnswer={handleSkipAnswer}
          />
      </div>
  );
}
