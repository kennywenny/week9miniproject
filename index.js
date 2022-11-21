const inquirer = require('inquirer');
const fs = require('fs')

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

async function generateProfileHtml(answers) {
  const templateDocument = await fs.promises.readFile('./template.html', 'utf8')
  console.log(templateDocument)
}

const dummyAnswers = {
  name: 'entered name',
  location: 'location entered',
  bio: 'entered bio',
  linkedinUrl: 'linkedIn URL',
  githubUrl: 'github URL'
}

generateProfileHtml(dummyAnswers)

// collectAnswersAndGenerateProfile()


/*
  name, location, bio, LinkedIn URL, and GitHub URL
  */