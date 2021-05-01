const displayNames = (names) => {
  let html="";
  for (const name of names) {
    html += `<p>${name}<p>`;
  }
  return html;
};

document.getElementById("nameContainer").innerHTML = displayNames([
  "Jeff",
  "Rick",
  "Scott",
]);
