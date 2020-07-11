generateMarkDown = data => {

  return `
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen)

  # ${data.title}

  ## ➤ Description
  ${data.description}

  ## ➤ Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ---

  ## ➤ Installation
  ${data.installation}

  ## ➤ Usage
  ${data.usage}

  ## ➤ License
  This app is covered under the following license/s:\n
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen)

  ## ➤ Contributing
  ${data.contributing}

  ## ➤ Tests
  ${data.tests}

  ## ➤ Questions
  Please direct all questions to:
  https://github.com/${data.username}\n
  ${data.email}
  `
}
  
module.exports = generateMarkDown;