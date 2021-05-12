//https://webdriver.io/docs/api/expect-webdriverio#tobedisplayed
//dokumentacja chai https://www.chaijs.com/guide/styles/#assert
// oznaczenie kropki . - oznacza ze szukamy elementu po nazwie klasy np class = 'b-promobanner__info-title' - szukamy: $('.b-promobanner__info-title')

// 3 moduly do assercji - modul assert jest najbardziej podobny do znanego juz wczesniej selenium
var chai_assert = require('chai').assert //ipmort metody should z moduly chai
var chai_expect = require('chai').expect //ipmort metody should z modudlu chai - nazwa zmiennej to chai_expect dlatego zeby nie kolidowala z standarwoym expect WDIO
var chai_should = require('chai').should //ipmort metody should z moduly chai

//import {expect as chai_expect} from 'chai';

describe('Watches page', () => {
    it('Is banner moca', async () => {
        await browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'); //podawanie tytulu strony ktora chce sie otworzyc 
        const znajdz_linka = await $('.b-promobanner__info-btn')
        const znajdzlinkatext = znajdz_linka.getText()
        console.log(znajdz_linka,znajdzlinkatext)
        await expect(znajdz_linka).toHaveLinkContaining('fashion') //sprwadzanie czy wskazany element - tutaj bedacy linkiem zawiera w adresie url podana fraze
        await chai_expect(znajdz_linka).to.be.not.empty //sprawdzenie czy link nie jest pusty za pomoca chai
        //await tag.chai_should.be.not.empty // chai - should - sprawdza czy znaleziony element nie
        await chai_assert.isEmpty(znajdz_linka)
    });
    it ("Is banner are clickable", async ()=>{
        const znajdz_linka = await $('.b-promobanner__info-btn')
        const tag = znajdz_linka.getTagName() //wyszukiwanie nazwy taga
        await chai_expect(tag).to.equal('a') //porowownywanie nazwy tego za pomoca chai_excpept
        await znajdz_linka.click(); // klikniecie wwe wskazany w zmiennej elememnt ktory jest linkiem
        await expect(browser).toHaveUrlContaining('https://www.ebay.com/e/fashion/') // sprawdzanie czy jest czesc adresu w url
        //wszedzie powzyzej zastosowalem skaldnie expect - dla standrowowego WDIO 

        await tag.chai_should.be.equal('a') // wykorzystania assercji za pomoca operatora chai -  should
        await chai_assert.equal('a')
    });
    // testy pisanie za pomoca CHAI
    it ("Simple chai eaual assert", async ()=>{
        await chai_expect(2).to.equal(2); //tutaj uzyta nazwa zmiennej chai_except - dzieki temu nie koliduja z expect z WDIO
        await chai_expect(2).to.not.equal(3);
        
    });

});

describe('IN CHAI', () => {
    it('Is banner display', async () => {
        await browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'); //podawanie tytulu strony ktora chce sie otworzyc 
        const znajdz_linka_chai = await $('.b-promobanner__info-btn')
        await znajdz_linka_chai.click(); // klikniecie wwe wskazany w zmiennej elememnt ktory jest linkiem
        const url_chai = await browser.getUrl();
        await chai_expect(url_chai).to.include('fashion') //sprwadzanie czy wskazany element - tutaj bedacy linkiem zawiera w adresie url podana fraze
});
});