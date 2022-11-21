const inquirer = require('inquirer');
const fs = require('fs')

const questions = [ 'name', 'location', 'bio', 'linkedinUrl', 'githubUrl', ]
const inquirerQuestions = questions.map(it => {
  return {
    type: 'input',
    name: it,
    message: it,
  };
})

inquirer.prompt(inquirerQuestions)
  .then(answers => {
    fs.readFile('./template.html', 'utf8', (err, templateDocument) => {
      const profileHtml = templateDocument
        .replace('NAME', answers.name)
        .replace('LOCATION', answers.location)
        .replace('BIO', answers.bio)
        .replace('LINKED_IN_URL', answers.linkedinUrl)
        .replace('GITHUB_URL', answers.githubUrl)
      fs.writeFile('./index.html', profileHtml, () => {
        console.log('DONE')
      })
    })
  })
