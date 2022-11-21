const inquirer = require('inquirer');

const questions = [
  'name',
  'location',
  'bio',
  'linkedinUrl',
  'githubUrl',
]
const inquirerQuestions = questions.map(it => {
  return {
    type: 'input',
    name: it,
    message: it,
  };
})

async function askQuestions() {
  inquirer.prompt(inquirerQuestions)
}

askQuestions()

/*
  name, location, bio, LinkedIn URL, and GitHub URL
  */