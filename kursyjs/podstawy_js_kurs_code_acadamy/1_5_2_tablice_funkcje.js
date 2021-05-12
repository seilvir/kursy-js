//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//funkcja length - zwraca dlugosc funkcji - zapis to nazwa_tab.lenght
const newYearsResolutions = ['Keep a journal', 'Take a falconry class','ich','ni'];
let last_element = newYearsResolutions[newYearsResolutions.length-1] //wyciaganie ostatniego elementu
console.log("ilosc elementow funkcji to, ",newYearsResolutions.length, 'a ostatnia to',last_element);


// funcka(metoda) push - dodaje eleement na koncu tablicy skladnia to: nazwa_tablicy.push(dodawane1, dodawane2)
const itemTracker = ['item 0', 'item 1', 'item 2'];
let nowa = itemTracker.push('item 3', 'item 4'); // zmienna nowa przyjmie ilosc elementow liczac od 1 = czyli tu 5
console.log(nowa)

// funkcja pop - sluszy do usuwania  ostatniego elementu - skladnia to : nazwa_tablicy.pop()
const newItemTracker = ['item 0', 'item 1', 'item 2','hej ','ho'];
const removed = newItemTracker.pop(); // tutaj jest to zapis gdzie do nowej zmiennej przypisujemy usuniety element z tablicy
console.log("removed  PO ",removed);

//uuswanie z poczatku tablicy - funkcja .shift() skladnia: nazwa_tablicy.shift()
let mutuwalnatab = ['item 0', 'item 1', 'item 2','hej ','ho'];
let  usuniety_eleemnt = mutuwalnatab.shift();
console.log("Usuniety element to ",usuniety_eleemnt, ' Z ');

//dodawanie elementu na poczatku tab - metoda unshift(dane)
mutuwalnatab.unshift("Dodawaniae na poczatku")

//szukanie nr ktory zajmujesze szukanay eleement tablicy - funkcji indexoF("szukany_element")
let nr_szukanej_indexOF = mutuwalnatab.indexOf('item')
console.log(nr_szukanej_indexOF)

//Wydobywa fragment tablicy i zwraca go jako nową tablicę.
//funkcja slice(poczatek,koniec) - wydobywa elemeenty z tablicy ze wskazanego zakresu - jesli koniec jest pomieta wyciagana jest cala tab
console.log("Przed uzyciem funkcji splice")
console.log(Object.keys(mutuwalnatab)) 

//funkcja splice - usuwa wskazany fragment 
mutuwalnatab.splice(2, 3) // this is how to remove an item

//wyswietlanie zawawrtosci talbicy w consol logu 
console.log('Wwartosc tab rmoevedItem',Object.keys(removedItem)) 

//funkcja concat Zwraca nową tablicę złożoną z tablicy, na której wywołano tę metodę, połączonej z innymi podanymi tablicami lub wartościami.
//skladnia  var new_array = old_array.concat(wartość1[, wartość2[, ...[, wartośćN]]])
alpha = new Array("a", "b", "c");
numeric = new Array(1, 2, 3);
alphaNumeric = alpha.concat(numeric); // tworzy tablicę ["a", "b", "c", 1, 2, 3]
print("Hello")