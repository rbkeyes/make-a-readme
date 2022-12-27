// generate license badge
function renderLicenseBadge(license) {
  if (license !== "None") {
    badge = `https://img.shields.io/badge/license-${license}-blue`
  } else {
    badge = ''
  }
  return badge;
}

// generate license link
function renderLicenseLink(license) {
  if (license !== "None") {
    if (license === "GPL") {
      link = `https://choosealicense.com/licenses/${license.toLowerCase()}-3.0/`
    } else {
      link = `https://choosealicense.com/licenses/${license.toLowerCase()}/`
    }
  } else {
    link = '';
  }
  return link;
};

// generate license section text with license link included..
function renderLicenseSection(license) { 
  if (license !== "None") {
    
    licenseSection = `This repository is licensed under the [${license} license](${renderLicenseLink(license)}).`
  } else {
    licenseSection = '';
  }
  return licenseSection;
}

// generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributing, tests, github, email}) {
  return `# ${title}
  
  ![License Badge](${renderLicenseBadge(license)})

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
  ${renderLicenseSection(license)}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions
  Still have questions? Email me at ${email}.
  Check me out on [GitHub](https://github.com/${github})
  `;
};

module.exports = generateMarkdown;
