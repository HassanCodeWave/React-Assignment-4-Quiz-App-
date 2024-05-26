import React, { useState } from 'react';
import Question from './Question';
import './Quiz.css';

interface QuizData {
  question: string;
  answers: string[];
  correct: string;
}

const quizData: QuizData[] = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    correct: "Harper Lee"
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: "Pacific Ocean"
  },
  {
    question: "In which year did the Titanic sink?",
    answers: ["1912", "1913", "1911", "1910"],
    correct: "1912"
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correct: "Leonardo da Vinci"
  },
  {
    question: "What is the capital city of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: "Canberra"
  },
  {
    question: "What is the smallest prime number?",
    answers: ["0", "1", "2", "3"],
    correct: "2"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Gold", "Osmium", "Oganesson"],
    correct: "Oxygen"
  },
  {
    question: "How many continents are there on Earth?",
    answers: ["5", "6", "7", "8"],
    correct: "7"
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h1>Quiz Completed</h1>
          <p>You scored {score} out of {quizData.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <Question
          question={quizData[currentQuestion].question}
          answers={quizData[currentQuestion].answers}
          correctAnswer={quizData[currentQuestion].correct}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default Quiz;
