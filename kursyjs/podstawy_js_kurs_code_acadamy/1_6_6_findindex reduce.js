//metoda findindex - struktura jest taka sama w przypadku map i filter zwraca nr indeksu w tablicy jesli suzkany element istnieje
//Wywołanie .findIndex () na tablicy zwróci indeks pierwszego elementu, którego wynikiem jest prawda w funkcji wywołania zwrotnego.
const tablica = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
const tablica2 = [1,2,4,75,44,34,132,'arka']
const nowatablica = tablica2.findIndex(jaakakolwiek_nazwa =>
  {
    //return jaakakolwiek_nazwa == 'asrka' //jesli nie istnieje to zwraca -1 lub false
    return jaakakolwiek_nazwa >42  //jesli nie istnieje to zwraca -1 lub false
  }
  );
  console.log(nowatablica) //zwroci 3 bo to indeks pierwszego elementu ktory spelnia waunek
  


//metoda .reduce() 
//Metoda .reduce () zwraca pojedynczą wartość po wykonaniu iteracji przez elementy tablicy, zmniejszając w ten sposób tablicę. 
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  console.log("wartosc dla reduce to ",accumulator,currentValue,accumulator + currentValue)
  return accumulator + currentValue
},10) //drugi pamaretr to tak naorawdde poczatkowa wartosc poczatkowa dla accumulator - czyli accumulator rowna = 10+pierwsza wartosc z iteracji dla current value
//pierwsza iteracja powoduje to ze tablica number bedzia miala 3 elementy czyli [3,4,10] druga iteracja [7,10] a ostatnia jeden[17]
console.log(summedNums) // Output: 17



// Something is missing in the method call below
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
//ponizej przyklad uzycia funkcji w consologu
console.log(words.some(word => {
  return word.length < 6;
}));
