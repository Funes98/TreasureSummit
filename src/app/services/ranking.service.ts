import { Injectable } from '@angular/core';
import { RankingResult } from '../interfaces/ranking-result';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'TU_SUPABASE_URL';
const supabaseAnonKey = 'TU_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  async saveResult(result: RankingResult): Promise<void> {
    const { error } = await supabase
      .from('ranking')
      .insert({
        player_name: result.playerName,
        score: result.score,
        won: result.won,
        correct_answers: result.correctAnswers,
        reached_question: result.reachedQuestion
      });

    if (error) {
      console.error('Error guardando ranking:', error.message);
      throw error;
    }
  }

  async getRanking(): Promise<RankingResult[]> {
    const { data, error } = await supabase
      .from('ranking')
      .select('*')
      .order('score', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error cargando ranking:', error.message);
      throw error;
    }

    return data.map(item => ({
      id: item.id,
      playerName: item.player_name,
      score: item.score,
      won: item.won,
      correctAnswers: item.correct_answers,
      reachedQuestion: item.reached_question,
      createdAt: item.created_at
    }));
  }
}
