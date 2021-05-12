// hooks https://webdriver.io/docs/options/#hooks - jest to zestaw funkcji ktore wykonuja sie miedzy innymi przed wszystkimi testami, przed kazdym testem z osobna (it), po wszystkich
// zakonczonych testach oraz po kazdym osobno zakonczonym tescie (w dokumentacji jest wiecej przykladowych hookow - natomiast tutaj zostane przedstawione 4 podstawowe). 4 Podstawowe to:
// before (), beforeEach(), after(), afterEach().
// prawidlowym podejsciem jest hooki byly w bloku describe (a nie w it()).

const searchPage  = require ('../../kursyjs/webdriverio/pageobjects_with_require/search.page');
const WatchesPage  = require ('../../kursyjs/webdriverio/pageobjects_with_require/zegarki.page');

describe('HOOK - search', () => {
    before (async () => {
    //tutaj funkcja jest wywolywana przed uruchomieniem wszystkich testow
    await browser.url('https://youtube.com') //
    await browser.refresh();
    });

    beforeEach (async () => {
        //tutaj funkcja jest wywolywana przed uruchomieniem wszystkich testow
        await browser.url('https://google.com') //
        await browser.refresh();
        await browser.maximizeWindow();
        });

    /*
    it('Hook - search laptop', async () => {
        await searchPage.open(); //podawanie tytulu strony ktora chce sie otworzyc 
        await searchPage.searchInput.addValue('Laptop');
        await searchPage.searchButton.click();
        await expect(searchPage.searchInput).toHaveValue('Laptop')
       
        await expect(searchPage.category).toHaveTextContaining('aptop')
    });
    */
    it('FIrst test - Should verfiy title', async () => {
        await browser.url('https://www.ebay.com'); //podawanie tytulu strony ktora chce sie otworzyc
    await expect(browser).toHaveTitleContaining('Electronics, Cars, Fashion, Collectibles & More | eBay'); // to have title - sprawdza po znaczniku <title> czy jest taki sam jak podany w ()
    });

    after ( async () => {
        await browser.url('https://onet.pl')
    });

    afterEach (async () => {
        await browser.refresh();
    });


});

/*
describe('Hook- zegarki1', () => {
    beforeEach (async () => {
        //tutaj funkcja jest wywolywana przed uruchomieniem wszystkich testow
        await searchPage.open('https://onet.pl') //
        });


    it('hook - multi open zegarki 1', async () => {
        await WatchesPage.open(); //podawanie tytulu strony ktora chce sie otworzyc 
        await expect(WatchesPage.promobanner).toBeDisplayed();
    });
    it('NPM - zegarki3', async () => {
        await expect(WatchesPage.infotitle).toHaveTextContaining('Rolex');
    });
    it('NPM - zegarki4', async () => {
        await expect(WatchesPage.shopbutton).toHaveLinkContaining('/fashion')
        await expect(WatchesPage.shopbutton).toHeClickable();
    });
});
*/
