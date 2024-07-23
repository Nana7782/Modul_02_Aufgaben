let homeScore: number = 0;
let awayScore: number = 0;
const homeScoreElement = document.getElementById("homeScore")!;
const awayScoreElement = document.getElementById("awayScore")!;

function updateScore() {
  homeScoreElement.textContent = homeScore.toString();
  awayScoreElement.textContent = awayScore.toString();
  return updateScore;
}

function addHomePoints(points: number) {
  homeScore += points;
  updateScore();
}

function addAwayPoints(points: number) {
  awayScore += points;
  updateScore();
}

function resetScore() {
  homeScore = 0;
  awayScore = 0;
  updateScore();
}

document.getElementById("homeAdd1")?.addEventListener("click", function () {
  addHomePoints(1);
});
document.getElementById("homeAdd2")?.addEventListener("click", function () {
  addHomePoints(2);
});
document.getElementById("homeAdd3")?.addEventListener("click", function () {
  addHomePoints(3);
});
document.getElementById("awayAdd1")?.addEventListener("click", function () {
  addAwayPoints(1);
});
document.getElementById("awayAdd2")?.addEventListener("click", function () {
  addAwayPoints(2);
});
document.getElementById("awayAdd3")?.addEventListener("click", function () {
  addAwayPoints(3);
});
document.getElementById("reset")?.addEventListener("click", resetScore);
