// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](insert badge link)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `This application is covered by the ${renderLicenseLink(license)} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge}

  ## Description

  ## Table of Contents
  - [Installation]
  - [Usage]
  - [License]
  - [Contributing]
  - [Tests]
  - [Questions]

  -------------------

  ## Installation

  -------------------

  ## Usage

  -------------------

  ## License
  ${renderLicenseSection(license)}

  -------------------

  ## Contributors

  -------------------

  ## Tests

  -------------------

  ## Questions
  - If you have any questions, find me on Github ${"insert github username and link"} or email me at ${"insert email"}

  -------------------

`;
}

module.exports = generateMarkdown;
