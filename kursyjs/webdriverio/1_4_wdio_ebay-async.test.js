//https://webdriver.io/docs/api/expect-webdriverio#tobedisplayed
// oznaczenie kropki . - oznacza ze szukamy elementu po nazwie klasy np class = 'b-promobanner__info-title' - szukamy: $('.b-promobanner__info-title')
//section.czesc_nazwy_klasy = wyszukiwanie unikalnego elementu DOM = tutaj jest to wyciagniecie klasy z <section class=b-promobanner loremi psum>


describe('Watches page async', () => {
    it('Is banner display', async () => {
         await browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'); //podawanie tytulu strony ktora chce sie otworzyc 
         const promobanner = await $('section.b-promobanner') //znalezienie elementu po id klasy 
         await expect(promobanner).toBeDisplayed();
    });
    it('Banner title', async  () =>{
        const nowy_element_tytul = await $('.b-promobanner__info-title') // to jest szukanie po unikalnej nazwie klasy danego elementu
        await expect(nowy_element_tytul).toHaveTextContaining('off watches') // toHaveTextContaining - sprawdzanie czy dany element znajduje tekst
    });
    it ('Banner linnk have url',async () =>{
        const znajdz_linka = await $('.b-promobanner__info-btn')
        console.log(znajdz_linka)
        await expect(znajdz_linka).toHaveLinkContaining('fashion') //sprwadzanie czy wskazany element - tutaj bedacy linkiem zawiera w adresie url podana fraze
        await expect(znajdz_linka).toBeClickable() //sprawdzenie czy link jest klikaklny
    });
    it ("Is banner are clickable", async ()=>{
        const znajdz_linka = await $('.b-promobanner__info-btn')
         znajdz_linka.click; // klikniecie wwe wskazany w zmiennej elememnt ktory jest linkiem
         expect(browser).toHaveUrl('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535')
    });
});


