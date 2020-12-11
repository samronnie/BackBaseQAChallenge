import { Given, When, Then } from "cucumber";
import { by, browser, ExpectedConditions, element } from "protractor";
import { homePage } from "../pages/homepage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const home: homePage = new homePage();
import { articlePage } from "../pages/articlepage";
import { POINT_CONVERSION_HYBRID } from "constants";
const article: articlePage = new articlePage();
const log = require('../config/logging').defaults;

When('User clicks on New Post link', async () => {
    await home.newpostLink.click();
    log.debug('Click on New Post Link is successful!');
});


When('User clicks on Global feed', async () => {
    await home.globalFeed.click();
    log.debug( 'Click on Global feed is successful!');
});

 
When('User navigates to his profile {string}', async (username) => {
   
    await element(by.linkText(username)).click();
    log.debug( 'Navigation to user profile is successful!');
});

Then('User clicks on the first avaiable article', async() => {
    await home.getCreatedArticle.get(0).click();
    log.debug('First available article is clicked');
});