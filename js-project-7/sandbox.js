const cars = ["Toyota", "Merc", "BMW", "Audi"];

const carsFromPage = ["Toyota", "hyundai", "BMW", "Audi"];

const getCars = () => {
  let score = 0;
  cars.forEach((car, index) => {
    //console.log(car, index);
    if (car === carsFromPage[index]) {
      score += 25;
    }
  });
  return score;
};

console.log(getCars());
