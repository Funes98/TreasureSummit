import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../interfaces/question';
import { Wildcard } from '../interfaces/wildcard';
import { EasyStageComponent } from './easy-stage/easy-stage.component';
import { MediumStageComponent } from './medium-stage/medium-stage.component';
import { HardStageComponent } from './hard-stage/hard-stage.component';
import { VeryHardStageComponent } from './very-hard-stage/very-hard-stage.component';
import { QUESTION_BANK } from '../data/question-bank';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-game',
  imports: [EasyStageComponent,MediumStageComponent,HardStageComponent,VeryHardStageComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
playerName = localStorage.getItem('treasure_player_name') || 'Aventurero';

  currentQuestionIndex = 0;
  totalScore = 0;
  correctAnswers = 0;

  timeLeft = 30;
  private timerId?: number;

  usedSecondChance = false;
  wildcardUsedThisQuestion = false;
  showWrongAnswerChoice = false;

  showBlackbeardTemptation = false;
  showFinalBlackbeardThreat = false;

  barbablancaChanceUsed = false;

  showBarbablancaGift = false;
  barbablancaGiftGiven = false;

  disabledOptions: string[] = [];
  usedWildcardIdsThisQuestion: string[] = [];

  questionBank: Question[] = QUESTION_BANK;

  questions: Question[] = [];

  usedQuestionIdsThisRun: number[] = [];

  wildcards: Wildcard[] = [
    {
      id: 'time',
      name: '+30s',
      icon: '⏳',
      description: 'Añade 30 segundos extra al temporizador.',
      quantity: 1
    },
    {
      id: 'fifty',
      name: '50/50',
      icon: '⚓',
      description: 'Elimina dos respuestas incorrectas.',
      quantity: 1
    },
    {
      id: 'change',
      name: 'Cambio',
      icon: '🗺️',
      description: 'Cambia la pregunta actual por otra.',
      quantity: 1
    }
  ];

  constructor(private router: Router,private rankingService: RankingService) {}

  ngOnInit(): void {
    this.startQuestionTimer();
    this.playerName = localStorage.getItem('treasure_player_name') || 'Aventurero';
    this.validateQuestionBank();
    this.startNewRun();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  get canRetire(): boolean {
    return this.currentQuestionIndex >= 7;
  }

  answerQuestion(selectedAnswer: string): void {
    const question = this.currentQuestion;
    const isCorrect = selectedAnswer === question.correctAnswer;

    if (!isCorrect) {
      this.handleWrongAnswer();
      return;
    }

    this.correctAnswers++;

    let pointsEarned = question.points;

    if (this.timeLeft > 0) {
      pointsEarned *= 1.5;
    }

    if (this.wildcardUsedThisQuestion) {
      pointsEarned *= 0.75;
    }

    this.totalScore += Math.round(pointsEarned);
    this.goNextQuestion();
  }

  useWildcard(wildcardId: string): void {
    const wildcard = this.wildcards.find(item => item.id === wildcardId);

    if (!wildcard || wildcard.quantity <= 0) {
      return;
    }

    if (this.usedWildcardIdsThisQuestion.includes(wildcardId)) {
      return;
    }

    if (wildcardId === 'change' && !this.hasChangeQuestionAvailable()) {
      return;
    }

    wildcard.quantity--;
    this.usedWildcardIdsThisQuestion.push(wildcardId);
    this.wildcardUsedThisQuestion = true;

    if (wildcardId === 'time') {
      this.timeLeft += 30;

      if (!this.timerId) {
        this.startQuestionTimer();
      }
    }

    if (wildcardId === 'fifty') {
      this.applyFiftyFifty();
    }

    if (wildcardId === 'change') {
      this.changeCurrentQuestion();
    }
  }

  hasChangeQuestionAvailable(): boolean {
  const currentTier = this.currentQuestion.tier;

  return this.questionBank.some(question => {
    return question.tier === currentTier &&
      !this.usedQuestionIdsThisRun.includes(question.id);
  });
}

  changeCurrentQuestion(): void {
    const currentTier = this.currentQuestion.tier;

    const availableQuestions = this.questionBank.filter(question => {
      return question.tier === currentTier &&
        !this.usedQuestionIdsThisRun.includes(question.id);
    });

    if (availableQuestions.length === 0) {
      return;
    }

    const randomQuestion =
      availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    this.usedQuestionIdsThisRun.push(randomQuestion.id);

    this.questions[this.currentQuestionIndex] = {
      ...randomQuestion,
      options: [...randomQuestion.options]
    };

    this.disabledOptions = [];
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get questionNumber(): number {
    return this.currentQuestionIndex + 1;
  }

  applyFiftyFifty(): void {
  const question = this.currentQuestion;

  const incorrectOptions = question.options.filter(
    option => option !== question.correctAnswer
  );

  const randomIncorrectOption =
    incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];

  const allowedOptions = [
    question.correctAnswer,
    randomIncorrectOption
  ];

  this.disabledOptions = question.options.filter(
    option => !allowedOptions.includes(option)
  );
}

  goNextQuestion(): void {
    const nextQuestionIndex = this.currentQuestionIndex + 1;
    const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;

    if (isLastQuestion) {
      this.finishGame('completed');
      return;
    }

    // Antes de la pregunta 10 aparece Barbanegra
    // Pregunta 10 = índice 9
    if (nextQuestionIndex === 9) {
      this.currentQuestionIndex = nextQuestionIndex;
      this.stopTimer();
      this.showBlackbeardTemptation = true;
      return;
    }

    // Después de acertar la pregunta 10 aparece Barbablanca
    // Si estoy en índice 9, acabo de acertar la pregunta 10
    if (this.currentQuestionIndex === 9 && !this.barbablancaGiftGiven) {
      this.stopTimer();
      this.showBarbablancaGift = true;
      return;
    }

    // Antes de la pregunta 13 aparece Barbanegra desesperado
    // Pregunta 13 = índice 12
    if (nextQuestionIndex === 12) {
      this.currentQuestionIndex = nextQuestionIndex;
      this.stopTimer();
      this.showFinalBlackbeardThreat = true;
      return;
    }

    this.currentQuestionIndex = nextQuestionIndex;
    this.prepareNewQuestion();
  }

  startNewRun(): void {
  const easyQuestions = this.pickRandomQuestionsByTier('easy', 4);
  const mediumQuestions = this.pickRandomQuestionsByTier('medium', 4);
  const hardQuestions = this.pickRandomQuestionsByTier('hard', 4);
  const veryHardQuestions = this.pickRandomQuestionsByTier('very-hard', 3);

  this.questions = [
    ...easyQuestions,
    ...mediumQuestions,
    ...hardQuestions,
    ...veryHardQuestions
  ];

  this.usedQuestionIdsThisRun = this.questions.map(question => question.id);

  this.currentQuestionIndex = 0;
  this.totalScore = 0;
  this.correctAnswers = 0;

  this.prepareNewQuestion();
}

  private pickRandomQuestionsByTier(
    tier: Question['tier'],
    amount: number
  ): Question[] {
    const questionsByTier = this.questionBank.filter(question => question.tier === tier);

    if (questionsByTier.length < amount) {
      throw new Error(`No hay suficientes preguntas para el tier ${tier}`);
    }

    return this.shuffleArray(questionsByTier)
      .slice(0, amount)
      .map(question => ({
        ...question,
        options: [...question.options]
      }));
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i]
      ];
    }

    return shuffledArray;
  }


  continueAfterFinalThreat(): void {
    this.showFinalBlackbeardThreat = false;
    this.prepareNewQuestion();
  }

  surrenderAfterFinalThreat(): void {
    this.showFinalBlackbeardThreat = false;
    this.finishGame('retired');
  }

  chooseExtraWildcard(wildcardId: string): void {
    const wildcard = this.wildcards.find(item => item.id === wildcardId);

    if (!wildcard) {
      return;
    }

    wildcard.quantity++;

    this.barbablancaGiftGiven = true;
    this.showBarbablancaGift = false;

    // Avanzamos de la pregunta 10 a la 11
    this.currentQuestionIndex++;

    this.prepareNewQuestion();
  }

  skipBarbablancaGift(): void {
    this.barbablancaGiftGiven = true;
    this.showBarbablancaGift = false;

    // Avanzamos de la pregunta 10 a la 11
    this.currentQuestionIndex++;

    this.prepareNewQuestion();
  }

  

  

prepareNewQuestion(): void {
    this.disabledOptions = [];
    this.usedWildcardIdsThisQuestion = [];
    this.wildcardUsedThisQuestion = false;

    this.timeLeft = 30;

    this.startQuestionTimer();
  }

  validateQuestionBank(): void {
    const tiers: Question['tier'][] = ['easy', 'medium', 'hard', 'very-hard'];

    tiers.forEach(tier => {
      const total = this.questionBank.filter(question => question.tier === tier).length;

      if (total < 20) {
        console.warn(`Faltan preguntas en ${tier}. Tienes ${total}/20`);
      }
    });
  }

  continueAfterBlackbeard(): void {
    this.showBlackbeardTemptation = false;
    this.prepareNewQuestion();
  }

  retireAfterBlackbeard(): void {
    this.showBlackbeardTemptation = false;
    this.finishGame('retired');
  }

  startQuestionTimer(): void {
    this.stopTimer();
    this.timeLeft = 30;

    this.timerId = window.setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  handleWrongAnswer(): void {
    this.stopTimer();

    if (this.barbablancaChanceUsed) {
      this.finishGame('failed');
      return;
    }

    this.showWrongAnswerChoice = true;
  }
  abandonWithHonor(): void {
  this.showWrongAnswerChoice = false;
  this.finishGame('retired');
  }

  acceptBarbablancaChance(): void {
    this.showWrongAnswerChoice = false;
    this.barbablancaChanceUsed = true;

    // Barbablanca solo te da esta oportunidad una vez en toda la partida
    this.totalScore = Math.floor(this.totalScore / 2);

    // La pregunta se mantiene igual, pero reiniciamos el intento
    this.wildcardUsedThisQuestion = false;
    this.startQuestionTimer();
  }

  retireGame(): void {
    this.finishGame('retired');
  }

  async finishGame(status: 'completed' | 'failed' | 'retired'): Promise<void> {
    this.stopTimer();

    const rankingItem = {
      playerName: this.playerName,
      score: this.totalScore,
      won: status === 'completed',
      correctAnswers: this.correctAnswers,
      reachedQuestion: status === 'completed'
        ? this.questions.length
        : this.questionNumber,
      date: new Date().toISOString()
    };

    localStorage.removeItem('treasure_can_start_game');
    localStorage.setItem('treasure_last_status', status);
    localStorage.setItem('treasure_last_result', JSON.stringify(rankingItem));

    try {
      await this.rankingService.saveResult(rankingItem);
    } catch (error) {
      console.error('No se pudo guardar el resultado en Supabase:', error);
    }

    if (status === 'completed') {
      this.router.navigate(['/victory']);
      return;
    }

    if (status === 'failed') {
      this.router.navigate(['/defeat']);
      return;
    }

    this.router.navigate(['/ranking']);
  }

}
