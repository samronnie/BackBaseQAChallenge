const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";
import { Before } from "cucumber";

declare let global: any;
BeforeAll({ timeout: 100 * 1000 }, async function () {
    {
        await browser.get(config.baseUrl);
    }
});


After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

After(async function (scenario) {
    if (scenario.result.status === Status.PASSED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll({},  async () => {
    await browser.quit();
});

export const tcname = global.tcname;