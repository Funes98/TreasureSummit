import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wildcard } from '../../interfaces/wildcard';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-hard-stage',
  imports: [],
  templateUrl: './hard-stage.component.html',
  styleUrl: './hard-stage.component.css'
})
export class HardStageComponent {
  @Input({ required: true }) question!: Question;
  @Input({ required: true }) questionNumber!: number;
  @Input({ required: true }) totalQuestions!: number;
  @Input({ required: true }) totalScore!: number;
  @Input({ required: true }) playerName!: string;
  @Input({ required: true }) timeLeft!: number;
  @Input({ required: true }) wildcards!: Wildcard[];
  @Input() disabledOptions: string[] = [];
  @Input() usedWildcardIdsThisQuestion: string[] = [];
  @Input({ required: true }) canRetire!: boolean;
  @Input({ required: true }) showBlackbeardTemptation!: boolean;

  @Output() answerSelected = new EventEmitter<string>();
  @Output() wildcardSelected = new EventEmitter<string>();
  @Output() retire = new EventEmitter<void>();
  @Output() continueJourney = new EventEmitter<void>();
  @Output() acceptBlackbeardDeal = new EventEmitter<void>();

  selectAnswer(answer: string): void {
    this.answerSelected.emit(answer);
  }

  useWildcard(wildcardId: string): void {
    this.wildcardSelected.emit(wildcardId);
  }

  retireGame(): void {
    this.retire.emit();
  }

  continueClimbing(): void {
    this.continueJourney.emit();
  }

  acceptDeal(): void {
    this.acceptBlackbeardDeal.emit();
  }

}
