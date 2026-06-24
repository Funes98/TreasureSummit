import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-victory',
  imports: [RouterLink],
  templateUrl: './victory.component.html',
  styleUrl: './victory.component.css'
})
export class VictoryComponent {
  playerName = localStorage.getItem('treasure_player_name') || 'Aventurero';
  showNote = false;

  openNote(): void {
    this.showNote = true;
  }

}
