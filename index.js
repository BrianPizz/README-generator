// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        name: 'reason',
        message: 'Why did you build this project?',
    },
    {
        name: 'problem',
        message: 'What problem does it solve?',
    },
    {
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        name: 'install',
        message: 'What are the steps required to install your project?',
    },
    {
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        name: 'confirmCredits',
        type: 'confirm',
        message: 'Did you have any collaborators?',
    },
    {
        name: 'credits',
        message: 'Please list your collaborators?',
        when: (answers) => answers.confirmCredits === true,
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license.',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','ISC License (ISC)','The Unlicense', 'none']
    },
    {
        name: 'confirmContribute',
        type: 'confirm',
        message: 'Would you like to allow others to contribute?',
    },
    {
        name: 'test',
        message: 'Provide instructions on how to test your application.',
    },
    {
        name: 'github',
        message: 'Provide your GitHub username.',
    },
    {
        name: 'email',
        message: 'Provide your email.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Success!') )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => writeToFile('TEST.md', generateMarkdown(answers)))
        
}

// Function call to initialize app
init();
