// function to generate markdown for README
function generateMarkdown(data) {
  return`
# ${data.Title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})

# Description

${data.Description}

# Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

* [Acknowledgements](#acknowledgements)

# Installation

The following necessary dependencies must be installed to run the application properly: ${data.Installation}

# Usage

How to use this application. ${data.Usage}

# License

This project is license under the ${data.License} license.

# Contributing

​Contributors: ${data.Contributor}

# Tests

To run tests, you need to run the following command: ${data.Test}

# Questions

If you have any questions about the repo, please contact ${data.UserName} directly ${data.Email}.

# Acknowledgements
* Trilogy Education & UWA Coding Bootcamp - for making this bootcamp possible.
* Instructors ${data.Acknowledgements} - for spending time in teaching and sharing their knowledge.
`
}

module.exports = generateMarkdown;