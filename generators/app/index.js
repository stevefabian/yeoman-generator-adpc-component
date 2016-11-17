'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ADPC component generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'elementName',
      message: 'What would you like to name your ADPC component?',
      default: 'adpc-element'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    const elementName = this.props.elementName;

    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      this.props
    );
  },

  install: function () {
    this.installDependencies();
  }
});
