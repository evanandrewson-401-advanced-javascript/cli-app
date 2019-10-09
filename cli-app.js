const inquirer = require('inquirer')

module.exports = class CliApp {
  constructor(api) {
    this.api = api;
  }

  start() {
    return inquirer
      .prompt([
        {
        type: 'list',
        name: 'request-type',
        message: 'What type of request would you like to make?',
        choices: ['get', 'post']
      }
    ])
      .then(answer => {
        if(answer['request-type'] === 'get') {
          return this.api.makeGet()
            .then(result => console.log(result.body));
        }
        if(answer['request-type'] === 'post') {
          return inquirer
            .prompt([
              {
                type: 'input',
                name: 'name',
                message: 'what should the tour be named?'
              },
              {
                type: 'input',
                name: 'activities',
                message: 'What will the main activity be?'
              }
            ])
            .then(answers => {
              console.log(answers);
              return this.api.makePost(answers.name, answers.activities);
            })
        }
      })
  }
}