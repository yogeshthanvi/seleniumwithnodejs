let Page = require('./basePage');
const locator = require('../utils/locator');
const fake = require('../utils/fakeData');

const emailInputSelectorName = locator.emailInputSelectorName;
const passwordInputSelectorName = locator.passwordInputSelectorName;
const loginButtonSelectorXpath = locator.loginButtonSelectorXpath;
const errorMessage = locator.resultXpath;

const fakeEmailKeyword = fake.emailKeyword;
const fakePasswordKeyword = fake.passwordKeyword;

let emailInput, passwordInput, loginButton, resultStat;

Page.prototype.findInputAndButton = async function () {

    emailInput = await this.findByName(emailInputSelectorName);
    passwordInput = await this.findByName(passwordInputSelectorName);
    loginButton = await this.findByXpath(loginButtonSelectorXpath); 

    const result = await this.driver.wait(async function () { 
        const emailInputEnableFlag = emailInput.isDisplayed();
        const passwordInputEnableFlag = passwordInput.isDisplayed();
        const loginButtonText = loginButton.getText();
        return {
            emailEnabled: emailInputEnableFlag,
            passwordEnabled: passwordInputEnableFlag,
            loginButtonText: loginButtonText
        }
    }, 5000);
    return result;
};

Page.prototype.loginTaskWorld = async function() {
    emailInput = await this.findByName(emailInputSelectorName);
    await this.write(emailInput, fakeEmailKeyword);
    passwordInput = await this.findByName(passwordInputSelectorName);
    await this.write(passwordInput, fakePasswordKeyword);
    loginButton = await this.findByXpath(loginButtonSelectorXpath); 
    await this.click(loginButton);
    resultStat = await this.findByXpath(errorMessage);
    return await this.driver.wait(async function () {
        return await resultStat.getText();
    }, 5000);
};

module.exports = Page;