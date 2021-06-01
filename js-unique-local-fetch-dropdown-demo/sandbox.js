async function start() {
  let url = "http://localhost:8080/categories"; //categories-demo - spring boot project (WS - C:\Tasks\STS_Workbench)
  let response = await fetch(url);
  const events = await response.json(); // read response body and parse as JSON

  console.log(events);

   const categories = [
    ...new Set(
      events.map((event) => {
        return event.categoryName;
      })
    ),
  ];

  console.log(categories);

  categories.map((item) => {
    document.getElementById("categories").options.add(new Option(item, item));
  });
}

start();
