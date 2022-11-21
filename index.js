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
  console.log('Answer some questions, dude.')
  const responses = await askQuestions()
  console.log('Generating HTML from template.')
  await generateProfileHtml(responses)
  console.log('All done, dude.')
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