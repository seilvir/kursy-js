var zmienna1='tekst_zmiennej_1'
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
funkcjanr1(5,6) //tylko wypisanie funkcji
console.log("funkcjanr1 jakos zmienna to ",funkcjanr1(2,4)) //najpierw nastapi wywolanie funkcji a potem wartosc z return zostanie wypisana
const wywolaj = funkcjanr1(1,4); // tutaj nastepuje wywolania funkcji z returna
console.log(`Nazwa_funckji/zmiennej dzieki metodzie  !!!`,wywolaj)

var danawywolaj=funkcjanr1(5,8);
console.log("RETURN TO",danawywolaj) //tutaj danawywolaj.name zwroci undefined

//z neta
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  is2p2();
  console.log(is2p2.name);