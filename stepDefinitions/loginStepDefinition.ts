import { Given, When, Then } from "cucumber";
import { by,browser, ExpectedConditions } from "protractor";
import { loginPage } from "../pages/loginpage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
import { homePage } from "../pages/homepage";
const login : loginPage = new loginPage();
const homepage : homePage = new homePage();
const log = require('../config/logging').defaults;

When('User clicks on sign in link', async () => {
    await login.signinLink.click();
    log.debug('Sign in link is clicked' + login.signinLink.click());

});

Then('User enters {string} and {string}', async (email, password) => {
    await login.emailInput.sendKeys(email);
    await login.passwordInput.sendKeys(password);
    log.debug('email and password are entered successfully');
});

When('User signs in', async () => {
    await login.signinButton.click();
    log.debug('User signs in successfully');
});

Then('User should be logged in with {string}' ,async (username) =>{
    return await expect(by.linkText(username)).to.exist; 
});