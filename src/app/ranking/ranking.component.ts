import { Component } from '@angular/core';
import { RankingResult } from '../interfaces/ranking-result';

@Component({
  selector: 'app-ranking',
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  ranking: RankingResult[] = [];

  currentPage = 1;
  itemsPerPage = 10;

  ngOnInit(): void {
    this.loadRanking();
  }

  loadRanking(): void {
    const storedRanking = localStorage.getItem('treasure_ranking');

    if (!storedRanking) {
      this.ranking = [];
      return;
    }

    this.ranking = JSON.parse(storedRanking)
      .sort((a: RankingResult, b: RankingResult) => b.score - a.score);
  }

  get totalPages(): number {
    return Math.ceil(this.ranking.length / this.itemsPerPage);
  }

  get paginatedRanking(): RankingResult[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.ranking.slice(start, end);
  }

  get hasRanking(): boolean {
    return this.ranking.length > 0;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  clearRanking(): void {
    const confirmClear = confirm('¿Seguro que quieres borrar el ranking?');

    if (!confirmClear) {
      return;
    }

    localStorage.removeItem('treasure_ranking');
    this.ranking = [];
    this.currentPage = 1;
  }

  getPosition(index: number): number {
    return (this.currentPage - 1) * this.itemsPerPage + index + 1;
  }

  getPathLabel(result: RankingResult): string {
    if (result.won) {
      return 'Tesoro conquistado';
    }

    return `Pregunta ${result.reachedQuestion}`;
  }

  getDateLabel(date?: string): string {
    if (!date) {
      return '';
    }

    return new Date(date).toLocaleDateString('es-ES');
  }

}
