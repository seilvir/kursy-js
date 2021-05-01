//Struktura petli for - ogolnie tak jak stanadrowo w w innych jezykach programowania iterator wartuent zakonczenie i inkrementacja/dekrementacja
//iteracja podstawowa - jak petla while umożliwia powtarzanie instrukcji tak długo jak warunek końcowy jest spełniony (czyli jesli warunek jest prawdziwy petla powtarza iteracje)
for (let counter = 0; counter < 4; counter++)  
{
  console.log(counter); //cialo

}

//iteracja tablicy
var tablica = ['1',2,3,4,5,'szesc','siedem'];
var licznik = 0;
for (let counter = 1; counter < tablica.length; counter ++)
{
console.log("wartosc to ",tablica[licznik]);
licznik++;
if (licznik == 5)
{
    break; // przerwanie petli za pomoca break
}
}

let kuawa = '1'
console.log(typeof(kuawa))  // typeof zwraca typ zmiennej (moze byc tez tab obiekt itd)