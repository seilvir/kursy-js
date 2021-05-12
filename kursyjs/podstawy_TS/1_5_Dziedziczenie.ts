/* 
W TS istnieje skrocony zapis konstruktora
W TS Po klasach pochodnych również mogą dziedziczyć kolejne klasy. czyli po prostu kazda kolejna klasa moze dziedziczyc poprzedniej (ale TypeScript nie posiada dziedziczenia wielokrotnego )

*/

//Standardowy zapis konstruktora ktory przyjmuje argument zawarty w klasie np:

class Klasa_standardowa //czyli przpypisajac argument klasy do wartosci z argumentu konstuktora o tym samym typie
{
    private pole_czyli_argument_klasy: String 
    constructor (jakas_wartosc_konstruktora: String ='job')
    {
        this.pole_czyli_argument_klasy= jakas_wartosc_konstruktora
        console.log("Hej jestem wywolaniem konstruktorwa w KLASA standardowa natomiast wartosc prywatnego pole_czyli_argument_klasy wynosi", this.pole_czyli_argument_klasy)
    }

    dodatkowa_metoda()
    {
        console.log("To jest dodatkowa metoda z klasy KLASA STANDARDOWA")
    }
}

//zapis dla konstruktora ponizszy jest taki sam jak ten powyzszy (dodatkowo dodaje inna metode potrzebna do dalszego cwiczenia)
class Klasa_macierzysta extends Klasa_standardowa
{
    constructor(private pole_czyli_argument_klasy2: String ='jakis tekst') 
    {
        super(); //nie wiem dlaczego tutaj TS wymagal wywolania super - skoro nie chcialem w
        console.log("Konstruktor klasy macierzystej",pole_czyli_argument_klasy2)
    }
    giveVoice() 
    {
        console.log(`Nazywam sie ${this.pole_czyli_argument_klasy2}! i jestem z klasy macierzystej`);
    }

}

// Dodaje nowa klasa ktora bedzie dziedziczyla z Klasa_macierzysta
class Jestem_klasa_ktora_dziedziczy extends Klasa_macierzysta
{
    constructor(protected pole_czyli_argument_klasy3 : String ) //typ protected daje taki sam rezultat jak private, za wyjątkiem sytuacji, w których korzystamy z dziedziczenia.
    {
        //console.log("Przed wywolanie klasy macierzystej w klasie dziedzczionej"); // wywolujac przy pomocy super nie moze byc nic przed konsttruktorem z klasy rodzica
        super(' Jestem konstruktorem KLASSA_MACIERZYSTA - wywolana w Jestem_klasa_ktora_dziedziczy z dodawanym argumentem konstruktora ') // super jest tak jakby odwołniem do klasy bazowej, po której dziedziczymy. Wywołując super(name) wykonujemy wszystkie operacje z konstruktora klasy bazowej. 
        console.log("Po wywolaniu klasy macierzystej w klasie dziedzczionej");
    }
    giveVoice() 
    {
        console.log(`Tutaj jest wywolanie metody giveVoice z klasy o nazwie Jestem_klasa_ktora_dziedziczy !`);
        super.giveVoice(); //Natomiast wywołanie super.giveVoice() spowoduje wywołanie metody giveVoice() z klasy RODZICA. Mimo ze metoda dziedziczy z klasy rodzica to argument ktory jest przekazywany z konstruktora pochodzi z ostatniego przekazanego konstruktora
    }
    inna_metoda()
    {
        console.log('jestem inna zmienna',this.pole_czyli_argument_klasy3)//argument z konstruktorwa ktory jest przekazany ma wartosc ktora jest podany przy tworzeniu obiektu
        super.dodatkowa_metoda() // tutaj dziedziczona jest pierwsza metoda z pierwszej klasy
    }
}

const obiekt1 = new Jestem_klasa_ktora_dziedziczy('tekst');
obiekt1.giveVoice();
obiekt1.inna_metoda();








