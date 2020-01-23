const {Builder, By, until,Key} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder('C:\\Webdriver\\bin\\chromedriver.exe').build());
let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });

var Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 30000, 'Looking for element');
        return await this.driver.findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 30000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    // wait and find a specific element with it's xpath
    this.findByXpath = async function(xpath){
        await this.driver.wait(until.elementLocated(By.xpath(xpath)),30000,'Looking for element');
        return await this.driver.findElement(By.xpath(xpath));
    }

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt , Key.ENTER);
    };

    // Click on the web Elements 
    this.click = async function (el){
        return await el.click();
    }

    // Key events 
    this.pressEnter = async function(el){
        return await el.sendKeys(keys.Enter);
    }
};

module.exports = Page;