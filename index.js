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
  return await inquirer.prompt(inquirerQuestions)
}

async function collectAnswersAndGenerateProfile() {
  const responses = await askQuestions()
  console.log(responses)
}

collectAnswersAndGenerateProfile()


/*
  name, location, bio, LinkedIn URL, and GitHub URL
  */