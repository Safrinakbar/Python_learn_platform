import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "What is a variable in Python?",
    options: ["A constant", "A data type", "A storage location", "A function"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is a correct variable assignment?",
    options: ["1 = x", "x = 1", "x == 1", "x : 1"],
    correctAnswer: 1,
  },
];

const Variables = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionIndex]: optionIndex,
    }));
  };

  const handleQuizSubmission = (e) => {
    e.preventDefault();
    const allCorrect = quizQuestions.every((q, index) => 
      selectedAnswers[index] === q.correctAnswer
    );
    setQuizComplete(allCorrect);
  };

  return (
    <div>
      <h2>Variables Quiz</h2>
      <form onSubmit={handleQuizSubmission}>
        {quizQuestions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            {q.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionIndex}
                  onChange={() => handleOptionChange(index, optionIndex)}
                  checked={selectedAnswers[index] === optionIndex}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {quizComplete && <p>Quiz Completed! Proceed to the next stage.</p>}
      {!quizComplete && quizComplete !== null && <p>Some answers are incorrect. Try again!</p>}
    </div>
  );
};

export default Variables;
