const form = document.getElementById("registrationForm");

const clickBtn = document.getElementById("clickBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //let userName = form.userName.value;
  //console.log(userName);
});

clickBtn.addEventListener("click", (e) => {
  let usrName = form.userName.value;
  console.log("usrName", usrName);
});
