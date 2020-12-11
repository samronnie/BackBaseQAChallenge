import { $, by, element, ElementArrayFinder, ElementFinder } from 'protractor';
import { textSpanIntersectsWith } from 'typescript';

export class articlePage {
    public articleTitleInput: ElementFinder;
    public articleAboutInput: ElementFinder;
    public articleContentInput: ElementFinder;
    public articleTagInput: ElementFinder;
    public publishArticleButton: ElementFinder;
    public articleAuthor: ElementFinder;
    public articleDate: ElementFinder;
    public editArticleButton: ElementFinder;
    public deleteArticleButton: ElementFinder;
    public articleContent : ElementFinder;
    public buttonPostComment : ElementFinder;
    public articleTitle: ElementFinder;


    constructor() {
        this.articleTitleInput = element(by.xpath('//input[@placeholder="Article Title"]'));
        this.articleAboutInput = element(by.xpath('//input[contains(@placeholder,"What")]'));
        this.articleContentInput = element(by.xpath('//textarea[contains(@placeholder,"Write")]'));
        this.articleTagInput = element(by.xpath('//input[contains(@placeholder,"Enter")]'));
        this.publishArticleButton = element(by.buttonText('Publish Article'));
        this.articleAuthor = element(by.className('author'));
        this.articleDate = element(by.className('date'));
        this.editArticleButton = element(by.className('ion-edit'));
        this.deleteArticleButton = element(by.className('ion-trash-a'));
        this.articleContent = element(by.css('div.article-page div.container.page div.row.article-content:nth-child(1) div.col-md-12 div:nth-child(1) > p:nth-child(1)'));
        this.buttonPostComment = element(by.buttonText('Post Comment'));
        this.articleTitle = element(by.css('app-article:nth-child(3) div.article-page div.banner div.container > h1:nth-child(1)'));
    }
};