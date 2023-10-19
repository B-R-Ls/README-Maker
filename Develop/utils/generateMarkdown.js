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
  switch (license) {
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
    return (`## license \n \n `, badge, `\n \n`, link);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;