
module.exports = class Page {
    open(path='https://exitrealty.com/agent/John/Adams/240654'){ //metoda open 
        browser.url(path);
    }
    open_exit(path='https://exitrealty.com'){ //metoda open 
    browser.url(path);
}
}
