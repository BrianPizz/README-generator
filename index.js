// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const userPrompts = require('./utils/userPrompts.js')
// Array of questions for user input
// Prompts are stored in file userPrompts.js and are copied using the spread operator
const questions = [...userPrompts];
// Function to write README file from exported markdown
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}
// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        // README is generated in 'dist' folder
        .then(answers => writeToFile('./dist/README.md', generateMarkdown(answers)))
}
// Function call to initialize app
init();