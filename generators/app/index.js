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
      'index.html',
      'index.ts',
      'package.json',
      'tsconfig.json',
      'webpack.config.js',
    ];
    for (let file of files) {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    }
    this.fs.copy(
      this.templatePath("gitignore"),
      this.destinationPath(file)
    );
  }

  install() {
    this.installDependencies();
  }
};
