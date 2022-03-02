// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// object array containing the prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your app?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('You need to enter a project title!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description for your app.',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please include installation instructions.',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('You need to include installation requirements and/or instructions!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please mention what your app will be used for.',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('You need to mention what the project will be used for!');
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to include a license?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license applicable.',
            choices: ["Apache", "GNU", "ISC", "MIT", "MPL", "GPL"],
            when: ({ confirmLicense }) => confirmLicense,
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please include the names of all the contributors to this app.',
            validate: contributorsInput => {
                if (contributorsInput) {
                  return true;
                } else {
                  console.log('You need to include the contributors!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please include any tests.',
            validate: testsInput => {
                if (testsInput) {
                  return true;
                } else {
                  console.log('You need to enter a test! If no tests then please enter"None".');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please insert your GitHub username',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('You need to enter a GitHub username!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('You need to enter an email!');
                  return false;
                }
              }
        }
    ]);
};

// calling the function to write the file
promptUser()
    .then(readmeData => {
        const pageReadme = generateMarkdown(readmeData);
        fs.writeFile('./dir/readme.md', pageReadme, err => {
            if (err) throw new Error(err);

            console.log('Page created! Checkout readme.md in the dir folder.')
        });
    })



