

//import searchPage from './search.page';
//import WatchesPage from '../../kursyjs/webdriverio/pageobjects_with_ts/zegarki.page';
const searchPage  = require ('../../kursyjs/webdriverio/pageobjects_with_require/search.page');
const WatchesPage  = require ('../../kursyjs/webdriverio/pageobjects_with_require/zegarki.page');

describe('NPM - search', () => {
    it('NPM - search', async () => {
        await searchPage.open(); //podawanie tytulu strony ktora chce sie otworzyc 
        await searchPage.searchInput.addValue('Laptop');
        await searchPage.searchButton.click();
        await expect(searchPage.searchInput).toHaveValue('Laptop')
        await expect(searchPage.category).toHaveTextContaining('PC Laptops')
    });
});

describe('NPM - zegarki1', () => {
    it('NPM - zegarki2', async () => {
        await WatchesPage.open(); //podawanie tytulu strony ktora chce sie otworzyc 
        await expect(WatchesPage.promobanner).toBeDisplayed();
    });
    it('NPM - zegarki3', async () => {
        await expect(WatchesPage.infotitle).toHaveTextContaining('Rolex');
    });
    it('NPM - zegarki4', async () => {
        await expect(WatchesPage.shopbutton).toHaveLinkContaining('/fashion')
        await expect(WatchesPage.shopbutton).toBeClickable();
    });
});

