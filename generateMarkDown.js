generateMarkDown = data => {

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ### Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Version](#Version)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ---

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### License
  ${data.license}

  ### Contributing
  ${data.contributing}

  ### Tests
  ${data.tests}

  ### Questions
  Please direct all questions to ${data.email}
  `
}
  
  module.exports = generateMarkDown;