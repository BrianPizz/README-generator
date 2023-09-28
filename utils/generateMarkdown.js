// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache License 2.0'){
    return '![License](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)'
  } else if(license === 'GNU AGPLv3'){
    return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
  } else if (license === 'GNU GPLv3'){
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'GNU LGPLv3'){
    return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)'
  } else if (license === 'Mozilla Public License 2.0'){
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  } else if (license === 'MIT License'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'ISC License (ISC)'){
    return '![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)'
  } else if (license === 'The Unlicense'){
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-red.svg)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
