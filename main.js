function countDownTimer() {
  let startDate = new Date();

  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
    11,
    25,
    0
  );
  const startDateMs = startDate.getTime();
  const endDateMs = endDate.getTime();
  let timeDiff = endDateMs - startDateMs;
  timeDiff = timeDiff / 1000;
  let secondsLeft = Math.floor(timeDiff % 60);
  timeDiff = timeDiff / 60;
  let minsLeft = Math.floor(timeDiff % 60);
  timeDiff = timeDiff / 60;
  let hoursLeft = Math.floor(timeDiff % 24);
  let timeLeft = `${hoursLeft} : ${minsLeft} : ${secondsLeft}`;
  document.querySelector("#showCountdown").innerHTML = timeLeft;
  let t = window.setInterval(countDownTimer, 500);
}
