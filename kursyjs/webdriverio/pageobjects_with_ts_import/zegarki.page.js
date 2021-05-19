// ta klasa dziedziy z klasy page w pliku page.js - tutaj sa tworzone metody ktore zwracaja szukane elementy

const Page = require('./page');
class WatchesPage extends Page {

        //const searchInput = $('#gh-ac');
        //const searchBtn = $('#gh-btn');

        get promobanner() // ustawienie gettera 
        {
                return  $('section.b-promobanner');
        }

        get PromoBannerArray()
        {
                return $$('section.b-promobanner')[0] // tutaj $$ co oznacza findElements - czyli tablice elementu - natomiast metoda zwraca pierwszy element 
        }

        get infotitle(){ // ustawienie gettera
                return  $('.b-promobanner__info-title')
        }
        get shopbutton()
        {
                return  $('.b-promobanner__info-btn')
        }
        get watchesCategoryList()
        {
                return $$('/html/body/div[3]/div[3]/div[1]/div/div/div/section[1]/ul/li') //tutaj xpath z 6 elementami
        }

        open (){ // metoda super jest nadpisywana
            super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535') //tutaj podawany jest url do metody nadgrzednej 
        }
        getWatchesCategoryList()
        {
                const zegarkilista = [];
                //w tym wywolalniu funkcji zostanie wypisany kazdy element wprost do konsoli
                //this.watchesCategoryList().map(
                        //element => console.log(element.getText())
                        //);
                
                //tutaj zostanie utworzona tablica i dodana z kazdym nowym elementem
                this.watchesCategoryList.map(
                        (element) => zegarkilista.push(element.getText())
                        );
                return zegarkilista; //zwracana lista 
        }
}

module.exports =  new WatchesPage (); // eksportujemy tutaj instancje klasy SearchPage