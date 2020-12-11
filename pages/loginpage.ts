import { $, by, element, ElementFinder } from 'protractor';

export class loginPage {
    public signinLink: ElementFinder;
    public emailInput: ElementFinder;
    public passwordInput: ElementFinder;
    public signinButton: ElementFinder;
    public usernameLink: ElementFinder;

    constructor() {
        this.signinLink = element(by.linkText('Sign in'));
        this.emailInput = element(by.xpath('//input[@placeholder="Username"]'));
        this.passwordInput = element(by.xpath('//input[@placeholder="Password"]'));
        this.signinButton = element(by.buttonText('Sign in'));
    }
};