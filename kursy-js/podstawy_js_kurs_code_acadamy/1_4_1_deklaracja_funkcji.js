//deklaracja funkcji 
/*
function nazwa_funkcji ()
{
    cialo funkcji
}
*/
console.log("hi");
var zmiennavar='jeden';
let zmiennalet='let';
var zmiennavar22='jeden22';
let zmiennalet22='let22';
function jest_to_funkcja(x=12,y=6) // deklaracja fucnkjci - wartosci moga byc przypisane (przyjma wartosc jesli nie beda podane wartosci
//przy wywolaniu funkcji)
{
    console.log("----------Poczatek funkcji ----------");
    var zmienna_var_wewnatrz_funkcji = 'Jestem wewnatrz funkcji';
    let zmienna_let_wewnatrz_funkcji = 'Jestem wewnatrz funkcji'
    console.log("Jestem zmienna var",zmiennavar);
    console.log("Jestem zmienna let",zmiennalet)
    console.log("Zmienna to ",x);
    console.log("Zmienna to ",y);
    var return_z_funkcji= ("Return z consol loga"+x+y);
    console.log('---------Koniec funkcji--------------')
    return return_z_funkcji;
}
var funkcja = jest_to_funkcja(9,93)
console.log(funkcja)
var zmienna_z_funkcji = jest_to_funkcja(zmiennavar22,zmiennalet)
console.log("-------------------------------------------")
console.log('jest to wypisanie z funckji przypisania zmiennej',zmienna_z_funkcji)
console.log("-------------------------------------------")
var inne = jest_to_funkcja('asdasd','awdawd')
console.log(inne);
var dodaktow_oliczby = jest_to_funkcja(3,4,42) // podanie wiecej zmiennych wartosci niz zmiennych -beda tylko 2 
var bez_danych = jest_to_funkcja() //wywolanie bez podania zmiennych - wtedy zostana te automatyczne 
