const events = [
  { name: "world cup 2022", category: "sports" },
  { name: "Amiri cup", category: "sports" },
  { name: "National Day", category: "ceremony" },
  { name: "IAAF", category: "sports" },
  { name: "Jewellery", category: "exhibition" },
  { name: "Tennis tournament", category: "sports" },
];

const categories = [...new Set(
  events.map((event) => {
    return event.category;
  })
)]; 

const result = document.querySelector('#result');
result.innerHTML += categories.map((item)=>{
 return `<button class="btn btn-info">${item}</button>`;
}).join('');
