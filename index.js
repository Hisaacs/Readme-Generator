// imports
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs"); 

// Questions asked to the user
const questions = [
     
    {
      type: "input",
      message: "What is the title for your project?",
      name: "Title",
    },
    {
      type: "input",
      message: "Please provide description of your project:",
      name: "Description",
    },
    {
      type: "input",
      message: "What necessary dependencies must be installed to run this app?",
      name: "Installation",
    },
    {
      type: "input",
      message: "Please provide information usage for your project:",
      name: "Usage",
    },
    {
      type: "list",
      message: "What license was used for this README?",
      name: "License",
      choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0',
      'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License',
      'Boost Software License 1.0']
  
    },
  
    {
      type: "input",
      message: "Please advise any contributions you have made:",
      name: "Contributor",
    },
    {
      type: "input",
      message: "Please advise your test opporation performed for your project:",
      name: "Test",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "UserName",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "Email",
      },
      {
        type: "input",
        message: "Whom would you like to acknowledge in this course?",
        name: "Acknowledgements",
      },


  ];
  

// Writing to a file 
function writeToFile(fileName, data) {

fs.writeFile("./"+fileName, data, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log ("Successfully wrote: " + fileName);
});

}

// initialization function
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("README.md", generatorMarkdown(data));
  });
}


// run the app
init();
