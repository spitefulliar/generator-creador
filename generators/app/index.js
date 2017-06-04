const Generator = require('yeoman-generator')
const chalk = require('chalk');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.component = {}
    this.option('babel') // This method adds support for a `--babel` flag
  }

  promptingName() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : chalk.magenta(`${String.fromCodePoint('0x1F984')} Name your component:`),
      default : `component${Math.floor(Math.random()*100)}` // Default to current folder name
    }]).then((answers) => {
      this.component.name = answers.name
      this.log(`${String.fromCodePoint('0x1F447')}`);
      this._promptingNameConfirm()
    });
  }

  _promptingNameConfirm() {
    return this.prompt([{
      type    : 'confirm',
      name    : 'nameConfirmed',
      message : chalk.magenta(`Would you like to keep the name "${this.component.name}"?`)
    }]).then((answers) => {
      if (!answers.nameConfirmed) {
        this.log(`Let\'s start again ${String.fromCodePoint('0x1F501')}`)
        this.promptingName()
        return
      }
      this.log(chalk.magenta(`Cool ${String.fromCodePoint('0x2714')}`));
      this.log(chalk.green('Your component\'s name is:', this.component.name))
      this.log(`${String.fromCodePoint('0x1F447')}`);

      this._promptingSmart()
    });
  }

  _promptingSmart() {
    return this.prompt([{
      type    : 'confirm',
      name    : 'dumb',
      message : chalk.magenta('Is it a dumb component?')
    }]).then((answers) => {
      this.component.dumb = answers.dumb
      this.log(chalk.magenta(`Writing... ${String.fromCodePoint('0x1F4DD')}`));
      this._writing()
    });
  }

  _chooseTemplate() {
    return this.component.dumb? 'component-dumb.js' : 'component.js'
  }

  _writing() {
    this.fs.copyTpl(
      this.templatePath(this._chooseTemplate()),
      this.destinationPath(`${this.component.name}/${this.component.name}.js`),
      { name: this.component.name }
    );
    this.fs.copyTpl(
      this.templatePath('component.sass'),
      this.destinationPath(`${this.component.name}/${this.component.name}.sass`),
      { name: this.component.name }
    );

    this._end()
  }

  _end() {
    this.log(chalk.green(`All set! ${String.fromCodePoint('0x1F378')}`))
  }
}
