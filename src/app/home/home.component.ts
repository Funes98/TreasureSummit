import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showNameForm = false;
  showRules = false;
  playerName = '';

  constructor(
  private router: Router,
  private rankingService: RankingService
  ) {}

  showDuplicateNameWarning = false;
  
  duplicatedName = '';

  openNameForm(): void {
    this.showNameForm = true;
    this.showRules = false;
  }

  goBack(): void {
    this.showNameForm = false;
    this.playerName = '';
    this.showDuplicateNameWarning = false;
  }

  toggleRules(): void {
    this.showRules = !this.showRules;
  }

  async startGame(): Promise<void> {
    const name = this.playerName.trim();

    if (!name) {
      return;
    }

    try {
      const exists = await this.rankingService.nameExists(name);

      if (exists) {
        this.duplicatedName = name;
        this.showDuplicateNameWarning = true;
        return;
      }

      this.beginGame(name);
    } catch (error) {
      console.error('Error comprobando el nombre:', error);

      // Si Supabase falla, dejamos jugar igualmente
      this.beginGame(name);
    }
  }

  confirmDuplicatedName(): void {
    this.showDuplicateNameWarning = false;
    this.beginGame(this.duplicatedName);
  }

  changeName(): void {
    this.showDuplicateNameWarning = false;
  }

  private beginGame(name: string): void {
    localStorage.setItem('treasure_player_name', name);
    localStorage.setItem('treasure_can_start_game', 'true');

    localStorage.removeItem('treasure_last_result');
    localStorage.removeItem('treasure_last_status');

    this.router.navigate(['/game']);
  }

  private nameExistsInRanking(name: string): boolean {
    const ranking = JSON.parse(localStorage.getItem('treasure_ranking') || '[]');

    const normalizedName = this.normalizeName(name);

    return ranking.some((result: any) => {
      return this.normalizeName(result.playerName || '') === normalizedName;
    });
  }

  private normalizeName(name: string): string {
    return name
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }



}
