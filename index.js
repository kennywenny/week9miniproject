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
  await generateProfileHtml(responses)
}

async function generateProfileHtml(answers) {
  const templateDocument = await fs.promises.readFile('./template.html', 'utf8')
  const profileHtml = templateDocument
    .replace('NAME', answers.name)
    .replace('LOCATION', answers.location)
    .replace('BIO', answers.bio)
    .replace('LINKED_IN_URL', answers.linkedinUrl)
    .replace('GITHUB_URL', answers.githubUrl)
  await fs.promises.writeFile('./index.html', profileHtml)
}

collectAnswersAndGenerateProfile()