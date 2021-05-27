
const Agent_search = require('./agent_search_page.js');
const Agent_check_method = require('./agent_check_methods_page.js');



describe ( "First run test for agent exit", () => {

    before ('three two one youtube go', () => {
        //tutaj funkcja jest wywolywana przed uruchomieniem wszystkich testow
        Agent_search.open('https://onet.pl'); //
         browser.refresh();
         browser.maximizeWindow();
        });
    

    it('Display',  () => {
        Agent_search.open(); //podawanie tytulu strony ktora chce sie otworzyc 
          expect(Agent_search.agent_role).toBeDisplayed();
          expect(Agent_search.agent_role).toHaveTextContaining('Realtor');
          expect(Agent_search.agent_name).toHaveTextContaining('John Adams');
          expect(Agent_search.agent_phone).toHaveTextContaining('561 757 8543');
});
});

describe ( "Second run test for agent exit", () => {



    it('Display agent office',  () => {
          Agent_search.open_exit(); //podawanie tytulu strony ktora chce sie otworzyc 
          elementdoklikania= Agent_search.from_main_find_agent_or_office
          const from_main_first_name =Agent_search.from_main_input_agent_first_name
          const from_main_last_name =Agent_search.from_main_input_agent_last_name
          const from_main_search_button =Agent_search.from_main_agent_search_button
          //elementdoklikania.click()
          Agent_check_method.clik_element(elementdoklikania)
          browser.pause(10000)
          Agent_check_method.agent_search_from_main(from_main_first_name,from_main_last_name)
          Agent_check_method.clik_element(from_main_search_button)
          //Agent_check_method.clik_element(find_office_agents)
          Agent_search.open("https://www.youtube.com/watch?v=Iy4iQvJo24U&ab_channel=EpicLegacyTrailerMusic")

});

});
