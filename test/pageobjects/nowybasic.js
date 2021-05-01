/* 
Ogolnie testy uruchamia sie w srodowisku testowym webdrivera IO w fodlerze 'projekt/test/spec' jednak caly folder test to tak naprawde srodowisko testowe. Ten plik nie potrzebuje 
zalaczania inny plikow. Jednak na przykladzie pliku example.e2e.js to caly jest napisany w plikahc znajdujacych sie w "test --> pageobject" a w folderze spec tak naprawde 
jest tylko runner' wywolujacy caly test. 

*/
//describe () - jest to opis testu/scenariusza testowego ktory jest wykonywany - w zasadzie describe jest uzyte tylko raz
describe('webdriver.io page', () => {  //deklaracja bezimiennej funkcji zawierajaca blok 'it ()'. IT - to  czyli w zasadzie tez opis testu ?
    it('should have the right title', () => { //rownie it przyjmuje 2 parametry - opis oraz funkcje ktora bedzie testowala . Dla kazdego testowanego elementu tworzymy nowa deklaracje IT
        browser.url('https://webdriver.io'); //browser.url('adres') wskazanie strony ktora bedzie testowana
        expect(browser).toHaveTitle( //expect - czyli oczekiwany wynik (jaki parametr wskaznik browser). metoda toHaveTitle - czyli sprawdzenie czy strona ma tytul podany w parametrze (nizej)
            'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js'); // title jest pobierany znacznika <title> na stronie i to jest porownywane z zawarotscia na stornie
    });
});