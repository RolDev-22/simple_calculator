const timer = document.getElementById("timer");

const buttons = document.querySelectorAll("button");

function updateTime() {
  const currentTime = new Date().toLocaleTimeString("en-US", { hour12: true });
  timer.textContent = currentTime;
}
setInterval(updateTime, 1000);
