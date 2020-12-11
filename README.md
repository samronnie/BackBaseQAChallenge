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
5. Install Git
6. Install typescript
5. Install browser

## Cloning & Importing the Project
1. Clone the project using 'Clone repository' option in VSCode
2. Import the project in VSCode

## Run Project as TestNG and using Maven commands
1. To Run as tag, navigate to config.ts file and update the 'tags'under the 'cucumberOpts'.
2. Run the commands in the following order in the vscode terminal

1. 'npm install -g typescript'
2. 'npm install -g webdriver-manager'
3. 'npm install' 
4. 'tsc' 
5. 'webdriver-manager clean'
6. 'webdriver-manager update'
7. 'webdriver-manager start --standalone' 
8. 'npm test'

Please refer to this link if there are issues while running tsc command in windows- 

https://www.roelpeters.be/solved-running-scripts-is-disabled-on-this-system-in-powershell/.

## Viewing the test report
1. After the execution, navigate to reports folider - > html -> open the html report in browser
![Screenshot 2020-12-11 at 19 11 34](https://user-images.githubusercontent.com/15077514/101940346-a4e63800-3be6-11eb-9213-5bb08e93ab27.png)
## Framework on High level.
This framework is developed using Protractor  along with Typescript and using BDD approach(cucumber).

1. Implemented page object model
2. Separated Test Layer with page objects
3. Tests are written in Gherkin format using feature files
4. Console logs are viewed using log4j.
5. Result are viewed in Protractor cucumber report.
