const title = document.querySelector("p");
title.addEventListener("click", (e) => {
  e.target.style.textDecoration = "line-through";
});
