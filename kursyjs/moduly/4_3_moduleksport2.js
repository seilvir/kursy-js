// Możemy również opakować dowolny zbiór danych i funkcji w obiekt oraz wyeksportować obiekt za pomocą module.export 
let Menuu2 ={
    tekstjakisnr2:'Jakis tam tekst nr 2 MENU2',
    gettekst2: function jakasfunkcja_z_MENUU(dane)
    { 
        
        let ile=dane;
        for (i =0; i <= ile; i++)
        {
            console.log(`Iterator to ${i}, jestem funkcja z modulu MENU2 i mam  ${this.tekstjakisnr2}`)
        }
        return this.tekstjakisnr2+'!!!'
    }
}
 //zmienna Menuu - jest to pusty obiekt ktory reporezentuje moduł Menuu
Menuu2.tekstjakisnr3='Jakis tam tekst nr 3 MENU 2'; //jest wartosc zmiennej special przechowywanej w module/obiekcie Menuu
module.exports = Menuu2; // eksportuje obiekt Menu jako moduł. module to zmienna, która reprezentuje moduł i eksportuje moduł jako obiekt.
