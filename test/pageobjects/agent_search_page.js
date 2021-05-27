const Page = require ('./exit_base_page')

class Agent_search extends Page{

    get agent_name () {
        return $('//div[contains(@class,"AgentHeader__AgentName")][1]');
    }

    get agent_role (){
        return $('//div[contains(@class ,"AgentHeader__AgentTitle")]');
    }
    get agent_phone (){
        return $('//div[contains(text()," Mobile")]/following-sibling::a/div');
    }
    get agent_email (){
        return $('//div[text ()="Email"]/following-sibling::a/div');
    }

    get agent_first_name_contact(){
        return $('//div/input[@placeholder = "First Name"]');
    }

    get from_main_find_agent_or_office (){
        return $('//div[@data-cy = "link-find-agent"]');
    }

    get from_main_input_agent_first_name (){
        return $('//input[@placeholder = "First Name"]');
    }

    get from_main_input_agent_last_name (){
        return $('//input[@placeholder = "Last Name"]');
    }

    get from_main_agent_search_button ()
    {
      return  $('//div[@data-cy = "btn-agent-search"]');
    }

    get agent_link_from_search_result ()
    {
        return $('//div[contains(@class, "styles__AgentName")][1]');
    }
    //open (){
    //    super.open('https://exitrealty.com/agent/John/Adams/240654')
    //}
}

module.exports = new Agent_search ()