// Oyun alanını seçin
const gameArea = document.getElementById("game-area");

// Başlat düğmesini seçin
const startBtn = document.getElementById("start-btn");

// Meyve sayısını tutacak olan değişkeni tanımlayın
let score = 0;

var timer;

// Başlat düğmesi tıklandığında oyunu başlatın
startBtn.addEventListener("click", startGame);

function startGame() {
  // Başlat düğmesini gizleyin
  startBtn.style.display = "none";

  // Oyun alanına meyve resimleri ekleyin
  timer = setInterval(createFruit, 1000);

  // Kullanıcının tıklamalarını dinleyin
  gameArea.addEventListener("click", collectFruit);
}

// Rasgele bir meyve resmi oluşturun
function createFruit() {
  // Rasgele x ve y konumlarını oluşturun
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  // Rasgele bir meyve resmi seçin
  const fruits = ["apple", "banana", "cherry", "grape", "orange"];
  const fruit = fruits[Math.floor(Math.random() * fruits.length)];

  // Oyun alanına meyve resmini ekleyin
  const img = document.createElement("img");
  img.setAttribute("src", `/fruits/${fruit}.png`);
  img.setAttribute("width", `50px`);
  img.setAttribute("alt", fruit);
  img.style.position = "absolute";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  gameArea.appendChild(img);
}

// Kullanıcının tıklamalarını sayın ve meyve sayısını artırın
function collectFruit(event) {
  // Tıklanan öğe bir meyve resmi mi?
  if (event.target.tagName.toLowerCase() === "img") {
    // Mevcut meyve resmini oyun alanından kaldırın
    event.target.remove();

    // Skoru artırın
    score++;

    // Skoru ekranda gösterin
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = score.toString();

    // Kullanıcı 20 meyve toplarsa kazandı
    if (score === 20) {
      // Kazandığınızı gösteren bir mesaj gösterin
      clearInterval(timer);
      const winMsg = document.createElement("h2");
      winMsg.textContent = "You won!";
      gameArea.appendChild(winMsg);

      // Yeniden başlatmak için bir düğme oluşturun
      const restartBtn = document.createElement("button");
      restartBtn.textContent = "Play Again";
      restartBtn.addEventListener("click", function() {
        location.reload();
      });
      gameArea.appendChild(restartBtn);

      // Oyun alanına tıklamaları engelleyin
      gameArea.removeEventListener("click", collectFruit);
    }
  }
}

 
