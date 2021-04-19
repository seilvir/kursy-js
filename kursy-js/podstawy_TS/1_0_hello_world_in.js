/* Podstawowe typy danych w TS to:
Boolean np: var zmienna01 : Boolean = true

Number  np: var zmienna1 : Number = 1

String np: var zmienna2 : String = 'jakis string'

Array ver 1 np : var zmienna3 : string[] = ['raz,'dwa,'trzy'] // w tym wypadku tablica moze sie skladac tylko z wartosci o typach string

Array ver 2 np: var zmienna4 : number[] = [1,2,3,4,5] // nie jestem pewien - ale tak mi sie wydaje

Any (array mieszany) np: var zmienna5 any[] = [1,'jeden',2,'dwa',3,'trzy']

Enum np:
enum Obiekt {jeden,dwa,trzy};
var ich : Obkiet = Obiekt.jeden
var ni: Obiekt = Obiekt.dwa

Void - void to taki typ ktory nie jest zadnym typem

Funkcje - w type script definiuje sie tym ktory funkcja zwraca poprzez return czyli np jesli return zwraca dane tekstowe to w deklaracji funkcji definiujemy typ string (tak jak w przykladzie ponizej) np:



Jesli np dla typu boolean przypiszemy string to uruchomieniu pojawi sie blad o niezgodnosci typow
*/
function funkcja_pomocnicza_typ_string(jakas_zmienna, zmienna_tekst) {
    console.log("Podana wartosc dla zmiennej nr 1 to ", jakas_zmienna);
    console.log("Podana wartosc dla zmiennej nr 2 string to ", zmienna_tekst);
    return 'jakis tekst';
}
var returnowanie = funkcja_pomocnicza_typ_string(1, 'testowy tekst');
console.log(returnowanie);
console.log("to co dozwolone w JS rowniez jest w TS do tego w terminalu tsc .\1_0_hello_world_in.ts spowoduje utworzenie kopi JS");
//tsc nazwa pliku - tak naprawde spowoduje utworzenie kopii pliku w JS i potem dopiero mozna uruchamiac plik polecniem node nazwa pliku
function hellofunkcja(jakisstringbedzietyppowany) {
    console.log("jestem typowana zmienna string ", jakisstringbedzietyppowany);
}
hellofunkcja("jakis tekst");
//hellofunkcja(8);
