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
const loginpage_1 = require("../pages/loginpage");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const homepage_1 = require("../pages/homepage");
const login = new loginpage_1.loginPage();
const homepage = new homepage_1.homePage();
const log = require('../config/logging').defaults;
cucumber_1.When('User clicks on sign in link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.signinLink.click();
    log.debug('Sign in link is clicked' + login.signinLink.click());
}));
cucumber_1.Then('User enters {string} and {string}', (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.emailInput.sendKeys(email);
    yield login.passwordInput.sendKeys(password);
    log.debug('email and password are entered successfully');
}));
cucumber_1.When('User signs in', () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.signinButton.click();
    log.debug('User signs in successfully');
}));
cucumber_1.Then('User should be logged in with {string}', (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield expect(protractor_1.by.linkText(username)).to.exist;
}));
