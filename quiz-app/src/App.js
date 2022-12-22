import React, { useState } from "react";

export default function App() {
   const questions = [
      {
         questionText: "What is the capital of France?",
         answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
         ],
      },
      {
         questionText: "Who is CEO of Tesla?",
         answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
         ],
      },
      {
         questionText: "The iPhone was created by which company?",
         answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
         ],
      },
      {
         questionText: "How many Harry Potter books are there?",
         answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
         ],
      },
   ];

   const [currQuestion, setcurrQuestion] = useState(0);
   const [showScore, setShowScore] = useState(false);
   const [scoreCount, setScoreCount] = useState(0);

   const handle_answer_click = (isCorrect) => {
      if (isCorrect) setScoreCount((scoreCount) => scoreCount + 1);
      const next_question = currQuestion + 1;
      if (next_question < questions.length) {
         setcurrQuestion((currQuestion) => next_question);
      } else {
         setShowScore((showScore) => true);
      }
   };
   return (
      <div className='app'>
         {showScore ? (
            <div className='score-section'>
               You scored {scoreCount} out of {questions.length}
            </div>
         ) : (
            <>
               <div className='question-section'>
                  <div className='question-count'>
                     <span>Question {currQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className='question-text'>
                     {questions[currQuestion].questionText}
                  </div>
               </div>
               <div className='answer-section'>
                  {questions[currQuestion].answerOptions.map(
                     (answerOption, key) => {
                        return (
                           <button
                              key={key}
                              onClick={() =>
                                 handle_answer_click(answerOption.isCorrect)
                              }>
                              {answerOption.answerText}
                           </button>
                        );
                     }
                  )}
               </div>
            </>
         )}
      </div>
   );
}
