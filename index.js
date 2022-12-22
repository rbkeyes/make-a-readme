// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'Title',
    }, {
        type: 'input',
        message: "Enter a description of your project.",
        name: 'Description',
    }, {
        type: 'input',
        message: "What are the steps required to install?",
        name: 'Installation',
    }, {
        type: 'input',
        message: "What are the instructions for use?",
        name: 'Usage',
    }, {
        type: 'checkbox',
        message: "Please choose a license for your project.",
        choices: ["MIT", "Apache License 2.0", "GNU GPLv3", "ISC"],
        name: 'License',
    }, {
        type: 'input',
        message: "Include contributions guidelines here.",
        name: 'Contributing',
    }, {
        type: 'input',
        message: "Write tests for your application. Include examples for how to run tests.",
        name: 'Tests'
    }, {
            type: 'input',
            message: "What is your github username?",
            name: 'GitHub'
        }, {
            type: 'input',
            message: "What is your email address?",
            name: 'Email'
        }
];

inquirer.prompt(questions)
  .then ((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join}`
  })
  .then((response) => {
  console.log(response);
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

