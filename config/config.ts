import { Config, Capabilities } from "protractor";
import { Reporter } from "../support/reporter";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://candidatex:qa-is-cool@qa-task.backbasecloud.com/",


    capabilities: {
        browserName: "chrome",
        'chromeOptions': {
            'args': ['no-sandbox'],
        }
    },
    directConnect: false,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],
    cucumberOpts: {
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@article"


    },
    onComplete: () => {
        Reporter.createHTMLReport();
    }
};