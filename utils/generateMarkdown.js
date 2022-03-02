// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (!license) {
    return '';
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-success)`;
  }

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return `No license has been selected.`;
  } else {
    return `This application is covered by the ${license} license`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title} <br/>

  -------------------

  ${renderLicenseBadge(data.license)}

  -------------------

  ## Description
  ${data.description}

  -------------------

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  -------------------

  ## Installation
  ${data.installation}

  -------------------

  ## Usage
  ${data.usage}

  -------------------

  ## License
  ${renderLicenseSection(data.license)}

  -------------------

  ## Contributors
  ${data.contributors} <br/>
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

  -------------------

  ## Tests
  ${data.tests}
  -------------------

  ## Questions
  - If you have any questions, find me on Github [${data.github}](https://github.com/${data.github}) or email me at ${data.email}.

  -------------------

`;
};

module.exports = data => {
  return generateMarkdown(data);
}
