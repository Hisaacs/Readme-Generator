// importing required files
const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs");

// An array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide description of your project:'
    },


    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
    },

    {
        type: 'input',
        name: 'usage information',
        message: 'Please provide usage information for your project:'
    },

    {
        type: 'input',
        name: 'contributions guidelines',
        message: 'Please advise any contributions guidelines you have made:'

    },

    {
        type: 'input',
        name: 'test instructions',
        message: 'Please advise test instructions for your project:'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0',
            'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License',
            'Boost Software License 1.0'
        ]
    }



];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();