//Promise -  to obiekty, które reprezentują ostateczny wynik operacji asynchronicznej. Obiekt Promise może znajdować się w jednym z trzech stanów:
// Pending ; Fullfilled ; Rejected
// aby utworzyc Promise trzeba uzyc slowka kluczowego 'new' oraz slowka kluczowego 'Promise' dla utworzenia metody 


/*
Metoda konstruktora Promise przyjmuje parametr funkcji zwany funkcją executora, która jest uruchamiana automatycznie po wywołaniu konstruktora.
Funkcja wykonująca zwykle rozpoczyna operację asynchroniczną i dyktuje, w jaki sposób powinna zostać rozliczona obietnica.
Funkcja executora ma dwa parametry funkcji, zwykle nazywane funkcjami resolve() i reject(). Programista nie definiuje resolve() i reject(). 
Kiedy konstruktor Promise zostanie uruchomiony, JavaScript przekaże swoje własne funkcje resolve() i reject() do funkcji wykonawczej.
*/
var zmienna = 10;
console.log("Czy cos sie dzieje ?")
const jakastamfunkcja_egzekucji_promise = function funkcja(resolve,reject) //funckja przyjmuje 2 parametry nie ustawiaone przez programiste
{
    if (zmienna == 10)
        {
            resolve("Zmienna ma wartosc 10 ",zmienna) //resolve przyjmuje wartosc jesli warunek jest spelniony
        }
    else
    {
        reject("zmienna nie ma wartosci 10 tylko ma wartosc ",zmienna) //jesli warunek nie jest spelniony to reject przyjmuje wartosc
    }   
} //tutaj tworzona jest funkcja ktora bedzie egzekwowana
//resolve - zmienia status z pending na fullfilled a wartosc spelniona zostanie przekazana do argumentu resolve, jesli Promise nie bedzie spelniony wtedy do reject bedzie przekazana wartosc bledu jako argumentu a status rejectu zmieni na rejected z pendingu a powod odrzucenia bedzie przekazany jako argument do reject()

//tworzenie obiektu mojpierwszypromise
const wynik = new Promise(jakastamfunkcja_egzekucji_promise) // egzekucja funkcji z uzyciem Promise wraz z deklaracja do zmiennej
console.log("Wynik to ",wynik)



