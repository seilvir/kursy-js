//module.exports skladnia dla wyeksportowanego pliku - ogolnie module.export sluzy do poinfowania ze plik bedzie udostepnial dane do tego pliku gdzie zostanie uzyte polecenie require i odpowiedni plik
/*
Wzorzec, którego używamy do eksportowania modułów, jest następujący:

Utwórz obiekt, który będzie reprezentował moduł.
Dodaj właściwości lub metody do obiektu modułu.
Wyeksportuj moduł za pomocą pliku module.exports.
*/
let Menuu ={}; //zmienna Menuu - jest to pusty obiekt ktory reporezentuje moduł Menuu
Menuu.special='Jakis tam tekst nr 1 menu special'; //jest wartosc zmiennej special przechowywanej w module/obiekcie Menuu

Menuu.tekst='jakis tekst '
var inny_tekst='inny tekst z jbllalblab'

//ponizej sposob na eksport funkcji - trzeba przypisac obiekt Menuu.jakaszmienna
Menuu.wywolaj = function jakasfunkcja_z_MENUU(dane)
{ 
    let ile=dane;
    for (i =0; i <= ile; i++)
    {
        console.log(`Iterator to ${i}, jestem funkcja z modulu Menuu i mam  ${inny_tekst}`)
    }
    return `Petle wykonano ${ile} razy z moduly MEnuu`
}
//gdy chcialem exportowac inny modul w tamym pliku wyszlo ze nie mona - czyli mozna dokonac tylko jednego eksportu
module.exports = Menuu; // eksportuje obiekt Menu jako moduł. module to zmienna, która reprezentuje moduł i eksportuje moduł jako obiekt.