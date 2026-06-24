import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../interfaces/question';
import { Wildcard } from '../../interfaces/wildcard';

@Component({
  selector: 'app-medium-stage',
  imports: [],
  templateUrl: './medium-stage.component.html',
  styleUrl: './medium-stage.component.css'
})
export class MediumStageComponent {

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

  @Output() answerSelected = new EventEmitter<string>();
  @Output() wildcardSelected = new EventEmitter<string>();
  @Output() retire = new EventEmitter<void>();

  selectAnswer(answer: string): void {
    this.answerSelected.emit(answer);
  }

  useWildcard(wildcardId: string): void {
    this.wildcardSelected.emit(wildcardId);
  }

  retireGame(): void {
    this.retire.emit();
  }



}
