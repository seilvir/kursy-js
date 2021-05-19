
const Page = require ('./exit_base_page')
class Agent_check_method extends Page{

     clik_element (from_main_find_agent_or_office) {
         const klikaj = from_main_find_agent_or_office
         klikaj.click()
    }

     agent_search_from_main(from_main_first_name,from_main_last_name){
        const first_name_value='John';
        const second_name_value='Adams';
        from_main_first_name.addValue(first_name_value)
        from_main_last_name.addValue(second_name_value)

    }

}

module.exports = new Agent_check_method ()