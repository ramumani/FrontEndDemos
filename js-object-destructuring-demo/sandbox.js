let people = {
  name: "Kannan",
  age: 40,
  position: "project manager",
  associatesresporting: { junior: "sunil", senior: "chenchu" },
  accountnumbers: [1000, 2000, 3000, 4000],
};

function printManagerDetails({
  name: firstName,
  age: age,
  associatesresporting: { junior: juniorAssociate, senior: seniorAssociate },
  accountnumbers: accountnumbers,
}) {
  console.log(firstName, age, juniorAssociate, seniorAssociate);
  for (const iterator of accountnumbers) {
    console.log(iterator);
  }
}

printManagerDetails(people);
