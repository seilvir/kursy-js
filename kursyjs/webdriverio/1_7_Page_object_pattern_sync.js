

//import searchPage from './search.page';
//import WatchesPage from '../../kursyjs/webdriverio/pageobjects_with_ts/zegarki.page';
const searchPage  = require ('../../kursyjs/webdriverio/pageobjects_with_ts_import/search.page');
const WatchesPage  = require ('../../kursyjs/webdriverio/pageobjects_with_ts_import/zegarki.page');
/*
describe('NPM - search', () => {
    it('NPM - search',  () => {
         searchPage.open(); //podawanie tytulu strony ktora chce sie otworzyc 
         searchPage.searchInput.addValue('Laptop');
         searchPage.searchButton.click();
         expect(searchPage.searchInput).toHaveValue('Laptop')
         expect(searchPage.category).toHaveTextContaining('PC Laptops')
    });
});
*/
describe('NPM - zegarki1', () => {
    it('NPM - zegarki2',  () => {
         WatchesPage.open(); //podawanie tytulu strony ktora chce sie otworzyc 
         expect(WatchesPage.promobanner).toBeDisplayed();
    });
    it('NPM - zegarki2 $$',  () => {

     expect(WatchesPage.PromoBannerArray).toBeDisplayed();
});
    it('NPM - zegarki3',  () => {
         expect(WatchesPage.infotitle).toHaveTextContaining('Rolex');
    });
    it('NPM - zegarki4',  () => {
         expect(WatchesPage.shopbutton).toHaveLinkContaining('/fashion')
         expect(WatchesPage.shopbutton).toBeClickable();
    });
});

