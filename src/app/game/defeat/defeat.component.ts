import { Component } from '@angular/core';
import { RankingResult } from '../../interfaces/ranking-result';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-defeat',
  imports: [RouterLink],
  templateUrl: './defeat.component.html',
  styleUrl: './defeat.component.css'
})
export class DefeatComponent {

  result: RankingResult | null = null;

  playerName = 'Aventurero';
  score = 0;
  reachedQuestion = 1;
  correctAnswers = 0;

  ngOnInit(): void {
    const storedResult = localStorage.getItem('treasure_last_result');

    if (!storedResult) {
      return;
    }

    this.result = JSON.parse(storedResult);

    this.playerName = this.result?.playerName || 'Aventurero';
    this.score = this.result?.score || 0;
    this.reachedQuestion = this.result?.reachedQuestion || 1;
    this.correctAnswers = this.result?.correctAnswers || 0;
  }

}
