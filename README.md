# Make A README
  
  ![License Badge](https://img.shields.io/badge/license-MIT-blue)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  This program uses Node.js and the inquirer v. 8.2.4 npm to generate a quality README.md file using input gathered from a series of prompts. I created this program to provide a basice framework for developers to create a README.md file for their projects with all of the necessary topics they might want to include. 
  
  ## Installation
  First, make sure you have Node.js installed on your computer. If you do not, you can download the [latest version](https://nodejs.org/en/).

  Next, you will need to create a fork from the [make-a-readme repository](https://github.com/rbkeyes/make-a-readme), then clone the repository to your local system. If you need help please follow the instructions outlined in [Github Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

  Once you have cloned succesfully, install inquirer v.8.2.4 by running "npm install inquirer@8.2.4" in your terminal. For more information, check out the [inquirer.js docs](https://www.npmjs.com/package/inquirer/v/8.2.4).
  
  ## Usage
  Once everything is installed, run "node index.js" in your terminal. You will be prompted with a series of questions that will gather the necessary data to generate your README.md file. Upon completion, the message "README.md file created!" will display in the terminal and a README.md file will be created and added to your local repository. If, for some reason, it was unsuccesful, an error message will display instead.

  If additional topics are desired they can either be added to the code in index.js (questions variable) and generateMarkdown.js (generateMarkdown function), or added directly to the markdown file once it has been generated.

  For more information on how to use this program, please see the [video demo](https://drive.google.com/file/d/1ylJ-9rcTS9obOuD7AjLslkE6YWDJYGHf/view). Note: for demonstration purposes, the file created in the demo is titled sampleREADME.md. The final version generates a file with the title README.md. 

  ![Demo README.md file generated using make-a-readme](./assets/images/sampleREADME.png)
  
  ## License
  This repository is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).
  
  ## Contributing
  To suggest an idea or report a bug, please create an issue. Or, submit a pull request from your fork to the original repository for review.
  
  ## Tests
  n/a
  
  ## Questions
  Still have questions? Email me at [rbkeyes@gmail.com](mailto:rbkeyes@gmail.com).
  Check me out on [GitHub](https://github.com/rbkeyes)

  ## References
  Starter code from Coding Boot Camp gitlab. 

  Coursework from Coding Boot Camp module 9 referenced for additional guidance.

  [w3schools](https://www.w3schools.io/file/markdown-links/) markdown link tutorial.

  [inquirer v.8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) installed to run prompts.


  