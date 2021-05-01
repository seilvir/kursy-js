//https://webdriver.io/docs/selectors/
//w tej wersji wymagana jest konstrukcja async await
//odpalanie testu -kopiuje testowany skrypt js w specu - w terminalu:   w propejkcie odpalam plik o nazwie 'wdio.conf.js' uzywajac komendy npx wdio wdio.conf.js
describe('Ebay open', () => {
    it('FIrst test - Should verfiy title', async () => {
         await browser.url('https://www.ebay.com'); //podawanie tytulu strony ktora chce sie otworzyc 
         await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');//asercja - sprawdzenie czy strona ma taki sam tytul jak ten podany
    });

    it("Second test - search car on ebay and verify", async () => { //kolejny test async

        const searchinput = await $('#gh-ac'); //przypisuje zmienna ktora szuka po id wartosci 'gh-ac' znak $ to cos w stylu findElementby
        const searchbtn= await $('#gh-btn'); //drugi element
        await searchinput.addValue('Laptop'); //addValue - jest to wpisanie w pole formularze wartosci ktora jest przkazana w nawiasie
        await searchbtn.click(); //klikam w znaleziony przeycisk
        await expect(searchinput).toHaveValue('Laptop'); //sprawdzanie czy oczekiwana wartosc ma posiadana wartosc (expect(znaleziona_wartosc).toHaveValue("szukana wartosc"))
    });

    it ("Third tet - should update the search category ?", async () => {
        //const kategoria_laptop = await $$('#gh-cat option:nth-child(1)')//jest to zapis ktory wybiera pierwszy element znalezionego elementu czyli
        //const kategoria_laptop = await $('/html/body/div[3]/header/table/tbody/tr/td[5]/form/table/tbody/tr/td[2]/div/select/option[1]')//jest to zapis ktory wybiera pierwszy element znalezionego elementu czyli
        //gh-cat-box to id elementu , option to kolejny wezel elementu , :nth-child(x) - wybiera wskazany element
        const kategoria_laptop = await $$('#gh-cat option:nth-child(1)')//jest to zapis ktory wybiera pierwszy element znalezionego elementu czyli
        await expect(kategoria_laptop).toHaveValue('PC Laptops & Netbooks')
    });
});


