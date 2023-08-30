var hitrn = 0;
var timer = 60;
var score = 0;

function makebubble() {
  var clutter = "";

  for (var i = 0; i < 133; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function getHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitrn").textContent = hitrn;
}

function setTime() {
  var timeInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timeInt);
      document.querySelector("#pbtm").innerHTML = `<h3>GAME OVER<h3>`;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function game() {
  document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var hit = Number(dets.target.textContent);

    if (hitrn == hit) {
      increaseScore();
      getHit();
    } else {
      getHit();
      makebubble();
    }
  });
}

game();
getHit();
setTime();
makebubble();
