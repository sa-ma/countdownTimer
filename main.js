let x;
const countdown = () => {
  const startDate = new Date();
  const h = parseInt(document.querySelector("#hours").value);
  const m = parseInt(document.querySelector("#mins").value);
  const s = parseInt(document.querySelector("#seconds").value);
  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
    h,
    m,
    s
  );
  if (startDate.getHours() > h) {
    alert("Set time must be greater than current time");
  } else {
    const startDateMs = startDate.getTime();
    const endDateMs = endDate.getTime();
    let timeDiff = endDateMs - startDateMs;
    const stoptime = timeDiff;
    timeDiff = timeDiff / 1000;
    let secondsLeft = Math.floor(timeDiff % 60);
    timeDiff = timeDiff / 60;
    let minsLeft = Math.floor(timeDiff % 60);
    timeDiff = timeDiff / 60;
    let hoursLeft = Math.floor(timeDiff % 24);
    let timeLeft = `${hoursLeft} : ${minsLeft} : ${secondsLeft}`;
    document.querySelector("#showCountdown").innerHTML = timeLeft;
    document.title = `${timeLeft} Febi's Clock`;

    if (stoptime <= 0) {
      timeLeft = `00 : 00 : 00`;
      const tone = new Audio("sound/tone.mp3");
      tone.play();
      clearTimeout(x);
      document.querySelector("#showCountdown").innerHTML = timeLeft;
      document.title = timeLeft;
    } else {
      x = setTimeout(countdown, 1000);
    }
  }
};

document.getElementById("setTime").addEventListener(
  "submit",
  e => {
    countdown();
    e.preventDefault();
  },
  false
);
