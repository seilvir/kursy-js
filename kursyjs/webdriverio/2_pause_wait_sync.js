

//import searchPage from './search.page';
//import WatchesPage from '../../kursyjs/webdriverio/pageobjects_with_ts/zegarki.page';

var chai = require('chai');  
var chaiassert = chai.assert;    // Using Assert style
var chaiexpect = chai.expect;
const searchPage  = require ('../../kursyjs/webdriverio/pageobjects_with_ts_import/search.page');
const WatchesPage  = require ('../../kursyjs/webdriverio/pageobjects_with_ts_import/zegarki.page');

describe('Pause search', () => {
    it('test 1',  () => {
         searchPage.open('https://www.ebay.com/'); //podawanie tytulu strony ktora chce sie otworzyc 
          searchPage.fashionbutton.moveTo();
          browser.pause(1000);
          searchPage.fashionWatches.click();

    });
});

describe('Wait for displayed, waitForExist', () => {
     it('waitForDisplayed',  () => {
          searchPage.open('https://www.ebay.com/'); //podawanie tytulu strony ktora chce sie otworzyc 
           searchPage.fashionbutton.moveTo();
           searchPage.fashionWatches.waitForDisplayed({timeout: 5000});
           searchPage.fashionWatches.click();
 
     });

     it('waitForExist',  () => {
          searchPage.open('https://www.ebay.com/'); //podawanie tytulu strony ktora chce sie otworzyc 
           searchPage.fashionbutton.moveTo();
           searchPage.fashionWatches.waitForExist({timeout: 5000});
           searchPage.fashionWatches.click();
 
     });
 });
 
