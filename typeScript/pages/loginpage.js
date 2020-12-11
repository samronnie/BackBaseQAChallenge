"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
const protractor_1 = require("protractor");
class loginPage {
    constructor() {
        this.signinLink = protractor_1.element(protractor_1.by.linkText('Sign in'));
        this.emailInput = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Username"]'));
        this.passwordInput = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Password"]'));
        this.signinButton = protractor_1.element(protractor_1.by.buttonText('Sign in'));
    }
}
exports.loginPage = loginPage;
;
