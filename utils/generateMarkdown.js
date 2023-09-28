// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache License 2.0'){
    return '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)'
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
function renderLicenseLink(license) {
  if(license === 'Apache License 2.0'){
    return '![Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)'
  } else if(license === 'GNU AGPLv3'){
    return '![AGPL v3](https://choosealicense.com/licenses/agpl-3.0/)'
  } else if (license === 'GNU GPLv3'){
    return '![GPL v3](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (license === 'GNU LGPLv3'){
    return '![LGPL v3](https://choosealicense.com/licenses/lgpl-3.0/)'
  } else if (license === 'Mozilla Public License 2.0'){
    return '![MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)'
  } else if (license === 'MIT License'){
    return '![MIT](https://choosealicense.com/licenses/mit/)'
  } else if (license === 'ISC License (ISC)'){
    return '![ISC](https://choosealicense.com/licenses/isc/)'
  } else if (license === 'The Unlicense'){
    return '![Unlicense](https://choosealicense.com/licenses/unlicense/)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
