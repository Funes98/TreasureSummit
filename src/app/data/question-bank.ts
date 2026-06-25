import { Question } from "../interfaces/question";


export const QUESTION_BANK: Question[] = [
  // EASY - 100 pts
  {
    id: 1,
    text: '¿Cuál es el océano más grande del mundo?',
    options: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
    correctAnswer: 'Pacífico',
    tier: 'easy',
    points: 100
  },
  {
    id: 2,
    text: '¿Cuántos días tiene febrero si el año es bisiesto?',
    options: ['30', '31', '29', '28'],
    correctAnswer: '29',
    tier: 'easy',
    points: 100
  },
  {
    id: 3,
    text: '¿Qué animal es conocido como el rey de la selva?',
    options: ['Tigre', 'León', 'Elefante', 'Lobo'],
    correctAnswer: 'León',
    tier: 'easy',
    points: 100
  },
  {
    id: 4,
    text: '¿Cuánto es 5 x 13?',
    options: ['65', '60', '55', '75'],
    correctAnswer: '65',
    tier: 'easy',
    points: 100
  },
  {
    id: 5,
    text: '¿Como se llama el actual rey de España?',
    options: ['Juan Carlos', 'Mario', 'Felipe', 'Leticia'],
    correctAnswer: 'Felipe',
    tier: 'easy',
    points: 100
  },
  {
    id: 6,
    text: '¿Cuántos meses tiene un año bisiesto?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    tier: 'easy',
    points: 100
  },
  {
    id: 7,
    text: '¿Qué planeta es conocido como el planeta rojo?',
    options: ['Venus', 'Marte', 'Júpiter', 'Saturno'],
    correctAnswer: 'Marte',
    tier: 'easy',
    points: 100
  },
  {
    id: 8,
    text: '¿Qué país es conocido como la tierra del sol naciente?',
    options: ['China', 'Japón', 'Tailandia', 'Corea del Sur'],
    correctAnswer: 'Japón',
    tier: 'easy',
    points: 100
    },
    {
    id: 9,
    text: '¿Cuál es el río más largo de España?',
    options: ['Ebro', 'Tajo', 'Guadalquivir', 'Duero'],
    correctAnswer: 'Tajo',
    tier: 'easy',
    points: 100
    },
    {
    id: 10,
    text: '¿Qué famoso monumento se encuentra en París?',
    options: ['Coliseo', 'Torre Eiffel', 'Big Ben', 'Partenón'],
    correctAnswer: 'Torre Eiffel',
    tier: 'easy',
    points: 100
    },
    {
    id: 11,
    text: '¿Qué selección ganó el Mundial de fútbol de 2014?',
    options: ['Brasil', 'España', 'Alemania', 'Argentina'],
    correctAnswer: 'Alemania',
    tier: 'easy',
    points: 100
    },
    {
    id: 12,
    text: '¿Qué planeta es conocido por sus anillos?',
    options: ['Marte', 'Saturno', 'Venus', 'Mercurio'],
    correctAnswer: 'Saturno',
    tier: 'easy',
    points: 100
    },
    {
    id: 13,
    text: '¿Quién pintó La última cena?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí'],
    correctAnswer: 'Leonardo da Vinci',
    tier: 'easy',
    points: 100
    },
    {
    id: 14,
    text: '¿Cuál es el idioma oficial de Argentina?',
    options: ['Portugués', 'Italiano', 'Español', 'Francés'],
    correctAnswer: 'Español',
    tier: 'easy',
    points: 100
    },
    {
    id: 15,
    text: '¿Qué continente está al sur de Europa?',
    options: ['Asia', 'África', 'Oceanía', 'América'],
    correctAnswer: 'África',
    tier: 'easy',
    points: 100
    },
    {
    id: 16,
    text: '¿Qué cantante es conocido como el Rey del Pop?',
    options: ['Elvis Presley', 'Michael Jackson', 'Freddie Mercury', 'Bob Marley'],
    correctAnswer: 'Michael Jackson',
    tier: 'easy',
    points: 100
    },
    {
    id: 17,
    text: '¿En qué deporte se utiliza una raqueta?',
    options: ['Tenis', 'Balonmano', 'Atletismo', 'Natación'],
    correctAnswer: 'Tenis',
    tier: 'easy',
    points: 100
    },
    {
    id: 18,
    text: '¿Qué país tiene como capital Belfast?',
    options: ['Irlanda del norte', 'Reino Unido', 'Canadá', 'Australia'],
    correctAnswer: 'Irlanda del norte',
    tier: 'easy',
    points: 100
    },
    {
    id: 19,
    text: '¿Cuál es el metal precioso más asociado al símbolo de riqueza?',
    options: ['Platino', 'Oro', 'Cobre', 'Aluminio'],
    correctAnswer: 'Oro',
    tier: 'easy',
    points: 100
    },
    {
    id: 20,
    text: '¿Qué famoso barco se hundió en 1912 tras chocar contra un iceberg?',
    options: ['Titanic', 'Santa María', 'Mayflower', 'Queen Mary'],
    correctAnswer: 'Titanic',
    tier: 'easy',
    points: 100
    },

  // MEDIUM - 200 pts
  {
    id: 21,
    text: '¿Quién escribió Don Quijote de la Mancha?',
    options: ['Miguel de Cervantes', 'Lope de Vega', 'Federico García Lorca', 'Antonio Machado'],
    correctAnswer: 'Miguel de Cervantes',
    tier: 'medium',
    points: 200
  },
  {
    id: 22,
    text: '¿Cuál es la capital de Italia?',
    options: ['Milán', 'Roma', 'Nápoles', 'Venecia'],
    correctAnswer: 'Roma',
    tier: 'medium',
    points: 200
  },
  {
    id: 23,
    text: '¿En qué país se encuentra la Torre Eiffel?',
    options: ['Italia', 'Francia', 'Alemania', 'Portugal'],
    correctAnswer: 'Francia',
    tier: 'medium',
    points: 200
  },
  {
    id: 24,
    text: '¿Cuál es el planeta más grande del sistema solar?',
    options: ['Tierra', 'Marte', 'Júpiter', 'Venus'],
    correctAnswer: 'Júpiter',
    tier: 'medium',
    points: 200
  },
  {
    id: 25,
    text: '¿Qué gas necesitamos principalmente para respirar?',
    options: ['Oxígeno', 'Helio', 'Hidrógeno', 'Nitrógeno'],
    correctAnswer: 'Oxígeno',
    tier: 'medium',
    points: 200
  },
  {
    id: 26,
    text: '¿Qué país tiene forma de bota?',
    options: ['España', 'Italia', 'Grecia', 'Noruega'],
    correctAnswer: 'Italia',
    tier: 'medium',
    points: 200
  },
  {
    id: 27,
    text: '¿Cuál es el idioma oficial de Brasil?',
    options: ['Español', 'Portugués', 'Francés', 'Italiano'],
    correctAnswer: 'Portugués',
    tier: 'medium',
    points: 200
  },
  {
    id: 28,
    text: '¿Qué pintor creó La Gioconda o Mona Lisa?',
    options: ['Picasso', 'Leonardo da Vinci', 'Van Gogh', 'Velázquez'],
    correctAnswer: 'Leonardo da Vinci',
    tier: 'medium',
    points: 200
  },
  {
    id: 29,
    text: '¿Cuál es la moneda oficial de Japón?',
    options: ['Yen', 'Euro', 'Dólar', 'Libra'],
    correctAnswer: 'Yen',
    tier: 'medium',
    points: 200
  },
  {
    id: 30,
    text: '¿Qué deporte se juega en Wimbledon?',
    options: ['Fútbol', 'Tenis', 'Baloncesto', 'Golf'],
    correctAnswer: 'Tenis',
    tier: 'medium',
    points: 200
  },
  {
    id: 31,
    text: '¿Cuántos jugadores tiene un equipo de fútbol en el campo?',
    options: ['9', '10', '11', '12'],
    correctAnswer: '11',
    tier: 'medium',
    points: 200
  },
  {
    id: 32,
    text: '¿Qué órgano bombea la sangre en el cuerpo humano?',
    options: ['Pulmón', 'Cerebro', 'Corazón', 'Hígado'],
    correctAnswer: 'Corazón',
    tier: 'medium',
    points: 200
  },
  {
    id: 33,
    text: '¿Cuál es el continente más grande del mundo?',
    options: ['Europa', 'África', 'Asia', 'Oceanía'],
    correctAnswer: 'Asia',
    tier: 'medium',
    points: 200
  },
  {
    id: 34,
    text: '¿Qué país es famoso por las pirámides de Giza?',
    options: ['Egipto', 'México', 'China', 'Grecia'],
    correctAnswer: 'Egipto',
    tier: 'medium',
    points: 200
  },
  {
    id: 35,
    text: '¿Qué instrumento musical tiene seis cuerdas normalmente?',
    options: ['Piano', 'Guitarra', 'Trompeta', 'Violín'],
    correctAnswer: 'Guitarra',
    tier: 'medium',
    points: 200
  },
  {
    id: 36,
    text: '¿Qué escritor creó a Romeo y Julieta?',
    options: ['William Shakespeare', 'Charles Dickens', 'Julio Verne', 'Homero'],
    correctAnswer: 'William Shakespeare',
    tier: 'medium',
    points: 200
  },
  {
    id: 37,
    text: '¿Cuál es la capital de Portugal?',
    options: ['Oporto', 'Lisboa', 'Coímbra', 'Faro'],
    correctAnswer: 'Lisboa',
    tier: 'medium',
    points: 200
  },
  {
    id: 38,
    text: '¿Qué animal es el más grande del planeta?',
    options: ['Elefante africano', 'Ballena azul', 'Tiburón blanco', 'Jirafa'],
    correctAnswer: 'Ballena azul',
    tier: 'medium',
    points: 200
  },
  {
    id: 39,
    text: '¿Qué planeta está más cerca del Sol?',
    options: ['Venus', 'Mercurio', 'Tierra', 'Marte'],
    correctAnswer: 'Mercurio',
    tier: 'medium',
    points: 200
  },
  {
    id: 40,
    text: '¿Qué ciudad española es famosa por la Alhambra?',
    options: ['Córdoba', 'Granada', 'Sevilla', 'Toledo'],
    correctAnswer: 'Granada',
    tier: 'medium',
    points: 200
  },

  // HARD - 400 pts
  {
    id: 41,
    text: '¿En qué año llegó Cristóbal Colón a América?',
    options: ['1492', '1500', '1512', '1453'],
    correctAnswer: '1492',
    tier: 'hard',
    points: 400
  },
  {
    id: 42,
    text: '¿Cuál es la capital de Canadá?',
    options: ['Toronto', 'Montreal', 'Ottawa', 'Vancouver'],
    correctAnswer: 'Ottawa',
    tier: 'hard',
    points: 400
  },
  {
    id: 43,
    text: '¿Qué científico formuló la teoría de la relatividad?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
    correctAnswer: 'Albert Einstein',
    tier: 'hard',
    points: 400
  },
  {
    id: 44,
    text: '¿Qué pintor cortó parte de su propia oreja?',
    options: ['Van Gogh', 'Dalí', 'Goya', 'Monet'],
    correctAnswer: 'Van Gogh',
    tier: 'hard',
    points: 400
  },
  {
    id: 45,
    text: '¿Quién fue el primer ser humano en viajar al espacio?',
    options: ['Neil Armstrong', 'Yuri Gagarin', 'Buzz Aldrin', 'Valentina Tereshkova'],
    correctAnswer: 'Yuri Gagarin',
    tier: 'hard',
    points: 400
  },
  {
    id: 46,
    text: '¿Cuál es el país más pequeño del mundo?',
    options: ['Mónaco', 'San Marino', 'Ciudad del Vaticano', 'Liechtenstein'],
    correctAnswer: 'Ciudad del Vaticano',
    tier: 'hard',
    points: 400
  },
  {
    id: 47,
    text: '¿Qué elemento químico tiene el símbolo Au?',
    options: ['Plata', 'Oro', 'Aluminio', 'Argón'],
    correctAnswer: 'Oro',
    tier: 'hard',
    points: 400
  },
  {
    id: 48,
    text: '¿Qué compositor creó Las cuatro estaciones?',
    options: ['Mozart', 'Beethoven', 'Vivaldi', 'Bach'],
    correctAnswer: 'Vivaldi',
    tier: 'hard',
    points: 400
  },
  {
    id: 49,
    text: '¿Qué río pasa por París?',
    options: ['Támesis', 'Sena', 'Danubio', 'Tíber'],
    correctAnswer: 'Sena',
    tier: 'hard',
    points: 400
  },
  {
    id: 50,
    text: '¿En qué año comenzó la Revolución Francesa?',
    options: ['1776', '1789', '1812', '1848'],
    correctAnswer: '1789',
    tier: 'hard',
    points: 400
  },
  {
    id: 51,
    text: '¿Quién escribió Cien años de soledad?',
    options: ['Pablo Neruda', 'Gabriel García Márquez', 'Mario Vargas Llosa', 'Jorge Luis Borges'],
    correctAnswer: 'Gabriel García Márquez',
    tier: 'hard',
    points: 400
  },
  {
    id: 52,
    text: '¿Cuál es la montaña más alta del mundo sobre el nivel del mar?',
    options: ['K2', 'Everest', 'Kilimanjaro', 'Aconcagua'],
    correctAnswer: 'Everest',
    tier: 'hard',
    points: 400
  },
  {
    id: 53,
    text: '¿Qué cultura construyó Machu Picchu?',
    options: ['Azteca', 'Maya', 'Inca', 'Romana'],
    correctAnswer: 'Inca',
    tier: 'hard',
    points: 400
  },
  {
    id: 54,
    text: '¿Qué país ganó el Mundial de fútbol de 2010?',
    options: ['Brasil', 'Alemania', 'España', 'Argentina'],
    correctAnswer: 'España',
    tier: 'hard',
    points: 400
  },
  {
    id: 55,
    text: '¿Qué artista pintó Las meninas?',
    options: ['Goya', 'Velázquez', 'Picasso', 'El Greco'],
    correctAnswer: 'Velázquez',
    tier: 'hard',
    points: 400
  },
  {
    id: 56,
    text: '¿Cuál es el hueso más largo del cuerpo humano?',
    options: ['Fémur', 'Húmero', 'Tibia', 'Radio'],
    correctAnswer: 'Fémur',
    tier: 'hard',
    points: 400
  },
  {
    id: 57,
    text: '¿Qué planeta tiene un famoso sistema de anillos?',
    options: ['Marte', 'Saturno', 'Mercurio', 'Venus'],
    correctAnswer: 'Saturno',
    tier: 'hard',
    points: 400
  },
  {
    id: 58,
    text: '¿Quién pintó el Guernica?',
    options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Francisco de Goya'],
    correctAnswer: 'Pablo Picasso',
    tier: 'hard',
    points: 400
  },
  {
    id: 59,
    text: '¿Cuál es la capital de Australia?',
    options: ['Sídney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 'Canberra',
    tier: 'hard',
    points: 400
  },
  {
    id: 60,
    text: '¿Qué novela empieza con el famoso molino de viento como símbolo de aventura?',
    options: ['Don Quijote de la Mancha', 'La Odisea', 'La Regenta', 'El Lazarillo de Tormes'],
    correctAnswer: 'Don Quijote de la Mancha',
    tier: 'hard',
    points: 400
  },

  // VERY HARD - 600 pts
  {
    id: 61,
    text: '¿Quién pintó el techo de la Capilla Sixtina?',
    options: ['Leonardo da Vinci', 'Miguel Ángel', 'Rafael', 'Caravaggio'],
    correctAnswer: 'Miguel Ángel',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 62,
    text: '¿Qué ciudad fue destruida por la erupción del Vesubio en el año 79 d.C.?',
    options: ['Pompeya', 'Atenas', 'Cartago', 'Troya'],
    correctAnswer: 'Pompeya',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 63,
    text: '¿Qué astrónomo defendió el modelo heliocéntrico del sistema solar?',
    options: ['Copérnico', 'Ptolomeo', 'Aristóteles', 'Kepler'],
    correctAnswer: 'Copérnico',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 64,
    text: '¿Qué batalla supuso la derrota definitiva de Napoleón Bonaparte?',
    options: ['Waterloo', 'Trafalgar', 'Austerlitz', 'Maratón'],
    correctAnswer: 'Waterloo',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 65,
    text: '¿Cuál es la capital de Mongolia?',
    options: ['Astaná', 'Ulán Bator', 'Taskent', 'Biskek'],
    correctAnswer: 'Ulán Bator',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 66,
    text: '¿Quién escribió La metamorfosis?',
    options: ['Franz Kafka', 'Fiódor Dostoyevski', 'James Joyce', 'Thomas Mann'],
    correctAnswer: 'Franz Kafka',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 67,
    text: '¿Qué pintor creó El jardín de las delicias?',
    options: ['El Bosco', 'Rubens', 'Velázquez', 'Rembrandt'],
    correctAnswer: 'El Bosco',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 68,
    text: '¿Qué canal une el mar Mediterráneo con el mar Rojo?',
    options: ['Canal de Panamá', 'Canal de Suez', 'Canal de Kiel', 'Canal de Corinto'],
    correctAnswer: 'Canal de Suez',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 69,
    text: '¿En qué país se encuentra el monte Kilimanjaro?',
    options: ['Kenia', 'Tanzania', 'Etiopía', 'Sudáfrica'],
    correctAnswer: 'Tanzania',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 70,
    text: '¿Qué autor escribió La divina comedia?',
    options: ['Dante Alighieri', 'Petrarca', 'Boccaccio', 'Maquiavelo'],
    correctAnswer: 'Dante Alighieri',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 71,
    text: '¿Qué unidad se usa para medir la resistencia eléctrica?',
    options: ['Voltio', 'Amperio', 'Ohmio', 'Vatio'],
    correctAnswer: 'Ohmio',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 72,
    text: '¿Cuál es el satélite natural más grande de Saturno?',
    options: ['Europa', 'Titán', 'Ganímedes', 'Ío'],
    correctAnswer: 'Titán',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 73,
    text: '¿Qué planeta tiene el día más largo del sistema solar?',
    options: ['Mercurio', 'Venus', 'Marte', 'Neptuno'],
    correctAnswer: 'Venus',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 74,
    text: '¿Qué país tiene como capital Reikiavik?',
    options: ['Islandia', 'Noruega', 'Finlandia', 'Dinamarca'],
    correctAnswer: 'Islandia',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 75,
    text: '¿Qué civilización antigua utilizaba la escritura cuneiforme?',
    options: ['Sumeria', 'Romana', 'Vikinga', 'Inca'],
    correctAnswer: 'Sumeria',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 76,
    text: '¿Qué tratado dividió las zonas de exploración entre Castilla y Portugal en 1494?',
    options: ['Tratado de Versalles', 'Tratado de Tordesillas', 'Tratado de Utrecht', 'Tratado de París'],
    correctAnswer: 'Tratado de Tordesillas',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 77,
    text: '¿Qué filósofo fue maestro de Alejandro Magno?',
    options: ['Sócrates', 'Platón', 'Aristóteles', 'Epicuro'],
    correctAnswer: 'Aristóteles',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 78,
    text: '¿Qué isla pertenece a Chile y es famosa por sus moáis?',
    options: ['Isla de Pascua', 'Madagascar', 'Cerdeña', 'Creta'],
    correctAnswer: 'Isla de Pascua',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 79,
    text: '¿Qué enfermedad logró prevenir Edward Jenner con la primera vacuna moderna?',
    options: ['Viruela', 'Rabia', 'Cólera', 'Tuberculosis'],
    correctAnswer: 'Viruela',
    tier: 'very-hard',
    points: 600
  },
  {
    id: 80,
    text: '¿Qué obra épica se atribuye tradicionalmente a Homero junto con La Ilíada?',
    options: ['La Odisea', 'La Eneida', 'La divina comedia', 'El Decamerón'],
    correctAnswer: 'La Odisea',
    tier: 'very-hard',
    points: 600
  }
];

