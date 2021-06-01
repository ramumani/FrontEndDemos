async function start() {
  let url = "http://localhost:8080/categories"; //categories-demo - spring boot project (WS - C:\Tasks\STS_Workbench)
  let response = await fetch(url);
  const events = await response.json(); // read response body and parse as JSON

  console.log(events);
  

  
  //alert(events2[0].name);

  /*const events = [
    { name: "world cup 2022", categoryName: "sports" },
    { name: "Amiri cup", categoryName: "sports" },
    { name: "National Day", categoryName: "ceremony" },
    { name: "IAAF", categoryName: "sports" },
    { name: "Jewellery", categoryName: "exhibition" },
    { name: "Tennis tournament", categoryName: "sports" },
  ];*/

  const categories = [
    ...new Set(
      events.map((event) => {
        return event.categoryName;
      })
    ),
  ];

  console.log(categories);

  const result = document.querySelector("#result");
  result.innerHTML += categories
    .map((item) => {
      return `<button class="btn btn-info">${item}</button>`;
    })
    .join("");
}

start();
