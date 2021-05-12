// ta klasa dziedziy z klasy page w pliku page.js - tutaj sa tworzone metody ktore zwracaja szukane elementy

const Page = require('./page');
class WatchesPage extends Page {

        //const searchInput = $('#gh-ac');
        //const searchBtn = $('#gh-btn');

        get promobanner() // ustawienie gettera 
        {
                return  $('section.b-promobanner');
        }

        get infotitle(){ // ustawienie gettera
                return  $('.b-promobanner__info-title')
        }
        get shopbutton()
        {
                return  $('.b-promobanner__info-btn')
        }

        open (){ // metoda super jest nadpisywana
            super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535') //tutaj podawany jest url do metody nadgrzednej 
        }

}

module.exports =  new WatchesPage (); // eksportujemy tutaj instancje klasy SearchPage