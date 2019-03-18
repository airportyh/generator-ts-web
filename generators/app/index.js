'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the marvelous ${chalk.red('generator-ts-web')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const files = [
      '.gitignore',
      'index.html',
      'index.ts',
      'index.package.json',
    ]
    for (let file in files) {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
      }
  }

  install() {
    this.installDependencies();
  }
};
