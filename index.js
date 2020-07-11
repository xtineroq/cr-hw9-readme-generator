const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// import generateMarkDown
const generateMarkDown = require('./generateMarkDown.js');
// turn writeFile into a promise
const writeFileAsync = util.promisify(fs.writeFile);

// prompt user to gather data for the README
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please enter your project description."
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information."
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license your application is covered under.",
        choices: [
            "GNU", 
            "Apache", 
            "BSD", 
            "MIT",
            "ISC"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide your contribution guidelines."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions."
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
  ]);
}

// Async Await
async function getUserInput() {
    try {

        const input = await promptUser();
        const readme = generateMarkDown(input);
        await writeFileAsync("./NewREADME/README.md", readme);
        console.log("You've successfully generated a new readme!");

    //catch the error
    } catch (err) {
        console.log(err);
    }
}

getUserInput();