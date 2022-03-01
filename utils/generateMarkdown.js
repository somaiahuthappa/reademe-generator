// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseText => {
  return `[badge](https://img.shields.io/badge/license-${data.license}-success)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseText => {
  if (!licenseText) {
    return '';
  } else {
    return `This application is covered by the ${renderLicenseLink(licenseText)} license`;
  }
}

// TODO: Create a function to generate markdown for README
module.exports = () => {
  return `
  # ${data.title} <br/>

  -------------------

  ${renderLicenseBadge}

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
  ${renderLicenseSection(licenseText)}

  -------------------

  ## Contributors
  ${data.contributors} <br/>
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

  -------------------

  ## Tests
  ${data.tests}
  -------------------

  ## Questions
  - If you have any questions, find me on Github [${data.github}](https://github.com/${answers.username}) or email me at ${data.email}.

  -------------------

`;
}

