import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RankingResult } from '../interfaces/ranking-result';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-ranking',
  imports: [RouterLink],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent implements OnInit {
  ranking: RankingResult[] = [];

  currentPage = 1;
  itemsPerPage = 10;
  totalResults = 0;

  loading = true;
  errorMessage = '';

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.loadRanking();
  }

  async loadRanking(): Promise<void> {
    this.loading = true;
    this.errorMessage = '';

    try {
      this.totalResults = await this.rankingService.getRankingCount();
      this.ranking = await this.rankingService.getRanking(
        this.currentPage,
        this.itemsPerPage
      );
    } catch (error) {
      console.error(error);
      this.errorMessage = 'No se pudo cargar el ranking.';
    } finally {
      this.loading = false;
    }
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalResults / this.itemsPerPage));
  }

  get paginatedRanking(): RankingResult[] {
    return this.ranking;
  }

  get hasRanking(): boolean {
    return this.ranking.length > 0;
  }

  async nextPage(): Promise<void> {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      await this.loadRanking();
    }
  }

  async previousPage(): Promise<void> {
    if (this.currentPage > 1) {
      this.currentPage--;
      await this.loadRanking();
    }
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