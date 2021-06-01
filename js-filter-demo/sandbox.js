let people = [
  { name: "Rick", age: 50, position: 'ceo' },
  { name: "Glenn", age: 40,  position: 'cto'},
  { name: "Scott", age: 30, position: 'dev' },
  { name: "Lisa", age: 30, position: 'tester' }
];

let youngPeople = people.filter((person)=>{
  // if(person.age<=30){
  //   return person;
  // }

  return (person.age <= 30) && (person.position === 'dev');

});

let oldPerson = people.find((person)=> person.age>55);

if(oldPerson===undefined){
  console.log("no old person");
}

console.log(youngPeople);
