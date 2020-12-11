import { Given, When, Then } from "cucumber";
import { by, browser, ExpectedConditions } from "protractor";
import { articlePage } from "../pages/articlepage";
import { homePage } from "../pages/homepage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const article: articlePage = new articlePage();
const home: homePage = new homePage();
var currentTimeInSeconds = Math.floor(Date.now() / 1000);
var updatedTitle;
import * as data from "../DataSet/CreateArticle.json";
const log = require('../config/logging').defaults;
var date;
var elementIndex = 0;
var updatedTimestamp;
var deletedArticle  ;
var assert = require('chai').assert;

When('User fills all the article creation details with title {string} description {string} content {string} and tags {string}',
    async (title, detail, content, tags) => {


        updatedTitle = title + currentTimeInSeconds;
        await article.articleTitleInput.sendKeys(updatedTitle);
        await article.articleAboutInput.sendKeys(data.ArticleDescription);
        await article.articleContentInput.sendKeys(data.ArticleContent);
        await article.articleTagInput.sendKeys(data.ArticleTags);

        log.debug('Article title : ' + updatedTitle);
        log.debug('Article about : ' + data.ArticleDescription);
        log.debug('Article content : ' + data.ArticleContent);
        log.debug('Article tags : ' + data.ArticleTags);
        log.debug('Article details are filled successful!');
    });

Then('User clicks button Publish Article', async () => {
    await article.publishArticleButton.click();
    log.debug('Article published successfully!');
});

Then('User validates the published article for user {string}', async (username) => {

    browser.wait(ExpectedConditions.visibilityOf(article.articleAuthor), 5000);
    await expect(browser.isElementPresent(article.articleAuthor)).to.eventually.equal(true);
    await expect(article.articleAuthor.getText()).to.eventually.equal(username);
    date = getDateInFormat();
    await expect(article.articleDate.getText()).to.eventually.equal(date);
    await expect(browser.isElementPresent(article.editArticleButton)).to.eventually.equal(true);
    await expect(browser.isElementPresent(article.deleteArticleButton)).to.eventually.equal(true);
    await expect(article.articleContent.getText()).to.eventually.equal(data.ArticleContent);
    await expect(browser.isElementPresent(article.buttonPostComment)).to.eventually.equal(true);
});


When('User clicks on Home link', async () => {
    await home.homeLink.click();
    log.debug('Home link is clicked');

});

Then('User should be able to see article created', { timeout: 2 * 5000 }, async () => {

    browser.wait(ExpectedConditions.visibilityOf(home.getCreatedArticle.get(0)), 5000);
    log.debug('Article title', updatedTitle);
    await home.getCreatedArticle.each(function (element, index) {
        element.getText().then(function (text) {
            if (text.includes(updatedTitle)) {
                elementIndex = index;
                log.debug('Created article index : ' + elementIndex);
            }
            log.debug(index + ' : ' + text);
        });
    }).catch(function () {
        console.log("Promise Rejected");
    });
    let values = await home.getCreatedArticle.get(elementIndex).getText();
    log.debug('before check' + values);

    await expect(values).to.contain(data.ArticleDescription);
    await expect(values).to.contain(date);
    await expect(values).to.contain(data.ArticleTags);

});

Then('User clicks on {string} article in article overview', { timeout: 2 * 5000 }, async (editORdelete) => {
    browser.wait(ExpectedConditions.visibilityOf(article.editArticleButton), 5000);
    if (editORdelete == 'edit'){
       
        await article.editArticleButton.click();
        log.debug('Edit Article button is clicked');
    }
    else{
        browser.wait(ExpectedConditions.visibilityOf(article.articleTitle), 5000);
        deletedArticle = await article.articleTitle.getText();
        await article.deleteArticleButton.click();
        log.debug('Delete Article button is clicked');
    }

});

Then('User updates Article Description', { timeout: 2 * 5000 }, async () => {

    browser.wait(ExpectedConditions.visibilityOf(article.articleContentInput), 5000);
    updatedTimestamp = currentTimeInSeconds;
    await article.articleContentInput.sendKeys(currentTimeInSeconds);
    log.debug('Article details updated successfully');
});


Then('User should see the article updated', { timeout: 2 * 5000 }, async () => {
    browser.wait(ExpectedConditions.visibilityOf(article.articleContent), 5000);
    await expect(article.articleContent.getText()).to.eventually.equal(data.ArticleContent + updatedTimestamp);
    log.debug('Actual : ' + article.articleContent.getText() + ' Expected : ' + data.ArticleContent + updatedTimestamp);
});

function getDateInFormat() {
    var today = new Date();
    var month = today.toLocaleString('default', { month: 'long' });
    var day = today.getDate();
    var year = today.getFullYear();

    return month + ' ' + day + ', ' + year;
}


Then('User should not be able to see article deleted', { timeout: 2 * 5000 }, async () => {

    var articleCount = 0; 
    browser.wait(ExpectedConditions.visibilityOf(home.getCreatedArticle.get(0)), 5000);
    log.debug('Article title', deletedArticle);
    await home.getCreatedArticle.each(function (element, index) {
        element.getText().then(function (text) {
            if (text.includes(deletedArticle)) {
                elementIndex = index;
                articleCount = articleCount + 1;
                log.debug('Created article index : ' + elementIndex);
            }
            log.debug(index + ' : ' + text);
        });
    }).catch(function () {
        console.log("Promise Rejected");
    });
    
    if(articleCount > 0){
        assert.fail('Article : ' + deletedArticle + ' is not deleted');
    }

});