'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to ${chalk.magenta('ts-web')} generator!`)
    );
  }

  writing() {
    const files = [
      '.gitignore',
      'index.html',
      'index.ts',
      'index.package.json',
      'tsconfig.json',
      'webpack.config.js',
    ];
    for (let file of files) {
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
