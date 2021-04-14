//glowna konstrukcja to if(warunek){blok instrukcji} else if(warunek){blok instrukcji} else {blok instrukcji}
// W JS nie ma instrukcji or and not - zamiast tego jest opowiednio  ||(or) && (and) !(not)
// Operatory > wieksze niz ; < mniejsze niz ; >=wieksze lub rowne ' <=mniejsze lub rowne ; === rowne; !== nie rowne
// wartosc true przyjmuje oprocz true rowniez stringi oraz int (inne niz 0)
// wartosc false przyjmuja : false, 0, puste stringi '' "", null, undefined, NaN (or not a number)
var liczba=10;
var liczba2=12;

    if (liczba==10 || liczba == 12)
    {
        console.log("Zmienna o nazwie ",liczba," spelnia warunek");
    }
    else if (liczba2==10 || liczba2==12)
    {
        console.log("Zmienna o nazwie ",liczba2, "spelnia warunek ze szukana libcza ma wartosc 12");
    }
    else if (liczba == 10 && liczba2 == 12)
    {
        console.log("Obydwa warunki sa spelnione");
    }
    else {
        console.log("Zaden z warunkow nie spelnia warunku");
    }
var truee=true;
if (truee) // warunek ze zmienna truue ma wartosc logiczna prawda bez potrzeby dopisywania ze truee=true
{
    console.log("Zmienna true ma wartosc true");
}
else if (!truee)
{
    console.log("zmienna truue ma tak naprawde wartosc false");
}
let sleepy = false;
console.log(!sleepy); // Prints true
//sprawdzanie czy zmienna ma jakas wartosc np string czy int polega po na sprawdzeniu czy zmienna zwraca true lub false (true jesli ma )
//jakakolwiek wartosc a false jesli zmienna jest pusta np
let jakas_zmienna ='Jakis tekst';
let jakas_zmienna2;
if (jakas_zmienna)
    {
        console.log(`Zmienna jakas zmienna zwraca wartosc true i ma  wartosc  ${jakas_zmienna}`)
    }
else
    {
        console.log("false")
    }

    if (!jakas_zmienna2)
    {
        console.log(`Jestem pusta wartoscia ${jakas_zmienna2} !!! `)
    }
    else
    {
        console.log("Warunek zwrocil else")
    }
