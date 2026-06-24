import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wildcard } from '../../interfaces/wildcard';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-very-hard-stage',
  imports: [],
  templateUrl: './very-hard-stage.component.html',
  styleUrl: './very-hard-stage.component.css'
})
export class VeryHardStageComponent {
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
  @Input({ required: true }) showFinalThreat!: boolean;

  @Output() answerSelected = new EventEmitter<string>();
  @Output() wildcardSelected = new EventEmitter<string>();
  @Output() retire = new EventEmitter<void>();
  @Output() continueFinalChallenge = new EventEmitter<void>();
  @Output() surrenderFinalChallenge = new EventEmitter<void>();

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
    this.continueFinalChallenge.emit();
  }

  surrender(): void {
    this.surrenderFinalChallenge.emit();
  }

}
