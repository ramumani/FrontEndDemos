const ulTag = document.querySelector("ul");

const addButton = document.querySelector("button");

ulTag.addEventListener("click", (e) => {
  e.target.remove();
});

addButton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new";
  ulTag.append(li);
});



