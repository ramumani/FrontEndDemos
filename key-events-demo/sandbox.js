const form = document.getElementById("registrationForm");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.userName.addEventListener("keyup", (e) => {
  //console.log(e);
  feedback.textContent = "key pressed is " + e.key;
});
