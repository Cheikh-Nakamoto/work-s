var totalSeconds = 0;
var timerInterval;
var bool = false;

startTimer();

function startTimer() {
  // Vérifier si le timer est déjà en cours
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000); // Appelle la fonction toutes les 1000 millisecondes (1 seconde)
  }
}

function stopTimer() {
  clearInterval(timerInterval); // Arrête le timer
  timerInterval = null;
}

function updateTimer() {
  totalSeconds++;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;

  // Formater le temps pour l'affichage
  var formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  document.getElementById("case").innerText = formattedTime;
}

Random();
function Random() {
  var nombreAleatoire1 = Math.floor(Math.random() * 10) + 1;
  var nombreAleatoire2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("nbr1").textContent = nombreAleatoire1;
  document.getElementById("nbr2").textContent = nombreAleatoire2;
}

function Sign() {
  // Créer une liste de signes d'opération
  var signesOperation = ["+", "-", "*", "/"];
  let i = 0;
  while (i >= 0) {
    i = Math.floor(Math.random() * 10) + 1;
    if (i <= 3) {
      document.getElementById("sign").textContent =
        "(" + signesOperation[i] + ")";
      break;
    }
  }
}

function ScoreLevel() {
  let level = document.getElementById("level").textContent;
  let lev = parseInt(level, 10) + 1;
  let score = lev * 10;
  document.getElementById("score").textContent = score;
  document.getElementById("level").innerText = lev;
}

document.querySelector(".btn").addEventListener("click", function (e) {
  let input = document.getElementById("result");
  var result = parseInt(input.value, 10);

  let nbr1 = document.getElementById("nbr1").textContent;
  let nbr2 = document.getElementById("nbr2").textContent;
  let sign = document.getElementById("sign").textContent;
  let res = 0;
//   if (sign === '(+)') {
//     console.log('IN');
//     res = parseInt(nbr1, 10) + parseInt(nbr2, 10);
//     console.log(typeof result);
//   }

  switch (sign) {
    case "(+)":
      res = parseInt(nbr1, 10) + parseInt(nbr2, 10);
      break;
    case "(-)":
      res = parseInt(nbr1, 10) - parseInt(nbr2, 10);
      break;
    case "(*)":
      res = parseInt(nbr1, 10) * parseInt(nbr2, 10);
      break;
    case "(/)":
      res = parseInt(nbr1, 10) / parseInt(nbr2, 10);
      break;
    default:
      console.log(sign);
  }

  if (result === res) {
    document.getElementById("check").textContent = "Correct";
    //   ' <span class="correct">Le résultat est vrai</span>';
    Random();
    ScoreLevel();
    Sign();
  } else {
    document.getElementById("check").innerHTML = "Invalid";
    //   ' <span class="correct">Le résultat est faux</span>';
    Random();
    Sign();
  }
});
