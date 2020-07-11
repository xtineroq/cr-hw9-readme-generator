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
      message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
      type: "input",
      name: "contributing",
      message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "input",
        name: "tests",
        message: "What are the tests that were done to this project?"
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