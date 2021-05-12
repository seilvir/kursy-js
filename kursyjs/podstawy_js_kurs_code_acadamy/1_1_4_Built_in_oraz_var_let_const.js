//obiekty wbudowane https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
console.log("Wyswietl losowa liczbe, ",Math.random())//prints random number from 0-1
console.log("Wyswietl losowa liczbe, ",Math.floor(Math.random()*100))//prints lsoowa liczba calkowita
console.log(Math.ceil(43.8)); //zaokragla w gore
console.log(Number.isInteger(2017)); // sprawdza czy podana wartosc w nawiasach to intgere
var zmiena // deklaruje zmienną o aktualnym kontekście wykonania, wraz z opcjonalnym zaincjalizowaniem wartości (cosjakby zmienna globalna)
//zmienne var mozna ponownie deklarowac w dowolnym momencie kodu
let zmienna2 // deklaruje zmienną w zasięgu bloku, wraz z opcjonalnym zaincjalizowaniem wartością. (cos jak zmienna wewnatrz danego bloku)
// zmienne let mozna zadeklarowac tylko raz w ramach ich zasiegu leksykalnego
const stala // jest to stala o zasiegu blokowym (podobnie jak let) a do tego nie mozna jej zmieniac
console.log('print dla zmiennej o nazwie zmiena ',zmiena) //
console.log('print dla zmiennej o nazwie zmienna2 ',zmienna2)
changeMe = true;
zmiena = 'zmienione zmiena var'
console.log(zmiena);
zmiena = false;
console.log(zmiena)
zmiena = 'zmieniona nazwa z dedykacji var dla zmiena';
console.log(zmiena)
zmienna2='hohoho';
console.log(zmienna2)
