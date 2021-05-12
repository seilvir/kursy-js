// ta klasa dziedziy z klasy page w pliku page.js - tutaj sa tworzone metody ktore zwracaja szukane elementy

const Page = require('./page');

class SearchPage extends Page {

        //const searchInput = $('#gh-ac');
        //const searchBtn = $('#gh-btn');

        get searchInput() // ustawienie gettera 
        {
                 return ($('#gh-ac-box'));
        }

        get searchButton(){ // ustawienie gettera
                 return ($('#gh-btn'))
        }

        get category()
        {
                return ($('#gh-cat option:nth-child(1)'));
        }

        open (){ // metoda super jest nadpisywana
            super.open('https://www.ebay.com:/') //tutaj podawany jest url do metody nadgrzednej 
        }

}

module.exports = new SearchPage (); // eksportujemy tutaj instancje klasy SearchPage