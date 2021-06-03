const Agent_search = require('../pageobjects/agent_search_page.js');
const Agent_methods = require('../pageobjects/agent_methods_page.js');
describe ( "First run test for agent exit agent check", () => {
    it('Display',  () => {
        Agent_search.open(); //podawanie tytulu strony ktora chce sie otworzyc 
          expect(Agent_search.agent_role).toBeDisplayed();
          expect(Agent_search.agent_role).toHaveTextContaining('Realtor');
          expect(Agent_search.agent_name).toHaveTextContaining('John Adams');
          expect(Agent_search.agent_phone).toHaveTextContaining('561 757 8543');
});

    it ('Display agent name from search result async', async() => {
        await browser.url('https://www.exitrealty.com')
        await browser.maximizeWindow()
        await Agent_search.agent_search_from_main()
        let napis = await Agent_methods.maximize_wait()
        console.log(napis)
    });

    it('Agent search sync', async () => {
          await browser.url('https://www.exitrealty.com')
          await browser.maximizeWindow()
          await  Agent_search.from_main_find_agent_or_office;
          //let agent_office_click_button = await Agent_search.from_main_find_agent_or_office
          //await agent_office_click_button.click();
          await Agent_methods.clik_element(await Agent_search.from_main_find_agent_or_office)
          let imie = await Agent_search.from_main_input_agent_first_name
          await imie.addValue('John');
          let nazwisko = await Agent_search.from_main_input_agent_last_name;
          await nazwisko.addValue('Adams');
          await Agent_methods.clik_element(await Agent_search.from_main_agent_search_button)
          await (await Agent_search.agent_details_link).waitForExist({ timeout: 10000 });
          await Agent_methods.clik_element(await Agent_search.agent_details_link)
          await browser.pause(10000);
          const adresurl  = await browser.getUrl() //zwraca url https://www.exitrealty.com/agent/John/Adams/240654/
          console.log(adresurl,'jakis tekst')
    });
        

});
/*
describe("webdriver.io page", () => {
    it("should have the right title", async () => {
        await browser.url('https://www.google.com');
        await browser.maximizeWindow();
        const cos = await $('input[name="q"]')
        await cos.setValue('some text');
        });
    });
*/