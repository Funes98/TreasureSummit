export type QuestionTier = 'easy' | 'medium' | 'hard' | 'very-hard';

export interface Question {
    id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  tier: QuestionTier;
  points: number;
}
