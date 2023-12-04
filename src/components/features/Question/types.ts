export interface QuestionProps {
  question: string;
  choices: string[];
  correctAnswer: string;
  onAnswer: (choice: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export type CurrentQuestionIndexType = { currentQuestionIndex: number };
