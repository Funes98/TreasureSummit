export interface RankingResult {
  id?: string;
  playerName: string;
  score: number;
  won: boolean;
  correctAnswers: number;
  reachedQuestion: number;
  createdAt?: string;
}