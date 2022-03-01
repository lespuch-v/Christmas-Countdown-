
const timeEl = document.getElementById("countdown-display");

const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();


// Update the count down every 1 second
const myInterval = setInterval(window.onload = function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the minus between now and the count down date
  const minus = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(minus / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (minus % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((minus % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((minus % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  timeEl.innerHTML =
    days + " days " + hours + "h " + minutes + " min " + seconds + "s ";

  // If the count down is finished, write some text
  if (minus < 0) {
    clearInterval(myInterval);
    timeEl.innerHTML = "Christmas!!!";
  }
}, 1000);
