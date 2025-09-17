
import React, { useState } from 'react';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerOptionClick = (option: string) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(option);
      if (option === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  }

  return (
    <div className='quiz mt-4'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz} className="btn btn-primary mt-2">Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option, index) => {
              const isCorrect = option === questions[currentQuestion].correctAnswer;
              const isSelected = selectedAnswer === option;
              let buttonClass = 'btn';
              if (isSelected) {
                buttonClass += isCorrect ? ' btn-success' : ' btn-danger';
              } else {
                buttonClass += ' btn-outline-primary';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                  className={`${buttonClass} m-2`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {selectedAnswer && (
            <button onClick={nextQuestion} className="btn btn-primary mt-2">Next</button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
