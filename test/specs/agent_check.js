const Agent_search = require('../pageobjects/agent_search_page.js');

describe ( "First run test for agent exit agent check", () => {
    it('Display',  () => {
        Agent_search.open(); //podawanie tytulu strony ktora chce sie otworzyc 
          expect(Agent_search.agent_role).toBeDisplayed();
          expect(Agent_search.agent_role).toHaveTextContaining('Realtor');
          expect(Agent_search.agent_name).toHaveTextContaining('John Adams');
          expect(Agent_search.agent_phone).toHaveTextContaining('561 757 8543');
});
    it('Agent search', async () => {
          await browser.url('https://www.exitrealty.com')
          await browser.maximizeWindow()
          //let agent_office_click_button = await  $('//div[@data-cy = "link-find-agent"]');
          let agent_office_click_button = await Agent_search.from_main_find_agent_or_office
          await agent_office_click_button.click();
          let imie = await Agent_search.from_main_input_agent_first_name
          await imie.addValue('John');
          let nazwisko = await Agent_search.from_main_input_agent_last_name;
          await nazwisko.addValue('Adams');
          search_klik = await Agent_search.from_main_agent_search_button
          await search_klik.click()
          await browser.closeWindow()

        /*
    it ('Display agent name from search result', () => {
        const agent_name_search_element = Agent_search.agent_link_from_search_result
        const agent_name_in_search_result = Agent_check_method.agent_name_from_result_search(agent_name_search_element)
        expect(Agent_search.agent_link_from_search_result).toHaveTextContaining(agent_name_in_search_result)
        */
        });
});

describe("webdriver.io page", () => {
    it("should have the right title", async () => {
        await browser.url('https://www.google.com');
        await browser.maximizeWindow();
        const cos = await $('input[name="q"]')
        await cos.setValue('some text');
        });

    });
