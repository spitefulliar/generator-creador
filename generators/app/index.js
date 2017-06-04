const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.log('')
    this.component = {}

    this.option('babel') // This method adds support for a `--babel` flag
  }

  promptingName() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Name your component:',
      default : `component${Math.floor(Math.random()*100)}` // Default to current folder name
    }]).then((answers) => {
      this.component.name = answers.name
      this.log(`${String.fromCodePoint('0x23EC')}`);
      this._promptingNameConfirm()
    });
  }

  _promptingNameConfirm() {
    return this.prompt([{
      type    : 'confirm',
      name    : 'nameConfirmed',
      message : `Would you like to keep the name "${this.component.name}"?`
    }]).then((answers) => {
      if (!answers.nameConfirmed) {
        this.log('Let\'s start again')
        this.promptingName()
        return
      }
      this.log(`Cool ${String.fromCodePoint('0x2705')}`);
      this.log('Your component\'s name is:', this.component.name)
      this.log(`${String.fromCodePoint('0x23EC')}`);

      this._promptingSmart()
    });
  }

  _promptingSmart() {
    return this.prompt([{
      type    : 'confirm',
      name    : 'dumb',
      message : 'Is it a dumb component?'
    }]).then((answers) => {
      this.component.dumb = answers.dumb
      this.log(`Writing... ${String.fromCodePoint('0x1F4BE')}`);
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
    this.log(`All set! ${String.fromCodePoint('0x1F378')}`)
  }
}
