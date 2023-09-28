// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        name: 'motivation',
        message: 'What was your motivation?',
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
        name: 'credits',
        message: 'List your collaborators, if any.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license.',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
