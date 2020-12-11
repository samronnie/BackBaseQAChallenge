"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlePage = void 0;
const protractor_1 = require("protractor");
class articlePage {
    constructor() {
        this.articleTitleInput = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Article Title"]'));
        this.articleAboutInput = protractor_1.element(protractor_1.by.xpath('//input[contains(@placeholder,"What")]'));
        this.articleContentInput = protractor_1.element(protractor_1.by.xpath('//textarea[contains(@placeholder,"Write")]'));
        this.articleTagInput = protractor_1.element(protractor_1.by.xpath('//input[contains(@placeholder,"Enter")]'));
        this.publishArticleButton = protractor_1.element(protractor_1.by.buttonText('Publish Article'));
        this.articleAuthor = protractor_1.element(protractor_1.by.className('author'));
        this.articleDate = protractor_1.element(protractor_1.by.className('date'));
        this.editArticleButton = protractor_1.element(protractor_1.by.className('ion-edit'));
        this.deleteArticleButton = protractor_1.element(protractor_1.by.className('ion-trash-a'));
        this.articleContent = protractor_1.element(protractor_1.by.css('div.article-page div.container.page div.row.article-content:nth-child(1) div.col-md-12 div:nth-child(1) > p:nth-child(1)'));
        this.buttonPostComment = protractor_1.element(protractor_1.by.buttonText('Post Comment'));
        this.articleTitle = protractor_1.element(protractor_1.by.css('app-article:nth-child(3) div.article-page div.banner div.container > h1:nth-child(1)'));
    }
}
exports.articlePage = articlePage;
;
