# BackBaseQAChallenge
Framework created using protractor, typescript and cucumber

# E2E Test Framework created using Protractor + Typescript + Cucumber + Proctractor cucumber report.

The tech stack used for this framework creation are:

1. Typescript and Javascript as the programming language for writing test code
2. npm for downloading and configuring the dependencies
4. VSCode as the preferred IDE for writing javascript code.

## Getting Started. Required softwares.

1. Install NodeJS
2. Install VSCode 
3. Install npm
4. Install VSCode
5. Install browser

## Cloning & Importing the Project
1. Clone the project using 'Get from version control' option in VSCode
2. Import the project in VSCode

## Run Project as TestNG and using Maven commands
1. To Run as tag, navigate to config.ts file and update the 'tags'under the 'cucumberOpts'.
2. Run the commands in the following order *npm install* *tsc* *webdriver-manager update* *webdriver-manager start* *npm test*

## Viewing the test report
1. After the execution, navigate to reports folider - > html -> open the html report in browser

![Screenshot 2020-11-02 at 11 39 03](https://user-images.githubusercontent.com/15077514/97860314-38803b00-1d02-11eb-8fb9-0abf0887182d.png)
a
## Framework on High level.
This framework is developed using Protractor  along with Typescript and using BDD approach(cucumber).

1. Implemented page object model
2. Separated Test Layer with page objects
3. Tests are written in Gherkin format using feature files
4. Console logs are viewed using log4j.
5. Result are viewed in Protractor cucumber report.
