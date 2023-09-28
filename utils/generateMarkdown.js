// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)'
  } else if (license === 'GNU AGPLv3') {
    return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
  } else if (license === 'GNU GPLv3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'GNU LGPLv3') {
    return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-orange.svg)'
  } else if (license === 'MIT License') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'ISC License (ISC)') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-brightgreen.svg)'
  } else if (license === 'The Unlicense') {
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-red.svg)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)'
  } else if (license === 'GNU AGPLv3') {
    return '[AGPL v3](https://choosealicense.com/licenses/agpl-3.0/)'
  } else if (license === 'GNU GPLv3') {
    return '[GPL v3](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (license === 'GNU LGPLv3') {
    return '[LGPL v3](https://choosealicense.com/licenses/lgpl-3.0/)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)'
  } else if (license === 'MIT License') {
    return '[MIT](https://choosealicense.com/licenses/mit/)'
  } else if (license === 'ISC License (ISC)') {
    return '[ISC](https://choosealicense.com/licenses/isc/)'
  } else if (license === 'The Unlicense') {
    return '[Unlicense](https://choosealicense.com/licenses/unlicense/)'
  } else {
    return ''
  }
}

function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  } else {
    return `
## License
This application is covered under:
${renderLicenseLink(license)}
  `
  }
}

function renderCredits(confirmCredit, credits) {
  if (confirmCredit) {
    return `
## Credits
${credits}
    `
  } else {
    return ''
  }
}

function renderContribution(confirmContribute) {
  if (confirmContribute) {
    return `
## How to contribute
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
    `
  } else {
    return ''
  }
}

function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  * ${data.reason}
  * ${data.problem}
  * ${data.learn}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

${renderCredits(data.confirmCredits, data.credits)}

${renderLicenseSection(data.license)}

${renderContribution(data.confirmContribute)}

  ## Tests
  ${data.test}

  ## Questions
  [GitHub](https://github.com/${data.github})
  [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
