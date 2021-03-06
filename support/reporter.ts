import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";
var date = new Date();
var dateString = date.getUTCFullYear()+"_"+(date.getUTCMonth()+1)+ "_" + date.getUTCDate()+"_"+ date.getUTCHours() + "_"+date.getUTCMinutes()+"_"+date.getUTCSeconds();
const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter"+dateString+".html",
    reportSuiteAsScenarios: true,
    launchReport:false,
    theme: "bootstrap",
};

export class Reporter {

    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
