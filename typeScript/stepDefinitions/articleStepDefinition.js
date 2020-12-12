"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const articlepage_1 = require("../pages/articlepage");
const homepage_1 = require("../pages/homepage");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const article = new articlepage_1.articlePage();
const home = new homepage_1.homePage();
var currentTimeInSeconds = Math.floor(Date.now() / 1000);
var updatedTitle;
const data = require("../DataSet/CreateArticle.json");
const log = require('../config/logging').defaults;
var date;
var elementIndex = 0;
var updatedTimestamp;
var deletedArticle;
var assert = require('chai').assert;
cucumber_1.When('User fills all the article creation details with title {string}', (title) => __awaiter(void 0, void 0, void 0, function* () {
    updatedTitle = title + currentTimeInSeconds;
    yield article.articleTitleInput.sendKeys(updatedTitle);
    yield article.articleAboutInput.sendKeys(data.ArticleDescription);
    yield article.articleContentInput.sendKeys(data.ArticleContent);
    yield article.articleTagInput.sendKeys(data.ArticleTags);
    log.debug('Article title : ' + updatedTitle);
    log.debug('Article about : ' + data.ArticleDescription);
    log.debug('Article content : ' + data.ArticleContent);
    log.debug('Article tags : ' + data.ArticleTags);
    log.debug('Article details are filled successful!');
}));
cucumber_1.Then('User clicks button Publish Article', () => __awaiter(void 0, void 0, void 0, function* () {
    yield article.publishArticleButton.click();
    log.debug('Article published successfully!');
}));
cucumber_1.Then('User validates the published article for user {string}', (username) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(article.articleAuthor), 5000);
    yield expect(protractor_1.browser.isElementPresent(article.articleAuthor)).to.eventually.equal(true);
    yield expect(article.articleAuthor.getText()).to.eventually.equal(username);
    date = getDateInFormat();
    yield expect(article.articleDate.getText()).to.eventually.equal(date);
    yield expect(protractor_1.browser.isElementPresent(article.editArticleButton)).to.eventually.equal(true);
    yield expect(protractor_1.browser.isElementPresent(article.deleteArticleButton)).to.eventually.equal(true);
    yield expect(article.articleContent.getText()).to.eventually.equal(data.ArticleContent);
    yield expect(protractor_1.browser.isElementPresent(article.buttonPostComment)).to.eventually.equal(true);
}));
cucumber_1.When('User clicks on Home link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.homeLink.click();
    log.debug('Home link is clicked');
}));
cucumber_1.Then('User should be able to see article created', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(home.getCreatedArticle.get(0)), 5000);
    log.debug('Article title', updatedTitle);
    yield home.getCreatedArticle.each(function (element, index) {
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
    let values = yield home.getCreatedArticle.get(elementIndex).getText();
    log.debug('before check' + values);
    yield expect(values).to.contain(data.ArticleDescription);
    yield expect(values).to.contain(date);
    yield expect(values).to.contain(data.ArticleTags);
}));
cucumber_1.Then('User clicks on {string} article in article overview', { timeout: 2 * 5000 }, (editORdelete) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(article.editArticleButton), 5000);
    if (editORdelete == 'edit') {
        yield article.editArticleButton.click();
        log.debug('Edit Article button is clicked');
    }
    else {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(article.articleTitle), 5000);
        deletedArticle = yield article.articleTitle.getText();
        yield article.deleteArticleButton.click();
        log.debug('Delete Article button is clicked');
    }
}));
cucumber_1.Then('User updates Article Description', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(article.articleContentInput), 5000);
    updatedTimestamp = currentTimeInSeconds;
    yield article.articleContentInput.sendKeys(currentTimeInSeconds);
    log.debug('Article details updated successfully');
}));
cucumber_1.Then('User should see the article updated', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(article.articleContent), 5000);
    yield expect(article.articleContent.getText()).to.eventually.equal(data.ArticleContent + updatedTimestamp);
    log.debug('Actual : ' + article.articleContent.getText() + ' Expected : ' + data.ArticleContent + updatedTimestamp);
}));
function getDateInFormat() {
    var today = new Date();
    var month = today.toLocaleString('default', { month: 'long' });
    var day = today.getDate();
    var year = today.getFullYear();
    return month + ' ' + day + ', ' + year;
}
cucumber_1.Then('User should not be able to see article deleted', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    var articleCount = 0;
    protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(home.getCreatedArticle.get(0)), 5000);
    log.debug('Article title', deletedArticle);
    yield home.getCreatedArticle.each(function (element, index) {
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
    if (articleCount > 0) {
        assert.fail('Article : ' + deletedArticle + ' is not deleted');
    }
}));
