const searchPage  = require ('../../kursyjs/webdriverio/pageobjects_with_ts_import/search.page');
const WatchesPage  = require ('../../kursyjs/webdriverio/pageobjects_with_ts_import/zegarki.page');


describe('Watches page', () => {

    before ( () => {
        //tutaj funkcja jest wywolywana przed uruchomieniem wszystkich testow
         browser.url('https://youtube.com'); //
         browser.refresh();
        });
    

    it('Is banner display',  () => {
          browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'); //podawanie tytulu strony ktora chce sie otworzyc 
         const promobanner =  $('section.b-promobanner'); //znalezienie elementu po id klasy 
          expect(promobanner).toBeDisplayed();
});

    after (  () => {
             browser.url('https://onet.pl');
        });
          
    });


    describe('NPM - zegarki1', () => {

        beforeEach ( () => {
            //tutaj funkcja jest wywolywana przed uruchomieniem wszystkich testow
                browser.url('https://google.com') //
                browser.refresh();
                browser.maximizeWindow();
            });

        it('NPM - zegarki2',  () => {
             WatchesPage.open(); //podawanie tytulu strony ktora chce sie otworzyc 
             expect(WatchesPage.promobanner).toBeDisplayed();
        });
        it('NPM - zegarki3',  () => {
             expect(WatchesPage.infotitle).toHaveTextContaining('Rolex');
        });
        it('NPM - zegarki4',  () => {
             expect(WatchesPage.shopbutton).toHaveLinkContaining('/fashion')
             expect(WatchesPage.shopbutton).toBeClickable();
        });
        afterEach ( () => {
            browser.url('https://wp.pl')
             browser.refresh();
        });


    });
    

