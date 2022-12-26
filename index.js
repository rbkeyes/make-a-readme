// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Enter a description of your project.",
        name: 'description',
    }, {
        type: 'input',
        message: "What are the steps required to install?",
        name: 'installation',
    }, {
        type: 'input',
        message: "What are the instructions for use?",
        name: 'usage',
    }, {
        type: 'list',
        message: "Please choose a license for your project.",
        choices: ["MIT", "Apache License 2.0", "GNU GPLv3", "ISC"],
        name: 'license',
    }, {
        type: 'input',
        message: "Include contributions guidelines here.",
        name: 'contributing',
    }, {
        type: 'input',
        message: "Write tests for your application. Include examples for how to run tests.",
        name: 'tests'
    }, {
        type: 'input',
        message: "What is your github username?",
        name: 'github'
    }, {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, (err) =>
                err ? console.log(err) : console.log(`Successfully created ${fileName} file!`)
            )
        };

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then (answers => writeToFile('README.md', generateMarkdown(answers)));
    };

// Function call to initialize app
init();

