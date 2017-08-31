const Generator = require('yeoman-generator')
const chalk = require('chalk')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    const type = args[0] || 'component'

    this.component = { type }

    this.option('babel') // This method adds support for a `--babel` flag
  }

  promptingName() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : chalk.magenta(`${String.fromCodePoint('0x1F984')} Name your ${this.component.type}:`),
      default : `component${Math.floor(Math.random()*100)}` // Default to current folder name
    }]).then((answers) => {

      switch (this.component.type) {
        case 'container':
          this.component.rootName = this._transformName(answers.name)
          this.component.rootNameLower = answers.name.toLowerCase()
          this.component.name = `${this._transformName(answers.name)}Container`
          break

        default:
          this.component.name = this._transformName(answers.name)
          break
      }
      this.log(`${String.fromCodePoint('0x1F447')}`)
      this._promptingNameConfirm()
    })
  }

  _transformName(name) {
    return `${name[0].toUpperCase()}${name.slice(1)}`
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
      this.log(chalk.magenta(`Cool ${String.fromCodePoint('0x2714')}`))
      this.log(chalk.green('Your component\'s name is:', this.component.name))
      this.log(`${String.fromCodePoint('0x1F447')}`)

      switch (this.component.type) {
        case 'component':
          this._promptingSmart()
          break

        default:
          this.log(chalk.magenta(`Writing... ${String.fromCodePoint('0x1F4DD')}`))
          this._writing()
          break
      }
    })
  }

  _promptingSmart() {
    return this.prompt([{
      type    : 'confirm',
      name    : 'dumb',
      message : chalk.magenta('Is it a dumb component?')
    }]).then((answers) => {
      this.component.dumb = answers.dumb
      this.log(chalk.magenta(`Writing... ${String.fromCodePoint('0x1F4DD')}`))
      this._writing()
    })
  }

  _chooseTemplate() {
    switch (this.component.type) {
      case 'container':
        return 'container.js'
        break

      case 'connected':
        return 'connectedComponent.js'
        break

      default:
        return this.component.dumb? 'componentDumb.js' : 'component.js'
        break
    }
  }

  _writing() {
    switch (this.component.type) {
      case 'container':
        this.fs.copyTpl(
          this.templatePath(this._chooseTemplate()),
          this.destinationPath(`${this.component.name}/${this.component.name}.js`),
          {
            name: this.component.name,
            rootName: this.component.rootName,
            rootNameLower: this.component.rootNameLower,
          }
        )
        break

      default:
        this.fs.copyTpl(
          this.templatePath(this._chooseTemplate()),
          this.destinationPath(`${this.component.name}/${this.component.name}.js`),
          { name: this.component.name }
        )
        this.fs.copyTpl(
          this.templatePath('component.sass'),
          this.destinationPath(`${this.component.name}/${this.component.name}.sass`),
          { name: this.component.name }
        )
        break
    }


    this._end()
  }

  _end() {
    this.log(chalk.green(`All set! ${String.fromCodePoint('0x1F378')}`))
  }
}
