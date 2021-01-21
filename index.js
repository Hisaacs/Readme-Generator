// importing required files
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

// An array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("./"+fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log ("Successfully wrote: " + fileName);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("README.md", generatorMarkdown(data));
    });
}

// function call to initialize program
init();