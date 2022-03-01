// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your app?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description for your app.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please include installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please mention what your app will be used for.'
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
            message: 'Please include the names of all the contributors to this app.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please include any tests.'
        },
        {
            type:'confirm',
            name: 'questions',
            message: 'Would you like to include your contact information for users if they have questions about your app?',
            default: true
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please insert your GitHub username',
            when: ({confirmLicense}) => confirmLicense
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
            when: ({confirmLicense}) => confirmLicense
        }
    ]);
};

promptUser()
    .then(data => {
        console.log(data);
    })



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


