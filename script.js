let playerIndex = 0;
const players = ['Bekir', 'Nastja', 'Fatih', 'Kerem', 'Yusuf', 'Leyla'];
let scores = Array(players.length).fill(0);
let timer;
let timeLeft = 30;
let currentQuestion = null;
let currentPoints = 0;
let currentCategory = '';
let usedQuestions = {};
let questionActive = false;

const boardElement = document.getElementById('game-board');
const questionBox = document.getElementById('question-box');
const questionText = document.getElementById('question');
const pointsText = document.getElementById('points');
const timerText = document.getElementById('timer');

function updateScores() {
  const scoreboard = document.getElementById('players-scores');
  scoreboard.innerHTML = '';
  players.forEach((player, index) => {
    const score = document.createElement('div');
    score.className = 'player';
    score.textContent = `${player}: ${scores[index]} Punkte`;
    scoreboard.appendChild(score);
  });
}

function updateCurrentPlayer() {
  const elem = document.getElementById('current-player');
  elem.innerHTML = `🎯 <strong style="color:#00ffff; font-size:1.8rem;">${players[playerIndex]}</strong> ist dran`;
}

function createBoard() {
  boardElement.innerHTML = '';
  const categories = Object.keys(questions);
  const levels = [100, 200, 300, 400, 500];

  // Erste Zeile: Kategorien
  categories.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category';
    catDiv.textContent = cat;
    boardElement.appendChild(catDiv);
  });

  // Danach: Fragenfelder
  levels.forEach(level => {
    categories.forEach(cat => {
      const questionIndex = questions[cat].findIndex(q => q.points === level);
      const cell = document.createElement('div');
      cell.className = 'cell';

      usedQuestions[cat] = usedQuestions[cat] || {};
      if (usedQuestions[cat][level]) {
        cell.classList.add('used');
        cell.textContent = '⛔';
      } else {
        cell.textContent = level;
        cell.addEventListener('click', () => {
          if (usedQuestions[cat][level] || questionActive) return;
          usedQuestions[cat][level] = true;
          cell.classList.add('used');
          cell.textContent = '⛔';
          questionActive = true;
          askQuestion(cat, questionIndex, level);
        });
      }

      boardElement.appendChild(cell);
    });
  });
}

function askQuestion(category, index, points) {
  currentCategory = category;
  currentQuestion = questions[category][index];
  currentPoints = points;

  questionText.textContent = `${category}: ${currentQuestion.question}`;
  pointsText.textContent = `Wert: ${points} Punkte`;
  questionBox.style.display = 'block';
  startTimer();

  // ✅ Antwort-Anzeige zurücksetzen
  document.getElementById('answer-reveal').style.display = 'none';
  document.getElementById('confirm-buttons').style.display = 'none';
  document.getElementById('answer-reveal').textContent = '';
}

function startTimer() {
  timeLeft = 30;
  timerText.textContent = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      questionBox.style.display = 'none';
      questionActive = false;
      nextPlayer();
    }
  }, 1000);
}

function showAnswer() {
  document.getElementById('answer-reveal').textContent = `Antwort: ${currentQuestion.answer}`;
  document.getElementById('answer-reveal').style.display = 'block';
  document.getElementById('confirm-buttons').style.display = 'block';
}

function checkAnswer(result) {
  clearInterval(timer);

  if (result === 'correct') {
    scores[playerIndex] += currentPoints;
  } else {
    scores[playerIndex] -= currentPoints / 2;
  }

  updateScores();
  questionBox.style.display = 'none';
  questionActive = false;
  nextPlayer();
}

function nextPlayer() {
  playerIndex = (playerIndex + 1) % players.length;
  updateCurrentPlayer();
}

function resetGame() {
  scores = Array(players.length).fill(0);
  usedQuestions = {};
  playerIndex = 0;
  clearInterval(timer);
  questionActive = false;
  updateScores();
  updateCurrentPlayer();
  questionBox.style.display = 'none';
  createBoard();
}

// Initialer Spielstart
updateScores();
updateCurrentPlayer();
createBoard();
