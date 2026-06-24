import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showNameForm = false;
  showRules = false;
  playerName = '';

  router:Router=inject(Router)

  openNameForm(): void {
    this.showNameForm = true;
    this.showRules = false;
  }

  goBack(): void {
    this.showNameForm = false;
    this.playerName = '';
  }

  toggleRules(): void {
    this.showRules = !this.showRules;
  }

  startGame(): void {
    const name = this.playerName.trim();

    if (!name) {
      return;
    }

    localStorage.setItem('treasure_player_name', name);
    this.router.navigateByUrl('/game')
  }



}
