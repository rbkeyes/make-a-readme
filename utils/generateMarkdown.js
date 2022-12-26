let badge = '';
let link = '';
let licenseSection = '';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    badge = `https://img.shields.io/badge/license-${license}-blueviolet`
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    link = `https://choosealicense.com/licenses/${license}/`
  } else {
    link = '';
  }
  return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== "None") {
    licenseSection = `This repository is licensed under a(n) ${license} license./n 
    Click [here](${renderLicenseLink()}) for more information.`
  } else {
    licenseSection = '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, installation, usage, license, contributing, tests, github, email) {
  return `# ${title}

  ![license badge](${renderLicenseBadge()})
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  ${renderLicenseSection()}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions
  Still have questions? Email me at ${email}./n
  Check me out on [GitHub](https://github.com/${github})
  `;
};

module.exports = generateMarkdown;
