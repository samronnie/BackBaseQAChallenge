"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const protractor_1 = require("protractor");
class homePage {
    constructor() {
        this.newpostLink = protractor_1.element(protractor_1.by.linkText('New Post'));
        this.homeLink = protractor_1.element(protractor_1.by.linkText('Home'));
        this.globalFeed = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"Global Feed")]'));
        this.getCreatedArticle = protractor_1.element.all(protractor_1.by.className('article-preview'));
    }
}
exports.homePage = homePage;
;
