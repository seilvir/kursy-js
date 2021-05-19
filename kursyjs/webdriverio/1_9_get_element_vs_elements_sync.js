

//import searchPage from './search.page';
//import WatchesPage from '../../kursyjs/webdriverio/pageobjects_with_ts/zegarki.page';

var chai = require('chai');  
var chaiassert = chai.assert;    // Using Assert style
var chaiexpect = chai.expect;
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

     before (() => {
          WatchesPage.open()
          //WatchesPage.getWatchesCategoryList();
          console.log(WatchesPage.getWatchesCategoryList());
     });

    it('should verify the watches category list ',  () => {
          const watchesCategoryList = WatchesPage.getWatchesCategoryList();
          
          //expect(watchesCategoryList[0]).toHaveTextContaining('Jewelry')
          chaiexpect(watchesCategoryList).to.deep.equal(
               [
                    'Jewelry & Watches',
                    'Watches, Parts & Accessories',
                    'Watches',
                    'Parts, Tools & Guides',
                    'Watch Accessories',
                    'Watches Mixed Lots',
               ]
          )

    });
    it('NPM - zegarki2 $$',  () => {

     expect(WatchesPage.PromoBannerArray).toBeDisplayed();
});

});

