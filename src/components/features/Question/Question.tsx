import React from 'react';
import { useSelector } from 'react-redux';
import { selectQuiz } from '../../../app/quizSlice';
import { CurrentQuestionIndexType, QuestionProps } from './types';

import styles from './question.module.scss';

const Question: React.FC<QuestionProps> = ({ question, choices, correctAnswer, onAnswer, onNext, onPrev }) => {
  const { currentQuestionIndex }: CurrentQuestionIndexType = useSelector(selectQuiz);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === correctAnswer)
      onAnswer(event.target.value);
  };

  return (
    <div className={styles.container} style={{

    }}>
      <h2>{question}</h2>
      <form>
        {choices.map((choice, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`choice-${index}`}
              name="answer"
              value={choice}
              onChange={handleChange}
            />
            <label htmlFor={`choice-${index}`}>{choice}</label>
          </div>
        ))}
      </form>
      <div className={styles.btns}>
        <button onClick={onPrev} disabled={!currentQuestionIndex}>
          Previous
        </button>
        <button onClick={onNext} disabled={false}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
