import "./style.css";

const SPIN_INTERVAL = 500;
const REPLAY_KEY_DELAY = 700;

// biome-ignore format: Keep each image path on its own line.
const IMAGE_PATHS = [
  "katze.png",
  "fireFlower.png",
  "superLeaf.png",
  "cherrys.png",
  "star.png",
];

const main = document.querySelector("main") as HTMLDivElement;
const reels = [...document.querySelectorAll(".reel")] as HTMLButtonElement[];
const reelImages = reels.map((reel) => reel.querySelector("img") as HTMLImageElement);
const startButton = document.getElementById("start-button") as HTMLButtonElement;
const overlay = document.getElementById("overlay") as HTMLDivElement;
const resultTitle = document.getElementById("result-title") as HTMLHeadingElement;
const resultMario = document.getElementById("result-mario") as HTMLImageElement;
const retryButton = document.getElementById("retry-button") as HTMLButtonElement;

let running = false;
let nextReel = 0;
let imageIndex = 0;
let spinTimer: number;
let replayKeyReadyAt = 0;

function startGame() {
  clearInterval(spinTimer);
  overlay.hidden = true;
  main.inert = false;
  startButton.style.visibility = "hidden";
  startButton.disabled = true;
  running = true;
  nextReel = 0;
  imageIndex = 0;
  reels.forEach((reel, index) => {
    reel.disabled = index !== nextReel;
  });
  updateImages();
  spinTimer = setInterval(updateImages, SPIN_INTERVAL);
  reels[0].focus();
}

function resetGame() {
  clearInterval(spinTimer);
  running = false;
  nextReel = 0;
  imageIndex = 0;
  overlay.hidden = true;
  main.inert = false;
  startButton.style.visibility = "visible";
  startButton.disabled = false;
  reelImages.forEach((image) => {
    image.src = IMAGE_PATHS[0];
  });
  reels.forEach((reel, index) => {
    reel.disabled = index !== nextReel;
  });
  startButton.focus();
}

function updateImages() {
  if (nextReel === reels.length) {
    showResult();
    return;
  }

  imageIndex = (imageIndex + 1) % IMAGE_PATHS.length;
  reelImages.slice(nextReel).forEach((image) => {
    image.src = IMAGE_PATHS[imageIndex];
  });
}

function stopReel(index: number) {
  if (!overlay.hidden || index !== nextReel || index >= reels.length) return;

  reels[index].disabled = true;
  nextReel++;
  if (nextReel < reels.length) {
    reels[nextReel].disabled = false;
  } else if (!running) {
    showResult();
  }
}

function showResult() {
  clearInterval(spinTimer);
  running = false;
  const won = reelImages.every((image) => image.src === reelImages[0].src);
  overlay.dataset.outcome = won ? "win" : "loss";
  resultTitle.textContent = won ? "Gewonnen!" : "Verloren!";
  resultMario.hidden = !won;
  retryButton.textContent = won ? "Noch einmal spielen" : "Erneut versuchen";
  replayKeyReadyAt = Date.now() + REPLAY_KEY_DELAY;
  main.inert = true;
  overlay.hidden = false;
  retryButton.focus();
}

reels.forEach((reel, index) => {
  reel.addEventListener("click", () => stopReel(index));
});

startButton.addEventListener("click", startGame);
retryButton.addEventListener("click", resetGame);

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space") return;
  event.preventDefault();
  if (event.repeat) return;

  if (!overlay.hidden) {
    if (Date.now() >= replayKeyReadyAt) retryButton.click();
  } else if (running) {
    stopReel(nextReel);
  } else {
    startGame();
  }
});
