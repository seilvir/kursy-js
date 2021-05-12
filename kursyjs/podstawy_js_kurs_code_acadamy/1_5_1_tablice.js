//tablice asocjacyjne w JS wystepuja w postaci obiektow czyli np var obiekttablicy = {'jeden':1,'dwa':'two,'three':3}
//pytanie czy da sie zagniezdzac obiekty ?
let tablica = [] // tablice w JS przechowuje dane roznego typu (czyli w jednej tab moga byc str i int)
let zmienna1='hello'
tablica2 = [1,2,3,'ich','ni']
console.log("wyniki to ",tablica2);
const  tablica3 = ['ich',3,5] // elemenety definiowane w tab za pomoca const moga byc modyfikowane
var tablica4=[1,2,34,2,4]
console.log(tablica3[0]) // dostep do eleementow

//update eelementu
tablica4[3]='nowa wartosc ';
console.log("tablica4 po updacie to ",tablica4)

//tablice zagniezdzone - zapis 
const nestedArr = [[1], [2, 3],[4,5,6,7]]; 
console.log("Wypis z zagniezdzonej tablicy ",nestedArr[1][1]); // odiczyt

//zapist
var obiekt={}; // w zasadzie tablica asocjacyjna jest obiektem czyli nazwa_tab.klucz
obiekt.właściwość='jakaś wartość';
if(obiekt['właściwość']==obiekt.właściwość)
{console.log("elementy mają taką samą wartość'")}
else
{
{console.log("elementy  NIE MAJA TEJ SAMEJ WARTOSCI")
}

//join - sluzy do scalania tablicy w tekst : tablice.join(separator)
const tablicajoin= tablica.join("---") //w nawiasach ktory jest laczeniem - brak znaku to laczenie bez lacznika
console.log("printowanie join",tablicajoin)

//spread - pozwala na rozbijanie iterowanej wartości na składowe.
//rozbijanie tablicy na poszczególne liczby
const tab = [1, 2, 3, 4];
console.log(...tab); //1, 2, 3, 4
//kopiowanie tablicy
const tab2 = [...tab];
//łączenie tablic
const tabPart = [3, 4]
const tabFull = [1, 2, ...tabPart, 5, 6]; //1, 2, 3, 4, 5, 6
