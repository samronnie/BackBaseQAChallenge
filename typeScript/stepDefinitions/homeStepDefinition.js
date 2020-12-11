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
const homepage_1 = require("../pages/homepage");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const home = new homepage_1.homePage();
const articlepage_1 = require("../pages/articlepage");
const article = new articlepage_1.articlePage();
const log = require('../config/logging').defaults;
cucumber_1.When('User clicks on New Post link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.newpostLink.click();
    log.debug('Click on New Post Link is successful!');
}));
cucumber_1.When('User clicks on Global feed', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.globalFeed.click();
    log.debug('Click on Global feed is successful!');
}));
cucumber_1.When('User navigates to his profile {string}', (username) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.linkText(username)).click();
    log.debug('Navigation to user profile is successful!');
}));
cucumber_1.Then('User clicks on the first avaiable article', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.getCreatedArticle.get(0).click();
    log.debug('First available article is clicked');
}));
