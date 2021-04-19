//Struktura metody .foreach tak naprawdy jest to wywolywaniefunkcji zapis w postaci funkcji wygladatak
const artists2 = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists2.forEach(function(artists3) //taknprawde nazwa funkcji moze byc dowolna
  {
  console.log(artists3 + ' is one of my favorite artists.'); //wazne zebyzwracana wartosc tablicy byla tak samo nazwana jak funkcja
  }
  );
//ponizej ta sama funkcja w zapisie alternatywnym (czesciej uzywanym czyli (nazwa_tab =>{})
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artists =>
  {
  console.log(artists + ' is one of my favorite artists.');
  }
  );
  


//metoda .map() 
//Kiedy .map () jest wywoływana w tablicy, pobiera argument funkcji zwrotnej i zwraca nową tablicę ! Po 
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
 return number+3 //tutaj tworzony jest po kolei kazdy nowy element nowej tablicy squareNubmers 
}

);
console.log(squareNumbers); //zwroci 4 5 6 7 8 

// metod .filter() - 
//Podobnie jak .map (), .filter () zwraca nową tablicę. Jednak .filter () zwraca tablicę elementów po odfiltrowaniu niektórych elementów z oryginalnej tablicy
// Funkcja wywołania zwrotnego metody .filter () powinna zwracać wartość true lub false w zależności od przekazanego elementu. Elementy, które powodują, że funkcja zwrotna zwraca wartość true, są dodawane do nowej tablicy

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number'; //jesli warunek jest spelniony to dana wartosc bedzie dodana do tablicy tutaj dany typ tablicy ma byc nubmer
}
);
console.log(onlyNumbers);

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words.filter(word => {
  return word.length < 6; // tutaj eleement bedzie dodany do nowej tablicy jesli warunek bedzie spelniony czyli dlugosc znakow bedzie mniejsza niz 6
});