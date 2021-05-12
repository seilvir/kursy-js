/*
Obiekty są przekazywane przez odniesienie. Oznacza to, że kiedy przekazujemy zmienną przypisaną do obiektu do funkcji jako argument, 
komputer interpretuje nazwę parametru jako wskazującą na przestrzeń w pamięci, w której znajduje się ten obiekt. W rezultacie 
funkcje zmieniające właściwości obiektu faktycznie mutują obiekt na stałe (nawet jeśli obiekt jest przypisany do zmiennej const).
*/
//przekazanie wartosci do obiektu przez referncje za pomoca => 
//jest to odniesienie do pamieci dlatego tez nawet stala oznaczona const moze dzieki temu zmienic wartosc (czego nie mogla by zrobic przy zmiennych)
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => { //zapis nr 
  obj.color = 'glorious gold'
};
paintIt(spaceship);
 
console.log(spaceship.color) // Returns 'glorious gold'


let  spaceship2 = {
  homePlanet : 'Earth',
  color : 'silver'
};
spaceship2.color ='czerwony'


console.log(spaceship2.color) // Returns 'czerwony'
console.log("pierwsze",spaceship2)
let jakasfunkcja =  function nowafunkjca(nazwa_obiektu){ //utworzenei funkcji ktora jako argument przyjmuje nazwe jakiegos obiektu
  nazwa_obiektu= {'hulk':'mr green','other':'mrblue',homePlanet:'Dagoba'}
  console.log(nazwa_obiektu)
};
jakasfunkcja(spaceship2) //wywolanie funkcji - tutaj nastepuje zmiana nazwy
console.log(spaceship2.color) // wynik - mimo ze obiekt spaceship2 jest const - zostala zmieniona wartosc klucza kolor z silver na zielony
spaceship2.color='niewidzialny'
spaceship2.hulk='arghhhh'
console.log(spaceship2.color) // wynik - mimo ze obiekt spaceship2 jest const - zostala zmieniona wartosc klucza kolor z silver na zielony
console.log("Wynik z klucz ",spaceship2)