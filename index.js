const inquirer = require('inquirer');
const generateReadme = require('./generateReadme');
const fs = require('fs');
const util = require('util');

const generateReadme = require('.');

const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Provide license:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contributors to the project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide tests run:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Provide GitHub repo link:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide an email for follow-ups:',
  },
];

// Function to write README file
async function writeToFile(fileName, data) {
  try {
    await writeFileAsync(fileName, data);
    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('Error writing README file:', error);
  }
}

// Function to initialize app
async function init() {
  try {
    const userInput = await inquirer.prompt(questions);
    const readmeContent = await generateReadme(userInput);
    await writeToFile('README.md', readmeContent);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Function call to initialize app
init();