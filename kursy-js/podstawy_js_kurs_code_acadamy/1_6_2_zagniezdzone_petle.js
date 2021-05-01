//Struktura petli for - ogolnie tak jak stanadrowo w w innych jezykach programowania iterator wartuent zakonczenie i inkrementacja/dekrementacja
//iteracja podstawowa - jak petla while umożliwia powtarzanie instrukcji tak długo jak warunek końcowy jest spełniony (czyli jesli warunek jest prawdziwy petla powtarza iteracje)


//iteracja tablicy
var tablica = ['1',2,3,4,5,'6','7'];
var tablica2 = ['jeden','dwa','trzy','cztery','piec','szesc','siedem'];
var licznik = 0;

for (let i = 0; i <= tablica.length; i ++)
{
  console.log("wartosc to ",tablica[i]);
  for (y = 0; y<=tablica2.length; y ++)
    {
      console.log(`Wartosc elementu nr ${i} w tablicy tablica to ${tablica[i]} a wartosc elementu nr ${y} tablicy tablica2 to ${tablica2[y]} `)
    }
}
