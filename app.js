// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'githubUser',
    message: 'Enter your GitHub Username: (Required)',
    validate: githubUserInput => {
        if (githubUserInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the project? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter project name to continue!');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of this project? (Required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('You need to provide a project usage!');
            return false;
        }
    }
},
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project: (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please enter a project description to continue!');
            return false;
        }
    }
},
{
  type: 'input',
  name: 'install',
  message: 'How do you install this project? (Required)',
  validate: installInput => {
      if (installInput) {
          return true;
      } else {
          console.log('You need to provide an installation guide!');
          return false;
      }
  }
},

{
  type: 'input',
  name: 'test',
  message: 'How do you test this project? (Required)',
  validate: testInput => {
      if (testInput) {
          return true;
      } else {
          console.log('You need to provide a test guide!');
          return false;
      }
  }
},
{
  type: 'checkbox',
  name: 'license',
  message: 'Choose a license for your project (Required)',
  choices: ['ISC', 'MIT', 'Mozilla', 'None'],
  validate: licenseInput => {
      if (licenseInput) {
          return true;
      } else {
          console.log('You must pick a license for the project!');
          return false;
      }
  }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
        {throw err;}
    console.log('README file sucessfully written!')
});
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (Input) {
      console.log(Input)
      writeToFile("README.md", generateMarkdown(Input));
  });
}

// Function call to initialize app
init();