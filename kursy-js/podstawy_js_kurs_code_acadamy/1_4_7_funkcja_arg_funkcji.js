//deklaracja funkcji 
/*
function nazwa_funkcji ()
{
    cialo funkcji
}
*/
console.log("hi");
var zmiennavar='jeden';
let zmiennalet='let';
var zmiennavar22='jeden22';
let zmiennalet22='let22';
let funckja= function nowa_funkcja()
    {
        console.log("funckja nr 1")

        var a = 2
        var b = 3
        var c = a+b
        let name = (aa=a,bb=b,cc=c) => {
           console.log("funkcja nr 2")
            var d = cc+aa+bb; 
            return d;
        }
        returnowanie = name(1,2,4)
        return returnowanie
    
    }
let wynikizreturnnr2 = funckja()
console.log("Wyniki z return nr 2 to ",wynikizreturnnr2)
function jest_to_funkcja(funckja,argument) // deklaracja fucnkjci - wartosci moga byc przypisane (przyjma wartosc jesli nie beda podane wartosci
//przy wywolaniu funkcji)
{
   
    console.log("----------Poczatek funkcji ----------")
    wywolanie = funckja();
    console.log("return z funkcji ktora jest argumente to ",wywolanie)
    console.log('Argument to ',argument)
    console.log('---------Koniec funkcji--------------')
    return wywolanie;
}
jest_to_funkcja(funckja,'argument')
