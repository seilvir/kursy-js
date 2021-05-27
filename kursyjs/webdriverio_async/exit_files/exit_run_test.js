
const Agent_search = require('../pageobjects/agent_search_page.js')

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