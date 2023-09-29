// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const questions = require('./utils/questions.js')
// Function to write README file from exported markdown
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}
// Function to initialize app
function init() {
    inquirer
        // Questions are stored in file and are copied using the spread operator
        .prompt([...questions])
        // README is generated in 'dist' folder
        .then(answers => writeToFile('./dist/README.md', generateMarkdown(answers)))
}
// Function call to initialize app
init();