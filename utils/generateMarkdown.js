// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  var badge = "";

  if(license ='ISC') {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  else if(license = 'MIT') {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if(license = 'Mozilla') {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0";
  }
  else {
    badge = "";
  }

  return badge;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
## Licensing:
${renderLicense(data.license)}
## Title:
${data.name}
## Usage:
${data.usage}
## Description:
${data.description}
## Installation:
${data.install}
## Testing:
${data.test}
## Additional Info:
- Github: [${data.githubUser}](https://github.com/${data.githubUser})`
};

module.exports = generateMarkdown;