// funckja require - uzywana do importowania modulow w JS

let ImportMenu= require('../moduly/4_3_Menu.js') //require () przyjmuje argument ścieżki pliku wskazujący na oryginalny plik modułu.//nazwa zmiennej moze byc dowolna
let zmienna_z_innego_pliku=`Jestem z innego pliku a import z Menuu.special to: ${ImportMenu.special}`
console.log(zmienna_z_innego_pliku)

function jakasfunkcja(dane)
{ 
    let ile=dane;
    for (i =0; i <= ile; i++)
    {
        console.log(`Iterator to ${i}, a wartosc z modulu to ${ImportMenu.tekst}`)
    }
    return `Petle wykonano ${ile} razy`
}
const zwrot_z_funkcjito =jakasfunkcja(4)
console.log("Funkcja z tego to pliku to", zwrot_z_funkcjito)
const zwrot_z_funkcji_z_innego_pliku_to =ImportMenu.wywolaj(2) //wywolanie z innego pliku Menuu.wywolaj 
console.log(zwrot_z_funkcji_z_innego_pliku_to)

//--------------------- Ponizej wywolania nr 2 
let Importmenu2=require('../moduly/4_3_moduleksport2.js')
console.log(Importmenu2.gettekst2(3))
console.log(Importmenu2.tekstjakisnr2)

//prosty przyklad requeire obiketu z codeacadamey
const Menu = require('../moduly/4_3_exportdefault.js');
 
console.log(Menu.getSpecialty());