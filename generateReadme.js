// generateReadme.js

const util = require('util');
const fs = require('fs');

const writeFileAsync = util.promisify(fs.writeFile);

const generateReadme = async (userInput) => {
  try {
    // Generate README content based on user input
    const readmeContent = `
      # ${userInput.projectTitle}

      ## Description
      ${userInput.description}

      ## Table of Contents
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)

      ## Installation
      ${userInput.installation}

      ## Usage
      ${userInput.usage}

      ## License
      ![License Badge](https://img.shields.io/badge/License-${userInput.license}-brightgreen)
      This application is covered under the ${userInput.license} license.

      ## Contributing
      ${userInput.contributing}

      ## Tests
      ${userInput.tests}

      ## Questions
      GitHub: [${userInput.githubUsername}](https://github.com/${userInput.githubUsername})
      For additional questions, contact me at: ${userInput.email}
    `;

    // Write content to README.md file
    await writeFileAsync('README.md', readmeContent);

    return readmeContent; // Return the content if needed for further processing
  } catch (error) {
    throw new Error(`Error generating README: ${error.message}`);
  }
};

module.exports = generateReadme;