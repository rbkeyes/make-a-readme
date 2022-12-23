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
const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, github, email  }) =>
`#${title}

##Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)

## Description
${description}

##Installation
${installation}

##Usage
${usage}

##License
${license}

##Contributing
${contributing}

##Tests
${tests}

##Questions
Still have questions? Email the developer at ${email}.
[GitHub Profile](https://github.com/${github})
`

inquirer
.prompt(questions)

.then((data) => {
    const readmeContent = generateReadMe(data);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file!')
    );
  });

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

