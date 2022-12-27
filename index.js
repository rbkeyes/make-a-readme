// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// questions for inquirer prompts to gather user input.
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
        choices: ["MIT", "Apache", "GPL", "ISC", 'None'],
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

// write readme file
function writeToFile(data) {

    fs.writeFile('sampleREADME.md', data, function (err) {
        err ? console.log(err) : console.log("file created!")
    });
}

// initialize function
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            const fileContent = generateMarkdown(answers);
            writeToFile(fileContent);
        })
}

// Function call to initialize app
init();

