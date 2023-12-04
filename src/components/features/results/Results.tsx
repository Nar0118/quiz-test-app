import React from 'react';
import { ResultProps } from './types';

import styles from '../Question/question.module.scss'

const Result: React.FC<ResultProps> = ({ answers, onReset }) => {
  const score: number = answers.filter(Boolean).length;

  return (
    <div className={`${styles.container} ${styles.restartQuiz}`}>
      <h2>Your Score: {score}</h2>
      <button onClick={onReset}>Restart Quiz</button>
    </div>
  );
};

export default Result;
