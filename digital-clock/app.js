const clock = document.querySelector(".clock");

const tick = () => {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let html = `${hours} : ${minutes} : ${seconds}`;
  clock.innerHTML = html;
};

setInterval(tick, 1000);
