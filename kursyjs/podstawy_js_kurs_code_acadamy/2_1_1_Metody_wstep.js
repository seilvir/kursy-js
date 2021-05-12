//deklaracja metody - przypomina troche deklaracje slownika (czyli obiektu w JS) i funkcji
//wzor jest taki przypipsanie do zmienjj = {nazwa_metody ()}
//
const nazwa_obiektu =
{
    nazwa_funkcji_w_metodzie1 () //w nawiasach argumenty metody
  //nazwa_funkcji_w_metodzie: function()
  // dzieki nowej skladni mozna pominac slowo function i dwukropek 

  {
    console.log("Jakis tam tekst  z funkcji nr 1 ")

    const nazwa_drugiej_funkcji = function(x=4,y=5)
      {
        let sumka=x+y
        console.log("jakis tam tekst wewnatrz funkcji nr z wartoscia sumka ktora wynosi",sumka)
        return sumka
      }
    var ruturnsumki=nazwa_drugiej_funkcji(9,8)
    console.log("Jestem returnem z funkcji nazwa_drugiej funkcji a return to ",ruturnsumki)
    console.log("Jestem printem z metody")
    var ich = 1
    var ni = 2
    var san = ich+ni
    return `Return z metody nazwa_metody z wartoscia san ktora wynosi ${san}`
  },
  drugametoda_w_obiekcie()
  {
    console.log("Jestem metoda nr 2 ")
    return "Wartosc zwracana z metody nr 2  drugametoda_w_obiekcie"
  },

  trzecia_metoda_w_obiekcie()
  {
    console.log("Consol log z metody nr 3 ")
    return "Wartosc zwracana z metody nr 3  o nazwie trzecia_metoda_w_obiekcie "
  }
};
//odwolanie sie bezposrenido do metod bez przypisywania nowej zmiennej lub stalej (czyli wykonania zawartosci metody)
nazwa_obiektu.metoda_W_zmiennej

//odwolanie sie poprzez przypisanie zmiennej etc
var metoda_W_zmiennej =nazwa_obiektu.drugametoda_w_obiekcie()
console.log('consol log osatni to ',metoda_W_zmiennej)