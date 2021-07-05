//Properties - czyli funkcj/metody - tutaj dla stringow
//https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm
console.log("funkcja . length pokazuje dlugosc znakow dla wskazanego stringa - w przykladzie to "+"JavaScript".length);
var zmienna="asap  WZ  ich ni san     jakis ciag znakow" ;
var tablica = ['asap', '', 'WZ', '', 'ich', 'ni', 'san', '', '', '', '', 'jakis', 'ciag', 'znakow']
tablica[tablica.length+1]='dodatkowa_warrtosc'; //dziwne dodanie - ale dziala
console.log("zmienna to ",zmienna);
//Wbudowane metody - przyklad zastoasowania metody to E.g. 'example string'.methodName().
//https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

var zmienna_duze_litery = zmienna.toUpperCase() ; //toUpperCase - zamienia wszystkie litery w stringu na duze litery
var zmiennadwa = zmienna.toLowerCase(); // zmianan na male litery
console.log(zmiennadwa.charAt()); // to 
console.log("drukowanie duzych liter zmiennej zmienne_duze_litery",zmienna_duze_litery.charCodeAt()); 
console.log(zmienna.length); // zwraca dlugosc stringa
var booleonow0o=zmienna_duze_litery.trim() //trim usuwa biale znaki z obu koncow tekstu
console.log(booleonow0o)
var what_replace1='g'; // funckja .replace - zamienia ciag znakow na inny
var where_replace='dolce gabana' //string nr ktory bedzie zamieniany

var replace_result = where_replace.replace(what_replace1,"b") //zwroci dolce banana - pierwsza zmienna to co zamieniamy a drugi to na co zamieniamy
console.log(replace_result);
//funkcja search - ogolnie funkcja dziala tak ze jesli znajdzie wskazuje pozycje wystapienia zwaracaj int i nr pozycji jak nie to zwraca -1
console.log(replace_result.search("dolce"));
console.log(zmienna.search("sasap"))
if (zmienna.search("find me")== -1)
{console.log("nie znalezion funckja zwraca wartosc ",zmienna.search("find me"))}
if (zmienna.search("WZ") >-1)
{console.log("Znaleziono funckja zwraca wartosc ",zmienna.search("WZ"))}
else
{console.log("Nie ma funkcja  zwraca wartosc ",zmienna.search("WZ"))}
//funcka slight - wycina fragment tekstu

var sliced = where_replace.slice(1,-2)//pierwszy argument to uciecie z przodu a drugi to uciecie z tylu  
console.log(sliced,' pokaze olce gaba')
 //funckja split - rozdzieka string tworzac tablice
var splitowo=zmienna.split (" ")//jest tez dodatkowy argument ktory wskazuje ile elementowa ma byc tablica - jesli nie jest podany drugi argument to tworzona jest max tablica
console.log(splitowo) // zwraca tablice
//funkcja substring np  tekst.substr(-2,2)); - podobna w sumie do funkcji slice - ogolnie wycina podany string
console.log(zmienna.substr(3,10)) //pokaze stringa od 3 do 10 
//console.log(zmienna.toString);//
console.log(zmienna.valueOf);
console.log(zmienna.startsWith("S"))

