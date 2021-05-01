const users = [
  { username: "Rick", premium: true },
  { username: "Scott", premium: false },
  { username: "Glenn", premium: true },
  { username: "Jeff", premium: false },
];

const premiumUsers = users.filter((user) => {
  return user.premium;
});

console.log(premiumUsers);
