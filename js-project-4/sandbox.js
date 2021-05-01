//const confirmationTextElements = document.querySelectorAll("p");
const confirmationTextElements = document.getElementsByClassName(
  "confirmationMsg"
);
console.log(confirmationTextElements);
confirmationTextElements.forEach((p) => {
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  } else if (p.textContent.includes("fail")) {
    p.classList.add("failure ");
  }
});
