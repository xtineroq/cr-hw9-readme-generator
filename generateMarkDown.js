generateMarkDown = data => {

  return `
  ![license](https://img.shields.io/badge/license-${data.license}-brightgreen)
  [![GitHub followers](https://img.shields.io/github/followers/${data.username}.svg?style=social&label=Followers)](https://github.com/${data.username}?tab=followers)
  
  # ${data.title}

  ## ➤ Description
  ${data.description}

  ## ➤ Table of Contents
  * [Installation](#➤-installation)
  * [Usage](#➤-usage)
  * [License](#➤-license)
  * [Contributing](#➤-contributing)
  * [Tests](#➤-tests)
  * [Questions](#➤-questions)

  ## ➤ Installation
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## ➤ Usage
  \`\`\`
  ${data.usage}
  \`\`\`

  ## ➤ License
  This app is covered under the following license/s:\n
  ![license](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## ➤ Contributing
  \`\`\`
  ${data.contributing}
  \`\`\`

  ## ➤ Tests
  \`\`\`
  ${data.tests}
  \`\`\`

  ## ➤ Questions
  Please direct all questions to:\n
  👤 https://github.com/${data.username}\n
  📧 ${data.email}
  `
}
  
module.exports = generateMarkDown;