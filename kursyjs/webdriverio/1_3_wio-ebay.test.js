
//odpalanie testu -kopiuje testowany skrypt js w specu - w terminalu:   w propejkcie odpalam plik o nazwie 'wdio.conf.js' uzywajac komendy npx wdio wdio.conf.js
describe('Ebay open', () => {
    it('FIrst test - Should verfiy title', async () => {
        await browser.url('https://www.ebay.com'); //podawanie tytulu strony ktora chce sie otworzyc
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay'); // to have title - sprawdza po znaczniku <title> czy jest taki sam jak podany w ()
    });

    it("Second test - search laptop on ebay and verify",async () => {
        const searchlaptopinput = await $('#gh-ac') // # to szukanie po ID
        const searchbutton = await $('#gh-btn');
        await searchlaptopinput.addValue('Laptop'); // addValue - wprowadzanie wartosci do pola typu input
        await searchbutton.click();
        await expect(browser).toHaveLinkContaining('Laptop') // toHaveValue - sprawdza czy w wartosc eleemntu jest taka sama jak ta podana w nawiasach
    });
    it ('should redirect to new page and verify the title', async () => {
        const category = await $('#gh-cat option:nth-child(1)') // jest wyszukiwanie po id i wybieranie pierwszego dziecka z dostepnej listy 
        await expect(category).toHaveTitle('Laptop | eBay')
    });
});


