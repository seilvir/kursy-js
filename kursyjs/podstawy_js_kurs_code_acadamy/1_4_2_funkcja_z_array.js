//Jeśli przekażesz obiekt (n.p. Array) jako parametr a funkcja zmieni właściwości obiektu,
// zmiana ta jest rejestrowana poza funkcją, tak jak jest to pokazane w przykładzie:




function myFunc(theObject) { // przekazanie calego obiektu jako wartosc funkcji
  theObject.make = "Toyota";
  var tekst=`Zwrocona wartosc to ${theObject.make}`
  return tekst
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y,z;

x = mycar.make; // x dostaje wartość "Honda"

z=myFunc(mycar); // przekazanie calego obiektu jako wartosc funkcji
y = mycar.make; // y dodaje wartość "Toyota"
                // (właściwość make została zmieniona przez funkcję)
console.log(y)
console.log(x)
console.log(z)
console.log(mycar) //mycar teraz ma nowa wartosc dla atrybutu make - jest to Toyouta
//Note: Przypisanie nowego obiektu do parametru nie będzie miało żadnego skutku poza funkcją, ponieważ jest to zmiana wartości parametru, 
//a nie zmiana jednej z właściwości obiektu: