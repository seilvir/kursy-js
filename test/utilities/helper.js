class Helper {
waitAndClick = (element,timeout) => {
    element.waitForDisplayed({timeout}); 
    element.click();
}
}
module.exports = new Helper