//odpalanie testu -kopiuje testowany skrypt js w specu - w terminalu:   w propejkcie odpalam plik o nazwie 'wdio.conf.js' uzywajac komendy npx wdio wdio.conf.js
describe('Ebay open', () => {
    it('FIrst test - Should verfiy title', async () => {
        browser.url('https://www.ebay.com'); //podawanie tytulu strony ktora chce sie otworzyc
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles &amp; More | eBay');
    });

    it("Second test - search car on ebay and verify",async () => {
        browser.url('https://www.ebay.com');
        except(browser.) 

    });
});


