//arrow funkction jest to skrocony zapis( w zasadzie robito samo przypisanie funkcji do zmiennej) np: (mozna powiedziec ze => zastepuje nazwe funkction)
// typ_zmiennej nazwa_funkcji(zmiennej) = (parametry funkcji) =>  {cialo funkcji}

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater("Friday")
var green_arrow= plantNeedsWater("lolo")
console.log(green_arrow);
console.log(plantNeedsWater("Wednesday"))
//https://www.codecademy.com/courses/introduction-to-javascript/lessons/scope