/*Abstrakcja pozwala nam pisać skomplikowany kod w sposób łatwy do ponownego użycia, debugowania i zrozumienia dla czytelników
Możemy pracować z funkcjami w taki sam sposób, jak z każdym innym typem danych, w tym ponownie przypisywać je do nowych zmiennych
Funkcje JavaScript są obiektami pierwszej klasy, więc mają właściwości i metody jak każdy obiekt
Funkcje mogą być przekazywane do innych funkcji jako parametry
Funkcja wyższego rzędu to funkcja, która akceptuje funkcje jako parametry, zwraca funkcję lub obie te funkcje */

var zmienna1='tekst_zmiennej_1'
function pierwsz_liczba(pierwsza)
{
  var pierwsza_podana = pierwsza
  var peirwsza_w_funkcji=5
  var zwracana_pierwsza=pierwsza_podana+peirwsza_w_funkcji
  console.log("Pierwsza liczba to",zwracana_pierwsza)
  return zwracana_pierwsza
}

function funkcjanr1(funvar1,funkvar2,funkvar3=10)
{
    var A =funvar1;
    var B = funkvar2;
    var C=funkvar3;
    console.log("Poczatek funkjci")
    for (var i=A; i <= B; i++)
    {
    console.log("Zmienna A",A,"zmienna B",B,"zmienna C",C)
    A=A+1;
    }
    console.log("Koniec funkjci");
    return `dupa i ${A}`;
}
funkcjanr1(2,4)
var wartosc_do_przekazania_funkcji = pierwsz_liczba(3) //utworzenie zmiennej i wywolanie funkcji nr 1
console.log("Return z pierwszej funkcji w zmiennej wartosc_do_przekazani to ",wartosc_do_przekazania_funkcji)//return z pierwszej funkcji
var zwracacanafunck1 = funkcjanr1(wartosc_do_przekazania_funkcji,11) //utworzenie zmiennej nr 2 z wywolania funkcji nr 2
console.log("Return z drugiej funkcji w zmiennej zwracanafunck1 to ",zwracacanafunck1) // return z funkcji nr 2 