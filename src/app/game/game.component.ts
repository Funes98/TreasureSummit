import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../interfaces/question';
import { Wildcard } from '../interfaces/wildcard';
import { EasyStageComponent } from './easy-stage/easy-stage.component';
import { MediumStageComponent } from './medium-stage/medium-stage.component';
import { HardStageComponent } from './hard-stage/hard-stage.component';
import { VeryHardStageComponent } from './very-hard-stage/very-hard-stage.component';

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

  showBlackbeardTemptation = false;
  showFinalBlackbeardThreat = false;

  wildcards: Wildcard[] = [
    {
      id: 'time',
      name: '+30s',
      icon: '⏳',
      description: 'Añade 30 segundos extra al temporizador.',
      used: false
    },
    {
      id: 'fifty',
      name: '50/50',
      icon: '⚓',
      description: 'Elimina dos respuestas incorrectas.',
      used: false
    },
    {
      id: 'change',
      name: 'Cambio',
      icon: '🗺️',
      description: 'Cambia la pregunta actual por otra.',
      used: false
    }
  ];

  questions: Question[] = [
    {
    "id": 1,
    "text": "¿Cuál es el océano más grande del mundo?",
    "options": ["Atlántico", "Índico", "Pacífico", "Ártico"],
    "correctAnswer": "Pacífico",
    "tier": "easy",
    "points": 100
  },
  {
    "id": 2,
    "text": "¿Cuántos días tiene una semana?",
    "options": ["5", "6", "7", "8"],
    "correctAnswer": "7",
    "tier": "easy",
    "points": 100
  },
  {
    "id": 3,
    "text": "¿Qué animal es conocido como el rey de la selva?",
    "options": ["Tigre", "León", "Elefante", "Lobo"],
    "correctAnswer": "León",
    "tier": "easy",
    "points": 100
  },
  {
    "id": 4,
    "text": "¿Cuánto es 5 x 5?",
    "options": ["10", "20", "25", "30"],
    "correctAnswer": "25",
    "tier": "easy",
    "points": 100
  },
  {
    "id": 5,
    "text": "¿Qué planeta es conocido como el planeta rojo?",
    "options": ["Venus", "Marte", "Júpiter", "Saturno"],
    "correctAnswer": "Marte",
    "tier": "medium",
    "points": 200
  },
  {
    "id": 6,
    "text": "¿Quién escribió Don Quijote de la Mancha?",
    "options": [
      "Miguel de Cervantes",
      "Federico García Lorca",
      "Francisco de Quevedo",
      "Lope de Vega"
    ],
    "correctAnswer": "Miguel de Cervantes",
    "tier": "medium",
    "points": 200
  },
  {
    "id": 7,
    "text": "¿Cuál es la capital de Italia?",
    "options": ["Milán", "Roma", "Nápoles", "Venecia"],
    "correctAnswer": "Roma",
    "tier": "medium",
    "points": 200
  },
  {
    "id": 8,
    "text": "¿Qué lenguaje se usa principalmente en Angular?",
    "options": ["Java", "TypeScript", "PHP", "Python"],
    "correctAnswer": "TypeScript",
    "tier": "medium",
    "points": 200
  },
  {
    "id": 9,
    "text": "¿Qué significan las siglas HTTP?",
    "options": [
      "HyperText Transfer Protocol",
      "High Transfer Text Program",
      "Host Transfer Type Protocol",
      "Hyperlink Text Tool Protocol"
    ],
    "correctAnswer": "HyperText Transfer Protocol",
    "tier": "hard",
    "points": 400
  },
  {
    "id": 10,
    "text": "¿Cuál de estas bases de datos utiliza principalmente SQL?",
    "options": ["MongoDB", "MySQL", "Redis", "Firebase Storage"],
    "correctAnswer": "MySQL",
    "tier": "hard",
    "points": 400
  },
  {
    "id": 11,
    "text": "¿Qué comando se usa para generar el build de producción en Angular?",
    "options": ["ng serve", "ng start", "ng build", "ng generate"],
    "correctAnswer": "ng build",
    "tier": "hard",
    "points": 400
  },
  {
    "id": 12,
    "text": "¿Qué servicio de Angular se usa habitualmente para hacer peticiones HTTP?",
    "options": ["Router", "HttpClient", "FormBuilder", "ActivatedRoute"],
    "correctAnswer": "HttpClient",
    "tier": "hard",
    "points": 400
  },
  {
    "id": 13,
    "text": "¿Qué patrón permite a Angular proporcionar servicios a componentes sin crearlos manualmente?",
    "options": [
      "Dependency Injection",
      "DOM Rendering",
      "Two Way Routing",
      "Lazy Styling"
    ],
    "correctAnswer": "Dependency Injection",
    "tier": "very-hard",
    "points": 600
  },
  {
    "id": 14,
    "text": "En Angular standalone, ¿qué archivo suele contener la configuración principal de rutas?",
    "options": [
      "app.routes.ts",
      "main.css",
      "index.service.ts",
      "routes.html"
    ],
    "correctAnswer": "app.routes.ts",
    "tier": "very-hard",
    "points": 600
  },
  {
    "id": 15,
    "text": "¿Qué operador de RxJS se utiliza para transformar los valores emitidos por un Observable?",
    "options": ["map", "push", "render", "foreach"],
    "correctAnswer": "map",
    "tier": "very-hard",
    "points": 600
  }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startQuestionTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get questionNumber(): number {
    return this.currentQuestionIndex + 1;
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

  if (!wildcard || wildcard.used) {
    return;
  }

    wildcard.used = true;
    this.wildcardUsedThisQuestion = true;

    if (wildcardId === 'time') {
      this.timeLeft += 30;

      if (!this.timerId) {
        this.startQuestionTimer();
      }
    }

    if (wildcardId === 'fifty') {
      console.log('Comodín 50/50 usado');
    }

    if (wildcardId === 'change') {
      console.log('Comodín cambio usado');
    }
  }

  goNextQuestion(): void {
    const nextQuestionIndex = this.currentQuestionIndex + 1;
    const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;

    if (isLastQuestion) {
      this.finishGame('completed');
      return;
    }

    // Antes de la pregunta 10 aparece Barbanegra tentando al jugador
    if (nextQuestionIndex === 9) {
      this.currentQuestionIndex = nextQuestionIndex;
      this.stopTimer();
      this.showBlackbeardTemptation = true;
      return;
    }

    // Antes de la pregunta 13 aparece Barbanegra desesperado
    if (nextQuestionIndex === 12) {
      this.currentQuestionIndex = nextQuestionIndex;
      this.stopTimer();
      this.showFinalBlackbeardThreat = true;
      return;
    }

    this.currentQuestionIndex = nextQuestionIndex;
    this.prepareNewQuestion();
  }






  continueAfterFinalThreat(): void {
    this.showFinalBlackbeardThreat = false;
    this.prepareNewQuestion();
  }

  surrenderAfterFinalThreat(): void {
    this.showFinalBlackbeardThreat = false;
    this.finishGame('retired');
  }

  

  

    prepareNewQuestion(): void {
      this.wildcardUsedThisQuestion = false;
      this.startQuestionTimer();
    }

    continueAfterBlackbeard(): void {
    this.showBlackbeardTemptation = false;
    this.currentQuestionIndex = 9; // pregunta 10
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
    const isHardTier =
      this.currentQuestion.tier === 'hard' ||
      this.currentQuestion.tier === 'very-hard';

    if (isHardTier && !this.usedSecondChance) {
      this.usedSecondChance = true;
      this.totalScore = Math.floor(this.totalScore / 2);
      this.wildcards = this.wildcards.map(wildcard => ({
        ...wildcard,
        used: true
      }));

      alert(
        'Barbablanca te concede otra oportunidad, pero pierdes todos tus comodines y la mitad de tus puntos.'
      );

      this.goNextQuestion();
      return;
    }

    this.finishGame('failed');
  }

  retireGame(): void {
    this.finishGame('retired');
  }

  finishGame(status: 'completed' | 'failed' | 'retired'): void {
    this.stopTimer();

    const rankingItem = {
      playerName: this.playerName,
      score: this.totalScore,
      won: status === 'completed',
      correctAnswers: this.correctAnswers,
      reachedQuestion: status === 'completed' ? this.questions.length : this.questionNumber,
      date: new Date().toISOString()
    };

    const ranking = JSON.parse(localStorage.getItem('treasure_ranking') || '[]');

    ranking.push(rankingItem);

    ranking.sort((a: any, b: any) => b.score - a.score);

    localStorage.setItem('treasure_ranking', JSON.stringify(ranking));

    if (status === 'completed') {
      this.router.navigate(['/victory']);
      return;
    }

    this.router.navigate(['/ranking']);
  }

}
