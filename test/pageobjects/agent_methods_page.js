const Page = require ('./exit_base_page')
class Agent_method extends Page{

     async clik_element (from_main_find_agent_or_office) {
         const klikaj = from_main_find_agent_or_office
         await klikaj.click()
    }

     async agent_search_from_main(from_main_first_name,from_main_last_name){
        const first_name_value='John';
        const second_name_value='Adams';
        from_main_first_name.addValue(first_name_value)
        from_main_last_name.addValue(second_name_value)

    }
    async maximize_wait ()
    {   
        await browser.maximizeWindow()
        await browser.minimizeWindow();
        await browser.pause(1000);
        await browser.maximizeWindow();
        return  ('hey hi hello')
    }

}

module.exports = new Agent_method ()