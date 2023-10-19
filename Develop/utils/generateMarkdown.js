// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let lowerLic = license.toLowerCase();

  switch (lowerLic) {
    case 'apache':
      console.log('added Apache license.');
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'boost':
      console.log('added Boost license.');
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'eclipse':
      console.log('added Eclipse license.');
      return`[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'ibm':
      console.log('added IBM license.');
      return`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;
    case 'isc':
      console.log('added ISC license.');
      return`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case 'mit':
      console.log('added MIT license.');
      return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    default:
      console.log('No license added');
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lowerLic = license.toLowerCase();

  switch (lowerLic) {
    case 'apache':
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'boost':
      return `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case 'eclipse':
      return`https://opensource.org/licenses/EPL-1.0`;
      break;
    case 'ibm':
      return`https://opensource.org/licenses/IPL-1.0`;
      break;
    case 'isc':
      return`https://opensource.org/licenses/ISC`;
      break;
    case 'mit':
      return`https://opensource.org/licenses/MIT`;
      break;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = (renderLicenseBadge(license));
  const link = (renderLicenseLink(license));

  if (badge === '') {
    return (`## license \n \n N/A`);
  } else {
    return (`## license \n \n  ${badge} \n \n ${link}`);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.purpose}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
  #### [Installation](#installation)
  #### [Usage](#usage)
  #### [License](#license)
  #### [Credits](#credits)
  #### [Tests](#tests)
  #### [Questions](#questions)

  <a id='installation'></a>
  ## Installation

  [Install Location](${data.install})

  [Deployed Webpage](${data.deployed})

  <a id='usage'></a>
  ## Usage

  ${data.usage}

  <a id='credits'></a>
  ## Credits

  ${data.credits}

  <a id='license'></a>
  ${renderLicenseSection(data.license)}

  <a id='tests'></a>
  ## Tests

  ${data.tests}

  <a id='questions'></a>
  ## Questions?

  [GitHub](${data.github})

  [Email](${data.email})
`;
}

module.exports = generateMarkdown;

renderLicenseSection('mit')