import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { RankingResult } from '../interfaces/ranking-result';

const supabaseUrl = 'https://quomkkdogodlrrwgbayu.supabase.co';
const supabaseAnonKey = 'sb_publishable_2sO54hLHO_zAMX03BzU1yg_jL-nNFf9';

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

  async getRanking(page = 1, itemsPerPage = 10): Promise<RankingResult[]> {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;

    const { data, error } = await supabase
      .from('ranking')
      .select('*')
      .order('score', { ascending: false })
      .order('created_at', { ascending: true })
      .range(start, end);

    if (error) {
      console.error('Error cargando ranking:', error.message);
      throw error;
    }

    return (data ?? []).map(item => ({
      playerName: item.player_name,
      score: item.score,
      won: item.won,
      correctAnswers: item.correct_answers,
      reachedQuestion: item.reached_question,
      date: item.created_at
    }));
  }

  async getRankingCount(): Promise<number> {
    const { count, error } = await supabase
      .from('ranking')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Error contando ranking:', error.message);
      throw error;
    }

    return count ?? 0;
  }

  async nameExists(playerName: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('ranking')
      .select('id')
      .ilike('player_name', playerName.trim())
      .limit(1);

    if (error) {
      console.error('Error comprobando nombre:', error.message);
      throw error;
    }

    return (data ?? []).length > 0;
  }
}