/* 
Oprocz deklaorwania "ksztaltu" obiektow Interfejsy mozna implementowac w klasach (czyli wymuszenie zaimplementowanie konkretnych metod w klasie ktora implementuje interfejsy)
Klasa moze dziedziczyc wiele interfejsow w przeciwienstwie do dziedziczenia gdzie dziedziczona moze byc tylko jedna klasa
*/
interface Jest_to_intefejs_nr1
{
    metoda_z_interfejsu() : String; //deklaracja metody ktora musi byc uzyta w klasie implementujacej ten interfejs
    
}
interface Intefejs_nr_2
{
    metoda_z_interfejsu2() : String;//deklaracja metody ktora musi byc uzyta w klasie implementujacej ten interfejs
    
}
/////////////////////////////////////////////////////////


class Nowa_klasa implements Jest_to_intefejs_nr1, Intefejs_nr_2 // implements - jest to kluczowe polecenie do implementacji interfejsow
{
    metoda_z_interfejsu()
    {
        console.log("Jestem metoda do implementacji")
        return ("Returnowanie z metody zawartej w interfejsie")
    }
    metoda_z_interfejsu2()
    {
        console.log ("jestem metoda z interfejsu nr 2 ")
        return ("Heh to return z drugiego interfejsu")
    }
}
/////////////////////////////////////////////////////////

const jakas_funkcja = (nowy_obiekt: Nowa_klasa) => //tutaj jako parametr funkcji podalem zmienna ktora jest obiektem utworzynm z klasy "Nowa_klasa"
{
console.log("log z funkcji jakas fnkcja")
var zmienna = nowy_obiekt.metoda_z_interfejsu()
console.log("drugi log wraz z returnem z funkcji ktora byla w interfejsie",zmienna)
var zmienna_drugi_interfejs = nowy_obiekt.metoda_z_interfejsu2()
console.log("trzeci log wraz z returnem z metody w drugim interfejsie", zmienna_drugi_interfejs);

return ("Oto return  z metody jakas-funkcja")
}

//////////////////////////////////////////////////////////
var Utworzony_now_obiekt = new Nowa_klasa(); //utworzenie obieku
const wynik_returnu = jakas_funkcja(Utworzony_now_obiekt) //wsadzenie obiektu jako parametru funkcji
console.log("retur nr 2 z funkcji to : ",wynik_returnu)
