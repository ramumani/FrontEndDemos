function paintPage() {
  let names = ["Glenn", "Scott", "Rick"];

  let html = "";

  console.log("html:" + html);

  /*for (const key in names) {  //for in loop
    if (Object.hasOwnProperty.call(names, key)) {
      let element = names[key];
      //console.log(element);
      html = html + `<h1>${element}</h1>`;
    }
  }*/

  /*for (let i =0; i<names.length; i++) { //regular for loop
    let element = names[i];
    html = html+`<h1>${element}</h1>`;
  }*/

  //for of loop
  for (const iterator of names) {
    let element = iterator;
    html = html + `<h1>${element}</h1>`;
  }

  console.log("html:" + html);
  document.getElementById("nameBlock").innerHTML = html;
}
