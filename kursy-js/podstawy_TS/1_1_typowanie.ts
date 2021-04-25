/* Podstawowe typy danych w TS to:
1)Boolean np: var zmienna01 : Boolean = true
2)Number  np: var zmienna1 : Number = 1
3)String np: var zmienna2 : String = 'jakis string'
4)Array ver 1 np : var zmienna3 : string[] = ['raz,'dwa,'trzy'] // w tym wypadku tablica moze sie skladac tylko z wartosci o typach string
5)Array ver 2 np: var zmienna4 : number[] = [1,2,3,4,5] // nie jestem pewien - ale tak mi sie wydaje 
6) Tuple (czyli pary danych) np const to_sa_tuple:[number,string] = [1,'tekst']
7) Enum - czyli enumeracja czyli zbior nazwanych wartosci. W TS jest to zbior wartosci liczbowych (domylsnie numerowane od 0)
np: enum Suit {go=5,rok,nana,hach,kyu}       wtedy element Suit.kyu ma wartosc 9
const nazwa_zmiennej: Suit = Suit.rok //7
Any (array mieszany, moze przyjmowac dowolne wartoscji) Typ jest przydatny np do przechowywania tablic z roznymi typami
np: var zmienna5:any[] = [1,'jeden',2,'dwa',3,'trzy']
zmienna5.push(5)


8)Void - void to taki typ ktory nie jest zadnym typem. Ten typ oznacza „brak wartości”. Powszechnie używa się go do oznaczania funkcji, które nic nie zwracają:
function showAlert(text:string):void 
{  //cialo funkcji
    window.alert(text);
}
9)Funkcje - w type script definiuje sie tym ktory funkcja zwraca poprzez return czyli np jesli return zwraca dane tekstowe to w deklaracji funkcji definiujemy typ string (tak jak w przykladzie ponizej) np:
function funkcja_pomocnicza_typ_string (jakas_zmienna : Number) : String  // typowanie dla tego co funkcja zwraca poprzez return
{
    return 'jakis tekst' // typ return to :String poniewaz zostalo to zatypowane przy deklaracji funkcji
}

10) Union type pozwala na opisanie typu, który jest jednym typem lub drugim typem. Przykładowo możemy stworzyć funkcję, która jako argument przyjmuje number lub Date:
function formatDate(date : number | Date) {}

11) Intersection type jest blisko związany z union type, ale pozwala na opisanie typu, który ma cechy kilku typów na raz. Najczęściej wykorzystywany jest z interfejsami. 
Korzystając z interfejsów z poprzedniej części, wyobraźmy sobie, że chcemy stworzyć funkcję, która oczekuje obiektu będącego na raz Serializable i Drawable:
function mojaFunkcja(obiekt:Serializable & Drawable) {  
    // obiekt na pewno ma metody toJSON i draw!
}

12) Aliasy typow (czyli przypisanie zmienne_typu globalnego typu ).Możemy na przykład zdefiniować typ Name, który będzie stringiem:
type Name = string;
class User {  
    firstName:Name;
}


Jesli np dla typu boolean przypiszemy string to uruchomieniu pojawi sie blad o niezgodnosci typow
*/

function funkcja_pomocnicza_typ_string (jakas_zmienna : Number, zmienna_tekst : String) : String  // typowanie dla tego co funkcja zwraca poprzez return
//zmienna typowane sa jako number i string - natomiast po nawiasnie typujemy to co zwraca funkcja 
{
    console.log("Podana wartosc dla zmiennej nr 1 to ",jakas_zmienna)
    console.log("Podana wartosc dla zmiennej nr 2 string to ",zmienna_tekst)
    return 'jakis tekst' // typ return to :String poniewaz zostalo to zatypowane przy deklaracji funkcji
}

var returnowanie = funkcja_pomocnicza_typ_string(1,'testowy tekst')
console.log(returnowanie)

console.log("to co dozwolone w JS rowniez jest w TS do tego w terminalu tsc .\1_0_hello_world_in.ts spowoduje utworzenie kopi JS")
//tsc nazwa pliku - tak naprawde spowoduje utworzenie kopii pliku w JS i potem dopiero mozna uruchamiac plik polecniem node nazwa pliku
function hellofunkcja(jakisstringbedzietyppowany : String)
{
    console.log("jestem typowana zmienna string ",jakisstringbedzietyppowany);

}
hellofunkcja("jakis tekst");
//hellofunkcja(8); //odkomentowanie wyrzuci blad poniewaz funkcja jako argument moze przyjmowac tylko string 

var zmienna_boolean : Boolean = true
var zmienna_number : Number = 1
var zmienna_string : String = 'jakis string'

var zmienna_array_ver1 : String [] = ['raz','dwa','trzy'] // w tym wypadku tablica moze sie skladac tylko z wartosci o typach string
var zmienna_array_ver2 : Number [] = [1,2,3,4,5] // nie jestem pewien - ale tak mi sie wydaje 
var zmienna_array_ver1_inny_zapis : Array<String> = ['raz','dwa','trzy'] // w tym wypadku tablica moze sie skladac tylko z wartosci o typach string
var zmienna_array_ver2_inny_zapis : Array<Number> = [1,2,3,4,5] // nie jestem pewien - ale tak mi sie wydaje 


const to_sa_tuple:[number,string] = [1,'tekst']

enum Suit {go=5,rok,nana,hach,kyu} //Enumeracja to zbiór nazwanych wartości. 
const nazwa_zmiennej_enum: Suit = Suit.rok //7 Domyślnie elementy enumeracji są numerowane od zera, ale można to zmienić:


var zmienna5:any[] = [1,'jeden',2,'dwa',3,'trzy']

