import { $, by, element, ElementFinder,ElementArrayFinder } from 'protractor';

export class homePage {
    public newpostLink: ElementFinder;
    public homeLink: ElementFinder;
    public globalFeed: ElementFinder;
    public getCreatedArticle: ElementArrayFinder;
    constructor() {
        this.newpostLink = element(by.linkText('New Post'));
        this.homeLink = element(by.linkText('Home'));
        this.globalFeed = element(by.xpath('//a[contains(text(),"Global Feed")]'));
        this.getCreatedArticle = element.all(by.className('article-preview'));
    }
};
