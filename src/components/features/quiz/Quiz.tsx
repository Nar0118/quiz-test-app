import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../Question/Question';
import { selectQuiz, answerQuestion, nextQuestion, prevQuestion, resetQuiz } from '../../../app/quizSlice';
import Result from '../results/Results';
import { UseSelectorType } from './types';

import styles from './quiz.module.scss';

const Quiz: React.FC = () => {
    const dispatch = useDispatch();
    const { currentQuestionIndex, answers }: UseSelectorType = useSelector(selectQuiz);
    const questions = [
        {
            question: 'What is the capital of France?',
            choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctAnswer: 'Paris',
        },
        {
            question: 'Which programming language is React built with?',
            choices: ['Java', 'JavaScript', 'C++', 'Python'],
            correctAnswer: 'JavaScript',
        },
    ];

    const handleAnswer = (answer: string) => {
        dispatch(answerQuestion(answer));
    };

    const handleNext = () => {
        dispatch(nextQuestion());
    };

    const handlePrev = () => {
        currentQuestionIndex > 0 && dispatch(prevQuestion());
    };

    const handleReset = () => {
        dispatch(resetQuiz());
    };

    return (
        <div className={styles.app}>
            {currentQuestionIndex < questions.length ? (
                <Question
                    question={questions[currentQuestionIndex].question}
                    choices={questions[currentQuestionIndex].choices}
                    correctAnswer={questions[currentQuestionIndex].correctAnswer}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            ) : (
                <Result answers={answers} onReset={handleReset} />
            )}
        </div>
    );
};

export default Quiz;
