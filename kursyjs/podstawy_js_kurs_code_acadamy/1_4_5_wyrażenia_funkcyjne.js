// przypisanie funkcji do stalej zmiennej etc
//deklaracja wyglada tak: typ_zmiennej nazwa_funkcji(zmiennej) = function(parametry) {cialo funkcji}
const plantNeedsWater = function(day) {
  console.log("jestem w funkcji plantNeedsWater !!!");
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};


 var wypisplan=plantNeedsWater('Tuesday');
console.log(wypisplan); //zwraca false (czyli nastepuje wykonanie funkcji i return)
///////////////////////////////////////////////////////////////////////
console.log("---------------------------------------------------")
var plantNeedsWater2 = function(day2) {
  console.log("wypisuje funkcje nr 2")
  if(day2 === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater2('Tuesday'); //funkjcja tutaj wykonala 
console.log("----------------------2---------------------------")
const wypisz =plantNeedsWater2('Tuesday'); //wykonanie funkcji nr 2
console.log('Ostanie wypisanie to ',wypisz);//dodaje return