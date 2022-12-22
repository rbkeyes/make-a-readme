// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
    }, 
    // {
    //     type: 'input',
    //     message: "Enter a description of your project.",
    //     name: 'Description',
    // }, {
    //     type: 'input',
    //     message: "What are the steps required to install?",
    //     name: 'Installation',
    // }, {
    //     type: 'input',
    //     message: "What are the instructions for use?",
    //     name: 'usage',
    // }, {
    //     type: 'list',
    //     message: "Please choose a license for your project.",
    //     choices: ["MIT", "Apache License 2.0", "GNU GPLv3", "ISC"],
    //     name: 'license',
    // }, {
    //     type: 'input',
    //     message: "Include contributions guidelines here.",
    //     name: 'contributing',
    // }, {
    //     type: 'input',
    //     message: "Write tests for your application. Include examples for how to run tests.",
    //     name: 'tests'
    // }, {
    //         type: 'input',
    //         message: "What is your github username?",
    //         name: 'gitHub'
    //     }, {
    //         type: 'input',
    //         message: "What is your email address?",
    //         name: 'email'
    //     }
];

inquirer.prompt(questions)
.then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(README.md, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

