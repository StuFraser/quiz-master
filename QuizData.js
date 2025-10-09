const capitalQuestions = [
  {
    id: 0,
    topicId: 'A',
    question: "What is the capital of France?",
    image: null,
    answers: [
      { id: 0, answer: "Paris", correct: true },
      { id: 1, answer: "Lyon", correct: false },
      { id: 2, answer: "Marseille", correct: false },
      { id: 3, answer: "Bordeaux", correct: false },
      { id: 4, answer: "Nice", correct: false }
    ]
  },
  {
    id: 1,
    topicId: 'A',
    question: "What is the capital of Japan?",
    image: null,
    answers: [
      { id: 0, answer: "Tokyo", correct: true },
      { id: 1, answer: "Osaka", correct: false },
      { id: 2, answer: "Kyoto", correct: false },
      { id: 3, answer: "Nagoya", correct: false },
      { id: 4, answer: "Sapporo", correct: false }
    ]
  },
  {
    id: 2,
    topicId: 'A',
    question: "What is the capital of Australia?",
    image: null,
    answers: [
      { id: 0, answer: "Canberra", correct: true },
      { id: 1, answer: "Sydney", correct: false },
      { id: 2, answer: "Melbourne", correct: false },
      { id: 3, answer: "Perth", correct: false },
      { id: 4, answer: "Brisbane", correct: false }
    ]
  },
  {
    id: 3,
    topicId: 'A',
    question: "What is the capital of Canada?",
    image: null,
    answers: [
      { id: 0, answer: "Ottawa", correct: true },
      { id: 1, answer: "Toronto", correct: false },
      { id: 2, answer: "Vancouver", correct: false },
      { id: 3, answer: "Montreal", correct: false },
      { id: 4, answer: "Calgary", correct: false }
    ]
  },
  {
    id: 4,
    topicId: 'A',
    question: "What is the capital of Brazil?",
    image: null,
    answers: [
      { id: 0, answer: "Brasília", correct: true },
      { id: 1, answer: "Rio de Janeiro", correct: false },
      { id: 2, answer: "São Paulo", correct: false },
      { id: 3, answer: "Salvador", correct: false },
      { id: 4, answer: "Fortaleza", correct: false }
    ]
  },
  {
    id: 5,
    topicId: 'A',
    question: "What is the capital of Italy?",
    image: null,
    answers: [
      { id: 0, answer: "Rome", correct: true },
      { id: 1, answer: "Milan", correct: false },
      { id: 2, answer: "Naples", correct: false },
      { id: 3, answer: "Florence", correct: false },
      { id: 4, answer: "Venice", correct: false }
    ]
  },
  {
    id: 6,
    topicId: 'A',
    question: "What is the capital of Egypt?",
    image: null,
    answers: [
      { id: 0, answer: "Cairo", correct: true },
      { id: 1, answer: "Alexandria", correct: false },
      { id: 2, answer: "Giza", correct: false },
      { id: 3, answer: "Luxor", correct: false },
      { id: 4, answer: "Aswan", correct: false }
    ]
  },
  {
    id: 7,
    topicId: 'A',
    question: "What is the capital of Germany?",
    image: null,
    answers: [
      { id: 0, answer: "Berlin", correct: true },
      { id: 1, answer: "Munich", correct: false },
      { id: 2, answer: "Hamburg", correct: false },
      { id: 3, answer: "Frankfurt", correct: false },
      { id: 4, answer: "Cologne", correct: false }
    ]
  },
  {
    id: 8,
    topicId: 'A',
    question: "What is the capital of Russia?",
    image: null,
    answers: [
      { id: 0, answer: "Moscow", correct: true },
      { id: 1, answer: "Saint Petersburg", correct: false },
      { id: 2, answer: "Novosibirsk", correct: false },
      { id: 3, answer: "Kazan", correct: false },
      { id: 4, answer: "Sochi", correct: false }
    ]
  },
  {
    id: 9,
    topicId: 'A',
    question: "What is the capital of South Korea?",
    image: null,
    answers: [
      { id: 0, answer: "Seoul", correct: true },
      { id: 1, answer: "Busan", correct: false },
      { id: 2, answer: "Incheon", correct: false },
      { id: 3, answer: "Daegu", correct: false },
      { id: 4, answer: "Daejeon", correct: false }
    ]
  },
  {
    id: 10,
    topicId: 'A',
    question: "What is the capital of Argentina?",
    image: null,
    answers: [
      { id: 0, answer: "Buenos Aires", correct: true },
      { id: 1, answer: "Córdoba", correct: false },
      { id: 2, answer: "Rosario", correct: false },
      { id: 3, answer: "Mendoza", correct: false },
      { id: 4, answer: "La Plata", correct: false }
    ]
  },
  {
    id: 11,
    topicId: 'A',
    question: "What is the capital of Kenya?",
    image: null,
    answers: [
      { id: 0, answer: "Nairobi", correct: true },
      { id: 1, answer: "Mombasa", correct: false },
      { id: 2, answer: "Kisumu", correct: false },
      { id: 3, answer: "Nakuru", correct: false },
      { id: 4, answer: "Eldoret", correct: false }
    ]
  },
  {
    id: 12,
    topicId: 'A',
    question: "What is the capital of Turkey?",
    image: null,
    answers: [
      { id: 0, answer: "Ankara", correct: true },
      { id: 1, answer: "Istanbul", correct: false },
      { id: 2, answer: "Izmir", correct: false },
      { id: 3, answer: "Bursa", correct: false },
      { id: 4, answer: "Antalya", correct: false }
    ]
  },
  {
    id: 13,
    topicId: 'A',
    question: "What is the capital of India?",
    image: null,
    answers: [
      { id: 0, answer: "New Delhi", correct: true },
      { id: 1, answer: "Mumbai", correct: false },
      { id: 2, answer: "Bangalore", correct: false },
      { id: 3, answer: "Chennai", correct: false },
      { id: 4, answer: "Kolkata", correct: false }
    ]
  },
  {
    id: 14,
    topicId: 'A',
    question: "What is the capital of Spain?",
    image: null,
    answers: [
      { id: 0, answer: "Madrid", correct: true },
      { id: 1, answer: "Barcelona", correct: false },
      { id: 2, answer: "Valencia", correct: false },
      { id: 3, answer: "Seville", correct: false },
      { id: 4, answer: "Bilbao", correct: false }
    ]
  },
  {
    id: 15,
    topicId: 'A',
    question: "What is the capital of Greece?",
    image: null,
    answers: [
      { id: 0, answer: "Athens", correct: true },
      { id: 1, answer: "Thessaloniki", correct: false },
      { id: 2, answer: "Patras", correct: false },
      { id: 3, answer: "Rhodes", correct: false },
      { id: 4, answer: "Heraklion", correct: false }
    ]
  },
  {
    id: 16,
    topicId: 'A',
    question: "What is the capital of Thailand?",
    image: null,
    answers: [
      { id: 0, answer: "Bangkok", correct: true },
      { id: 1, answer: "Chiang Mai", correct: false },
      { id: 2, answer: "Phuket", correct: false },
      { id: 3, answer: "Pattaya", correct: false },
      { id: 4, answer: "Ayutthaya", correct: false }
    ]
  },
  {
    id: 17,
    topicId: 'A',
    question: "What is the capital of China?",
    image: null,
    answers: [
      { id: 0, answer: "Beijing", correct: true },
      { id: 1, answer: "Shanghai", correct: false },
      { id: 2, answer: "Guangzhou", correct: false },
      { id: 3, answer: "Shenzhen", correct: false },
      { id: 4, answer: "Chengdu", correct: false }
    ]
  },
  {
    id: 18,
    topicId: 'A',
    question: "What is the capital of South Africa?",
    image: null,
    answers: [
      { id: 0, answer: "Pretoria", correct: true },
      { id: 1, answer: "Cape Town", correct: false },
      { id: 2, answer: "Johannesburg", correct: false },
      { id: 3, answer: "Durban", correct: false },
      { id: 4, answer: "Bloemfontein", correct: false }
    ]
  },
  {
    id: 19,
    topicId: 'A',
    question: "What is the capital of Mexico?",
    image: null,
    answers: [
      { id: 0, answer: "Mexico City", correct: true },
      { id: 1, answer: "Guadalajara", correct: false },
      { id: 2, answer: "Monterrey", correct: false },
      { id: 3, answer: "Cancún", correct: false },
      { id: 4, answer: "Tijuana", correct: false }
    ]
  }
];
const planetQuestions = [
  {
    id: 0,
    topicId: 'B',
    question: "Which planet is known as the Red Planet?",
    image: null,
    answers: [
      { id: 0, answer: "Mars", correct: true },
      { id: 1, answer: "Venus", correct: false },
      { id: 2, answer: "Jupiter", correct: false },
      { id: 3, answer: "Mercury", correct: false },
      { id: 4, answer: "Saturn", correct: false }
    ]
  },
  {
    id: 1,
    topicId: 'B',
    question: "Which planet has the largest ring system?",
    image: null,
    answers: [
      { id: 0, answer: "Saturn", correct: true },
      { id: 1, answer: "Jupiter", correct: false },
      { id: 2, answer: "Uranus", correct: false },
      { id: 3, answer: "Neptune", correct: false },
      { id: 4, answer: "Earth", correct: false }
    ]
  },
  {
    id: 2,
    topicId: 'B',
    question: "Which is the smallest planet in our Solar System?",
    image: null,
    answers: [
      { id: 0, answer: "Mercury", correct: true },
      { id: 1, answer: "Mars", correct: false },
      { id: 2, answer: "Venus", correct: false },
      { id: 3, answer: "Pluto", correct: false },
      { id: 4, answer: "Neptune", correct: false }
    ]
  },
  {
    id: 3,
    topicId: 'B',
    question: "Which planet is famous for its Great Red Spot?",
    image: null,
    answers: [
      { id: 0, answer: "Jupiter", correct: true },
      { id: 1, answer: "Mars", correct: false },
      { id: 2, answer: "Saturn", correct: false },
      { id: 3, answer: "Venus", correct: false },
      { id: 4, answer: "Neptune", correct: false }
    ]
  },
  {
    id: 4,
    topicId: 'B',
    question: "Which planet is closest to the Sun?",
    image: null,
    answers: [
      { id: 0, answer: "Mercury", correct: true },
      { id: 1, answer: "Venus", correct: false },
      { id: 2, answer: "Earth", correct: false },
      { id: 3, answer: "Mars", correct: false },
      { id: 4, answer: "Neptune", correct: false }
    ]
  },
  {
    id: 5,
    topicId: 'B',
    question: "Which planet is tilted on its side at about 98 degrees?",
    image: null,
    answers: [
      { id: 0, answer: "Uranus", correct: true },
      { id: 1, answer: "Neptune", correct: false },
      { id: 2, answer: "Saturn", correct: false },
      { id: 3, answer: "Mars", correct: false },
      { id: 4, answer: "Earth", correct: false }
    ]
  },
  {
    id: 6,
    topicId: 'B',
    question: "Which planet is the hottest in the Solar System?",
    image: null,
    answers: [
      { id: 0, answer: "Venus", correct: true },
      { id: 1, answer: "Mercury", correct: false },
      { id: 2, answer: "Mars", correct: false },
      { id: 3, answer: "Earth", correct: false },
      { id: 4, answer: "Jupiter", correct: false }
    ]
  },
  {
    id: 7,
    topicId: 'B',
    question: "Which planet has the most moons?",
    image: null,
    answers: [
      { id: 0, answer: "Saturn", correct: true },
      { id: 1, answer: "Jupiter", correct: false },
      { id: 2, answer: "Uranus", correct: false },
      { id: 3, answer: "Neptune", correct: false },
      { id: 4, answer: "Mars", correct: false }
    ]
  },
  {
    id: 8,
    topicId: 'B',
    question: "What is the largest planet in our Solar System?",
    image: null,
    answers: [
      { id: 0, answer: "Jupiter", correct: true },
      { id: 1, answer: "Saturn", correct: false },
      { id: 2, answer: "Neptune", correct: false },
      { id: 3, answer: "Earth", correct: false },
      { id: 4, answer: "Venus", correct: false }
    ]
  },
  {
    id: 9,
    topicId: 'B',
    question: "Which planet has a day longer than its year?",
    image: null,
    answers: [
      { id: 0, answer: "Venus", correct: true },
      { id: 1, answer: "Mercury", correct: false },
      { id: 2, answer: "Jupiter", correct: false },
      { id: 3, answer: "Mars", correct: false },
      { id: 4, answer: "Earth", correct: false }
    ]
  },
  {
    id: 10,
    topicId: 'B',
    question: "Which planet is known as Earth's twin?",
    image: null,
    answers: [
      { id: 0, answer: "Venus", correct: true },
      { id: 1, answer: "Mars", correct: false },
      { id: 2, answer: "Mercury", correct: false },
      { id: 3, answer: "Jupiter", correct: false },
      { id: 4, answer: "Neptune", correct: false }
    ]
  },
  {
    id: 11,
    topicId: 'B',
    question: "Which planet has the fastest rotation?",
    image: null,
    answers: [
      { id: 0, answer: "Jupiter", correct: true },
      { id: 1, answer: "Saturn", correct: false },
      { id: 2, answer: "Neptune", correct: false },
      { id: 3, answer: "Earth", correct: false },
      { id: 4, answer: "Mars", correct: false }
    ]
  },
  {
    id: 12,
    topicId: 'B',
    question: "Which planet is farthest from the Sun?",
    image: null,
    answers: [
      { id: 0, answer: "Neptune", correct: true },
      { id: 1, answer: "Uranus", correct: false },
      { id: 2, answer: "Pluto", correct: false },
      { id: 3, answer: "Saturn", correct: false },
      { id: 4, answer: "Jupiter", correct: false }
    ]
  },
  {
    id: 13,
    topicId: 'B',
    question: "Which is the only planet known to support life?",
    image: null,
    answers: [
      { id: 0, answer: "Earth", correct: true },
      { id: 1, answer: "Mars", correct: false },
      { id: 2, answer: "Venus", correct: false },
      { id: 3, answer: "Europa", correct: false },
      { id: 4, answer: "Titan", correct: false }
    ]
  },
  {
    id: 14,
    topicId: 'B',
    question: "Which planet has methane clouds giving it a blue color?",
    image: null,
    answers: [
      { id: 0, answer: "Neptune", correct: true },
      { id: 1, answer: "Uranus", correct: false },
      { id: 2, answer: "Saturn", correct: false },
      { id: 3, answer: "Jupiter", correct: false },
      { id: 4, answer: "Mercury", correct: false }
    ]
  },
  {
    id: 15,
    topicId: 'B',
    question: "Which planet has a moon called Titan?",
    image: null,
    answers: [
      { id: 0, answer: "Saturn", correct: true },
      { id: 1, answer: "Jupiter", correct: false },
      { id: 2, answer: "Uranus", correct: false },
      { id: 3, answer: "Neptune", correct: false },
      { id: 4, answer: "Earth", correct: false }
    ]
  },
  {
    id: 16,
    topicId: 'B',
    question: "Which planet is known for its prominent blue-green color?",
    image: null,
    answers: [
      { id: 0, answer: "Uranus", correct: true },
      { id: 1, answer: "Neptune", correct: false },
      { id: 2, answer: "Saturn", correct: false },
      { id: 3, answer: "Jupiter", correct: false },
      { id: 4, answer: "Venus", correct: false }
    ]
  },
  {
    id: 17,
    topicId: 'B',
    question: "Which is the densest planet in the Solar System?",
    image: null,
    answers: [
      { id: 0, answer: "Earth", correct: true },
      { id: 1, answer: "Mercury", correct: false },
      { id: 2, answer: "Venus", correct: false },
      { id: 3, answer: "Jupiter", correct: false },
      { id: 4, answer: "Saturn", correct: false }
    ]
  },
  {
    id: 18,
    topicId: 'B',
    question: "Which planet has two moons named Phobos and Deimos?",
    image: null,
    answers: [
      { id: 0, answer: "Mars", correct: true },
      { id: 1, answer: "Earth", correct: false },
      { id: 2, answer: "Jupiter", correct: false },
      { id: 3, answer: "Saturn", correct: false },
      { id: 4, answer: "Mercury", correct: false }
    ]
  },
  {
    id: 19,
    topicId: 'B',
    question: "Which planet is often called the Morning Star or Evening Star?",
    image: null,
    answers: [
      { id: 0, answer: "Venus", correct: true },
      { id: 1, answer: "Mars", correct: false },
      { id: 2, answer: "Mercury", correct: false },
      { id: 3, answer: "Saturn", correct: false },
      { id: 4, answer: "Neptune", correct: false }
    ]
  }
];

const starWarsQuestions = [
  {
    id: 0,
    topicId: 'C',
    question: "In which movie did Luke Skywalker first appear?",
    image: null,
    answers: [
      { id: 0, answer: "A New Hope", correct: true },
      { id: 1, answer: "The Empire Strikes Back", correct: false },
      { id: 2, answer: "Return of the Jedi", correct: false },
      { id: 3, answer: "The Phantom Menace", correct: false },
      { id: 4, answer: "Revenge of the Sith", correct: false }
    ]
  },
  {
    id: 1,
    topicId: 'C',
    question: "Who directed 'A New Hope'?",
    image: null,
    answers: [
      { id: 0, answer: "George Lucas", correct: true },
      { id: 1, answer: "Irvin Kershner", correct: false },
      { id: 2, answer: "Richard Marquand", correct: false },
      { id: 3, answer: "J.J. Abrams", correct: false },
      { id: 4, answer: "Rian Johnson", correct: false }
    ]
  },
  {
    id: 2,
    topicId: 'C',
    question: "Which movie features the Battle of Hoth?",
    image: null,
    answers: [
      { id: 0, answer: "The Empire Strikes Back", correct: true },
      { id: 1, answer: "A New Hope", correct: false },
      { id: 2, answer: "Return of the Jedi", correct: false },
      { id: 3, answer: "The Force Awakens", correct: false },
      { id: 4, answer: "Rogue One", correct: false }
    ]
  },
  {
    id: 3,
    topicId: 'C',
    question: "Who kills Emperor Palpatine in 'Return of the Jedi'?",
    image: null,
    answers: [
      { id: 0, answer: "Darth Vader", correct: true },
      { id: 1, answer: "Luke Skywalker", correct: false },
      { id: 2, answer: "Leia Organa", correct: false },
      { id: 3, answer: "Han Solo", correct: false },
      { id: 4, answer: "Obi-Wan Kenobi", correct: false }
    ]
  },
  {
    id: 4,
    topicId: 'C',
    question: "Which movie introduced Rey?",
    image: null,
    answers: [
      { id: 0, answer: "The Force Awakens", correct: true },
      { id: 1, answer: "The Last Jedi", correct: false },
      { id: 2, answer: "The Rise of Skywalker", correct: false },
      { id: 3, answer: "Rogue One", correct: false },
      { id: 4, answer: "Solo: A Star Wars Story", correct: false }
    ]
  },
  {
    id: 5,
    topicId: 'C',
    question: "Which Star Wars movie was released first chronologically?",
    image: null,
    answers: [
      { id: 0, answer: "The Phantom Menace", correct: true },
      { id: 1, answer: "A New Hope", correct: false },
      { id: 2, answer: "Attack of the Clones", correct: false },
      { id: 3, answer: "Solo: A Star Wars Story", correct: false },
      { id: 4, answer: "Rogue One", correct: false }
    ]
  },
  {
    id: 6,
    topicId: 'C',
    question: "Which movie shows the creation of Darth Vader's suit?",
    image: null,
    answers: [
      { id: 0, answer: "Revenge of the Sith", correct: true },
      { id: 1, answer: "Attack of the Clones", correct: false },
      { id: 2, answer: "The Phantom Menace", correct: false },
      { id: 3, answer: "A New Hope", correct: false },
      { id: 4, answer: "The Empire Strikes Back", correct: false }
    ]
  },
  {
    id: 7,
    topicId: 'C',
    question: "Who kills Count Dooku?",
    image: null,
    answers: [
      { id: 0, answer: "Anakin Skywalker", correct: true },
      { id: 1, answer: "Obi-Wan Kenobi", correct: false },
      { id: 2, answer: "Yoda", correct: false },
      { id: 3, answer: "Mace Windu", correct: false },
      { id: 4, answer: "Palpatine", correct: false }
    ]
  },
  {
    id: 8,
    topicId: 'C',
    question: "Which movie features the Podrace scene?",
    image: null,
    answers: [
      { id: 0, answer: "The Phantom Menace", correct: true },
      { id: 1, answer: "Attack of the Clones", correct: false },
      { id: 2, answer: "Revenge of the Sith", correct: false },
      { id: 3, answer: "A New Hope", correct: false },
      { id: 4, answer: "Solo: A Star Wars Story", correct: false }
    ]
  },
  {
    id: 9,
    topicId: 'C',
    question: "Who is the main villain in 'The Force Awakens'?",
    image: null,
    answers: [
      { id: 0, answer: "Kylo Ren", correct: true },
      { id: 1, answer: "Snoke", correct: false },
      { id: 2, answer: "Darth Vader", correct: false },
      { id: 3, answer: "General Grievous", correct: false },
      { id: 4, answer: "Darth Maul", correct: false }
    ]
  },
  {
    id: 10,
    topicId: 'C',
    question: "Which Star Wars movie grossed the most at the box office?",
    image: null,
    answers: [
      { id: 0, answer: "The Force Awakens", correct: true },
      { id: 1, answer: "The Last Jedi", correct: false },
      { id: 2, answer: "A New Hope", correct: false },
      { id: 3, answer: "The Phantom Menace", correct: false },
      { id: 4, answer: "Rogue One", correct: false }
    ]
  },
  {
    id: 11,
    topicId: 'C',
    question: "Who trained Luke Skywalker after Obi-Wan's death?",
    image: null,
    answers: [
      { id: 0, answer: "Yoda", correct: true },
      { id: 1, answer: "Mace Windu", correct: false },
      { id: 2, answer: "Qui-Gon Jinn", correct: false },
      { id: 3, answer: "Palpatine", correct: false },
      { id: 4, answer: "Anakin Skywalker", correct: false }
    ]
  },
  {
    id: 12,
    topicId: 'C',
    question: "Which movie features the duel between Obi-Wan and Anakin?",
    image: null,
    answers: [
      { id: 0, answer: "Revenge of the Sith", correct: true },
      { id: 1, answer: "Attack of the Clones", correct: false },
      { id: 2, answer: "The Phantom Menace", correct: false },
      { id: 3, answer: "The Empire Strikes Back", correct: false },
      { id: 4, answer: "Return of the Jedi", correct: false }
    ]
  },
  {
    id: 13,
    topicId: 'C',
    question: "Who shot first in 'A New Hope' (original version)?",
    image: null,
    answers: [
      { id: 0, answer: "Han Solo", correct: true },
      { id: 1, answer: "Greedo", correct: false },
      { id: 2, answer: "Luke Skywalker", correct: false },
      { id: 3, answer: "Obi-Wan Kenobi", correct: false },
      { id: 4, answer: "Lando Calrissian", correct: false }
    ]
  },
  {
    id: 14,
    topicId: 'C',
    question: "Which movie features the first appearance of Lando Calrissian?",
    image: null,
    answers: [
      { id: 0, answer: "The Empire Strikes Back", correct: true },
      { id: 1, answer: "Return of the Jedi", correct: false },
      { id: 2, answer: "A New Hope", correct: false },
      { id: 3, answer: "The Phantom Menace", correct: false },
      { id: 4, answer: "Attack of the Clones", correct: false }
    ]
  },
  {
    id: 15,
    topicId: 'C',
    question: "Which film shows the construction of the first Death Star?",
    image: null,
    answers: [
      { id: 0, answer: "Rogue One", correct: true },
      { id: 1, answer: "A New Hope", correct: false },
      { id: 2, answer: "Return of the Jedi", correct: false },
      { id: 3, answer: "The Phantom Menace", correct: false },
      { id: 4, answer: "Revenge of the Sith", correct: false }
    ]
  },
  {
    id: 16,
    topicId: 'C',
    question: "Who kills Jabba the Hutt?",
    image: null,
    answers: [
      { id: 0, answer: "Princess Leia", correct: true },
      { id: 1, answer: "Luke Skywalker", correct: false },
      { id: 2, answer: "Han Solo", correct: false },
      { id: 3, answer: "Chewbacca", correct: false },
      { id: 4, answer: "Boba Fett", correct: false }
    ]
  },
  {
    id: 17,
    topicId: 'C',
    question: "Which movie introduced Darth Maul?",
    image: null,
    answers: [
      { id: 0, answer: "The Phantom Menace", correct: true },
      { id: 1, answer: "Attack of the Clones", correct: false },
      { id: 2, answer: "Revenge of the Sith", correct: false },
      { id: 3, answer: "Solo: A Star Wars Story", correct: false },
      { id: 4, answer: "Rogue One", correct: false }
    ]
  },
  {
    id: 18,
    topicId: 'C',
    question: "In which movie does Luke learn that Vader is his father?",
    image: null,
    answers: [
      { id: 0, answer: "The Empire Strikes Back", correct: true },
      { id: 1, answer: "Return of the Jedi", correct: false },
      { id: 2, answer: "A New Hope", correct: false },
      { id: 3, answer: "The Phantom Menace", correct: false },
      { id: 4, answer: "Revenge of the Sith", correct: false }
    ]
  },
  {
    id: 19,
    topicId: 'C',
    question: "Which movie concludes the Skywalker Saga?",
    image: null,
    answers: [
      { id: 0, answer: "The Rise of Skywalker", correct: true },
      { id: 1, answer: "The Last Jedi", correct: false },
      { id: 2, answer: "The Force Awakens", correct: false },
      { id: 3, answer: "Return of the Jedi", correct: false },
      { id: 4, answer: "Revenge of the Sith", correct: false }
    ]
  }
];

const haloQuestions = [
  {
    id: 0,
    topicId: 'D',
    question: "What is the name of the main protagonist in the Halo series?",
    image: null,
    answers: [
      { id: 0, answer: "Master Chief", correct: true },
      { id: 1, answer: "Arbiter", correct: false },
      { id: 2, answer: "Cortana", correct: false },
      { id: 3, answer: "Sergeant Johnson", correct: false },
      { id: 4, answer: "Captain Keyes", correct: false }
    ]
  },
  {
    id: 1,
    topicId: 'D',
    question: "What is Master Chief’s Spartan designation?",
    image: null,
    answers: [
      { id: 0, answer: "John-117", correct: true },
      { id: 1, answer: "James-042", correct: false },
      { id: 2, answer: "Linda-058", correct: false },
      { id: 3, answer: "Kelly-087", correct: false },
      { id: 4, answer: "Fred-104", correct: false }
    ]
  },
  {
    id: 2,
    topicId: 'D',
    question: "What alien alliance is humanity fighting in the original trilogy?",
    image: null,
    answers: [
      { id: 0, answer: "The Covenant", correct: true },
      { id: 1, answer: "The Flood", correct: false },
      { id: 2, answer: "The Forerunners", correct: false },
      { id: 3, answer: "The Banished", correct: false },
      { id: 4, answer: "The Prometheans", correct: false }
    ]
  },
  {
    id: 3,
    topicId: 'D',
    question: "Which Halo game introduced dual-wielding weapons?",
    image: null,
    answers: [
      { id: 0, answer: "Halo 2", correct: true },
      { id: 1, answer: "Halo: Combat Evolved", correct: false },
      { id: 2, answer: "Halo 3", correct: false },
      { id: 3, answer: "Halo Reach", correct: false },
      { id: 4, answer: "Halo 4", correct: false }
    ]
  },
  {
    id: 4,
    topicId: 'D',
    question: "What is Cortana?",
    image: null,
    answers: [
      { id: 0, answer: "An AI", correct: true },
      { id: 1, answer: "A Spartan", correct: false },
      { id: 2, answer: "A Forerunner", correct: false },
      { id: 3, answer: "A Covenant Prophet", correct: false },
      { id: 4, answer: "A Flood creature", correct: false }
    ]
  },
  {
    id: 5,
    topicId: 'D',
    question: "What Halo installation is discovered in 'Halo: Combat Evolved'?",
    image: null,
    answers: [
      { id: 0, answer: "Installation 04", correct: true },
      { id: 1, answer: "Installation 05", correct: false },
      { id: 2, answer: "Installation 07", correct: false },
      { id: 3, answer: "Installation 03", correct: false },
      { id: 4, answer: "The Ark", correct: false }
    ]
  },
  {
    id: 6,
    topicId: 'D',
    question: "Who is the leader of the Covenant during Halo 2?",
    image: null,
    answers: [
      { id: 0, answer: "The Prophets", correct: true },
      { id: 1, answer: "Atriox", correct: false },
      { id: 2, answer: "343 Guilty Spark", correct: false },
      { id: 3, answer: "The Didact", correct: false },
      { id: 4, answer: "Tartarus", correct: false }
    ]
  },
  {
    id: 7,
    topicId: 'D',
    question: "What parasitic enemy threatens all life in the galaxy?",
    image: null,
    answers: [
      { id: 0, answer: "The Flood", correct: true },
      { id: 1, answer: "The Banished", correct: false },
      { id: 2, answer: "The Covenant", correct: false },
      { id: 3, answer: "The Forerunners", correct: false },
      { id: 4, answer: "The Prometheans", correct: false }
    ]
  },
  {
    id: 8,
    topicId: 'D',
    question: "Which game concludes the original Bungie trilogy?",
    image: null,
    answers: [
      { id: 0, answer: "Halo 3", correct: true },
      { id: 1, answer: "Halo 2", correct: false },
      { id: 2, answer: "Halo Reach", correct: false },
      { id: 3, answer: "Halo 4", correct: false },
      { id: 4, answer: "Halo 5: Guardians", correct: false }
    ]
  },
  {
    id: 9,
    topicId: 'D',
    question: "Which Halo game is a prequel to the original trilogy?",
    image: null,
    answers: [
      { id: 0, answer: "Halo Reach", correct: true },
      { id: 1, answer: "Halo 2", correct: false },
      { id: 2, answer: "Halo 3: ODST", correct: false },
      { id: 3, answer: "Halo Wars", correct: false },
      { id: 4, answer: "Halo Infinite", correct: false }
    ]
  },
  {
    id: 10,
    topicId: 'D',
    question: "What species is Arbiter?",
    image: null,
    answers: [
      { id: 0, answer: "Sangheili (Elite)", correct: true },
      { id: 1, answer: "Brute", correct: false },
      { id: 2, answer: "Grunt", correct: false },
      { id: 3, answer: "Jackal", correct: false },
      { id: 4, answer: "Hunter", correct: false }
    ]
  },
  {
    id: 11,
    topicId: 'D',
    question: "Who is the main antagonist in Halo 4?",
    image: null,
    answers: [
      { id: 0, answer: "The Didact", correct: true },
      { id: 1, answer: "Atriox", correct: false },
      { id: 2, answer: "The Gravemind", correct: false },
      { id: 3, answer: "The Prophet of Truth", correct: false },
      { id: 4, answer: "Cortana", correct: false }
    ]
  },
  {
    id: 12,
    topicId: 'D',
    question: "Which Halo game first featured Firefight mode?",
    image: null,
    answers: [
      { id: 0, answer: "Halo 3: ODST", correct: true },
      { id: 1, answer: "Halo 2", correct: false },
      { id: 2, answer: "Halo Reach", correct: false },
      { id: 3, answer: "Halo 4", correct: false },
      { id: 4, answer: "Halo 5: Guardians", correct: false }
    ]
  },
  {
    id: 13,
    topicId: 'D',
    question: "What is the Ark?",
    image: null,
    answers: [
      { id: 0, answer: "A Forerunner installation that activates the Halos", correct: true },
      { id: 1, answer: "A Covenant capital ship", correct: false },
      { id: 2, answer: "An AI construct", correct: false },
      { id: 3, answer: "A Flood hive", correct: false },
      { id: 4, answer: "UNSC headquarters", correct: false }
    ]
  },
  {
    id: 14,
    topicId: 'D',
    question: "Which Halo game introduces the Banished as enemies?",
    image: null,
    answers: [
      { id: 0, answer: "Halo Wars 2", correct: true },
      { id: 1, answer: "Halo Reach", correct: false },
      { id: 2, answer: "Halo 3", correct: false },
      { id: 3, answer: "Halo 4", correct: false },
      { id: 4, answer: "Halo Infinite", correct: false }
    ]
  },
  {
    id: 15,
    topicId: 'D',
    question: "What color is Master Chief’s armor?",
    image: null,
    answers: [
      { id: 0, answer: "Green", correct: true },
      { id: 1, answer: "Blue", correct: false },
      { id: 2, answer: "Black", correct: false },
      { id: 3, answer: "Silver", correct: false },
      { id: 4, answer: "Red", correct: false }
    ]
  },
  {
    id: 16,
    topicId: 'D',
    question: "What is the name of the UNSC ship in Halo: Combat Evolved?",
    image: null,
    answers: [
      { id: 0, answer: "Pillar of Autumn", correct: true },
      { id: 1, answer: "Infinity", correct: false },
      { id: 2, answer: "Forward Unto Dawn", correct: false },
      { id: 3, answer: "Spirit of Fire", correct: false },
      { id: 4, answer: "In Amber Clad", correct: false }
    ]
  },
  {
    id: 17,
    topicId: 'D',
    question: "Who is the main antagonist in Halo Wars 2?",
    image: null,
    answers: [
      { id: 0, answer: "Atriox", correct: true },
      { id: 1, answer: "The Didact", correct: false },
      { id: 2, answer: "The Prophet of Regret", correct: false },
      { id: 3, answer: "343 Guilty Spark", correct: false },
      { id: 4, answer: "The Gravemind", correct: false }
    ]
  },
  {
    id: 18,
    topicId: 'D',
    question: "Which Halo game introduced Halo Infinite’s grappleshot concept first in multiplayer flight tests?",
    image: null,
    answers: [
      { id: 0, answer: "Halo Infinite", correct: true },
      { id: 1, answer: "Halo 5: Guardians", correct: false },
      { id: 2, answer: "Halo Reach", correct: false },
      { id: 3, answer: "Halo 4", correct: false },
      { id: 4, answer: "Halo 3", correct: false }
    ]
  },
  {
    id: 19,
    topicId: 'D',
    question: "Which AI becomes a major antagonist by Halo 5?",
    image: null,
    answers: [
      { id: 0, answer: "Cortana", correct: true },
      { id: 1, answer: "Roland", correct: false },
      { id: 2, answer: "343 Guilty Spark", correct: false },
      { id: 3, answer: "Serina", correct: false },
      { id: 4, answer: "Exuberant Witness", correct: false }
    ]
  }
];

const flagQuestions = [
  {
    id: 0,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/France.png",
    answers: [
      { id: 0, answer: "France", correct: true },
      { id: 1, answer: "Italy", correct: false },
      { id: 2, answer: "Netherlands", correct: false },
      { id: 3, answer: "Russia", correct: false },
      { id: 4, answer: "Luxembourg", correct: false }
    ]
  },
  {
    id: 1,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/India.png",
    answers: [
      { id: 0, answer: "India", correct: true },
      { id: 1, answer: "Pakistan", correct: false },
      { id: 2, answer: "Nepal", correct: false },
      { id: 3, answer: "Bangladesh", correct: false },
      { id: 4, answer: "Sri Lanka", correct: false }
    ]
  },
  {
    id: 2,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Germany.png",
    answers: [
      { id: 0, answer: "Germany", correct: true },
      { id: 1, answer: "Belgium", correct: false },
      { id: 2, answer: "Austria", correct: false },
      { id: 3, answer: "Poland", correct: false },
      { id: 4, answer: "Sweden", correct: false }
    ]
  },
  {
    id: 3,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/usa.png",
    answers: [
      { id: 0, answer: "United States", correct: true },
      { id: 1, answer: "United Kingdom", correct: false },
      { id: 2, answer: "Australia", correct: false },
      { id: 3, answer: "Canada", correct: false },
      { id: 4, answer: "New Zealand", correct: false }
    ]
  },
  {
    id: 4,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Brazil.png",
    answers: [
      { id: 0, answer: "Brazil", correct: true },
      { id: 1, answer: "Argentina", correct: false },
      { id: 2, answer: "Mexico", correct: false },
      { id: 3, answer: "Portugal", correct: false },
      { id: 4, answer: "Spain", correct: false }
    ]
  },
  {
    id: 5,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Russia.png",
    answers: [
      { id: 0, answer: "Russia", correct: true },
      { id: 1, answer: "Slovakia", correct: false },
      { id: 2, answer: "Czech Republic", correct: false },
      { id: 3, answer: "Serbia", correct: false },
      { id: 4, answer: "Slovenia", correct: false }
    ]
  },
  {
    id: 6,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Spain.png",
    answers: [
      { id: 0, answer: "Spain", correct: true },
      { id: 1, answer: "Portugal", correct: false },
      { id: 2, answer: "Mexico", correct: false },
      { id: 3, answer: "Chile", correct: false },
      { id: 4, answer: "Peru", correct: false }
    ]
  },
  {
    id: 7,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Italy.png",
    answers: [
      { id: 0, answer: "Italy", correct: true },
      { id: 1, answer: "Mexico", correct: false },
      { id: 2, answer: "Ireland", correct: false },
      { id: 3, answer: "France", correct: false },
      { id: 4, answer: "Hungary", correct: false }
    ]
  },
  {
    id: 8,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/South_Korea.png",
    answers: [
      { id: 0, answer: "South Korea", correct: true },
      { id: 1, answer: "North Korea", correct: false },
      { id: 2, answer: "China", correct: false },
      { id: 3, answer: "Japan", correct: false },
      { id: 4, answer: "Vietnam", correct: false }
    ]
  },
  {
    id: 9,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Japan.png",
    answers: [
      { id: 0, answer: "Japan", correct: true },
      { id: 1, answer: "South Korea", correct: false },
      { id: 2, answer: "China", correct: false },
      { id: 3, answer: "Vietnam", correct: false },
      { id: 4, answer: "Laos", correct: false }
    ]
  },
  {
    id: 10,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Canada.png",
    answers: [
      { id: 0, answer: "Canada", correct: true },
      { id: 1, answer: "United States", correct: false },
      { id: 2, answer: "United Kingdom", correct: false },
      { id: 3, answer: "Denmark", correct: false },
      { id: 4, answer: "Norway", correct: false }
    ]
  },
  {
    id: 11,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/United_Kingdom.png",
    answers: [
      { id: 0, answer: "United Kingdom", correct: true },
      { id: 1, answer: "Australia", correct: false },
      { id: 2, answer: "New Zealand", correct: false },
      { id: 3, answer: "Fiji", correct: false },
      { id: 4, answer: "Canada", correct: false }
    ]
  },
  {
    id: 12,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Australia.png",
    answers: [
      { id: 0, answer: "Australia", correct: true },
      { id: 1, answer: "New Zealand", correct: false },
      { id: 2, answer: "United Kingdom", correct: false },
      { id: 3, answer: "Canada", correct: false },
      { id: 4, answer: "Fiji", correct: false }
    ]
  },
  {
    id: 13,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Finland.png",
    answers: [
      { id: 0, answer: "Finland", correct: true },
      { id: 1, answer: "Sweden", correct: false },
      { id: 2, answer: "Norway", correct: false },
      { id: 3, answer: "Denmark", correct: false },
      { id: 4, answer: "Iceland", correct: false }
    ]
  },
  {
    id: 14,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/china.png",
    answers: [
      { id: 0, answer: "China", correct: true },
      { id: 1, answer: "Vietnam", correct: false },
      { id: 2, answer: "North Korea", correct: false },
      { id: 3, answer: "Japan", correct: false },
      { id: 4, answer: "Singapore", correct: false }
    ]
  },
  {
    id: 15,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Mexico.png",
    answers: [
      { id: 0, answer: "Mexico", correct: true },
      { id: 1, answer: "Italy", correct: false },
      { id: 2, answer: "Hungary", correct: false },
      { id: 3, answer: "Spain", correct: false },
      { id: 4, answer: "Portugal", correct: false }
    ]
  },
  {
    id: 16,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/South_Africa.png",
    answers: [
      { id: 0, answer: "South Africa", correct: true },
      { id: 1, answer: "Kenya", correct: false },
      { id: 2, answer: "Zimbabwe", correct: false },
      { id: 3, answer: "Ghana", correct: false },
      { id: 4, answer: "Nigeria", correct: false }
    ]
  },
  {
    id: 17,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Israel.png",
    answers: [
      { id: 0, answer: "Israel", correct: true },
      { id: 1, answer: "Greece", correct: false },
      { id: 2, answer: "Turkey", correct: false },
      { id: 3, answer: "Cyprus", correct: false },
      { id: 4, answer: "Lebanon", correct: false }
    ]
  },
  {
    id: 18,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Switzerland.png",
    answers: [
      { id: 0, answer: "Switzerland", correct: true },
      { id: 1, answer: "Denmark", correct: false },
      { id: 2, answer: "Austria", correct: false },
      { id: 3, answer: "Poland", correct: false },
      { id: 4, answer: "Norway", correct: false }
    ]
  },
  {
    id: 19,
    topicId: 'E',
    question: "Which country does this flag belong to?",
    image: "./assets/flags/Greece.png",
    answers: [
      { id: 0, answer: "Greece", correct: true },
      { id: 1, answer: "Israel", correct: false },
      { id: 2, answer: "Argentina", correct: false },
      { id: 3, answer: "Finland", correct: false },
      { id: 4, answer: "Uruguay", correct: false }
    ]
  }
];

export default [
  {
    id: 0,
    topicId: 'A',
    topic: "Capital Cities",
    questions: capitalQuestions,
  },
  {
    id: 1,
    topicId: 'B',
    topic: "Solar System",
    questions: planetQuestions,
  },
  {
    id: 2,
    topicId: 'C',
    topic: "Star Wars Movies",
    questions: starWarsQuestions,
  },
  {
    id: 3,
    topicId: 'D',
    topic: "Halo Video Game Series",
    questions: haloQuestions,
  },
  {
    id: 4,
    topicId: 'E',
    topic: "Flags",
    questions: flagQuestions,
  }
];
