let person = { name: "Bob", position: "developer" };

console.log('person:'+person);

let newPerson = { ...person, city: "dallas", position: "senior developer" };

console.log('person:'+person);
console.log('newPerson:'+newPerson);
