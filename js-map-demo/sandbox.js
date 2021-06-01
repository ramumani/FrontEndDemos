const people = [
  { name: "Glenn", age: "10", gender: "male" },
  { name: "Rick", age: "20", gender: "male" },
  { name: "Sandy", age: "30", gender: "female" },
];

const ages = people.map((person) => {
  let massagedAge = 0;
  if (person.gender === "male") {
    massagedAge = person.age * 2;
  }
  return massagedAge;
});

//console.log(ages);

const newPeople = people.map((person) => {
  return {
    firstName: person.name,
    oldAge: parseInt(person.age) + 10,
  };
});

//console.log(newPeople);

const names = people.map((person) => {
  return `<h3>${person.name}</h3>`;
});

const result = document.querySelector('#result');
result.innerHTML += names.join('|');

let newVal = "";
const pipedNames = people.map((person)=>{
 newVal += person.name+" | ";
 return newVal;
});

document.getElementById("result2").innerHTML = pipedNames[2];
