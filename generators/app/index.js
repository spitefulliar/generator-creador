const Generator = require('yeoman-generator')
const chalk = require('chalk')
const COMPONENT_TYPES = ['component', 'container', 'connected', 'connectedPage', 'actions', 'reducer', 'api']

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)

    this.argument('type', {
      type: String,
      required: false,
      default: 'component',
      desc: 'Component or file type. Can be: component | container | connected | connectedPage | actions | reducer | api'
    })

    this.argument('name', {
      type: String,
      required: false,
      desc: 'Component or file name'
    })

    const type = COMPONENT_TYPES.includes(this.options.type) && this.options.type || 'component'
    const generatedNames = typeof this.options.name !== 'undefined' && this._generateNames(type, this.options.name) || {}

    this.component = {
      type,
      ...generatedNames
    }

    this.option('babel') // This method adds support for a `--babel` flag
  }

  chooseStep () {
    this.options.name ? this._promptingNameConfirm() : this._promptingName()
  }

  _promptingName () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: chalk.magenta(`${String.fromCodePoint('0x1F984')} Name your ${this.component.type}:`),
      default: `component${Math.floor(Math.random() * 100)}` // Default to current folder name
    }]).then((answers) => {
      this.component = {...this.component, ...this._generateNames(this.component.type, answers.name)}

      this.log(`${String.fromCodePoint('0x1F447')}`)
      this._promptingNameConfirm()
    })
  }

  _generateNames (type, rawName) {
    const rootName = this._transformName(rawName)
    const rootNameStartsLow = this._transformName(rawName, true)
    const rootNameLower = rawName.toLowerCase()
    const rootNameUpper = rawName.toUpperCase()
    const rootNameUpperLowDash = this._camelCaseToUpperLowdash(rootNameStartsLow)
    const containerName = `${rootName}${rootNameLower.includes('container') ? '' : 'Container'}`
    const apiName = `${rootNameStartsLow}${rootNameLower.includes('api') ? '' : 'Api'}`
    const actionsName = `${rootNameStartsLow}${rootNameLower.includes('actionCreators') ? '' : 'ActionCreators'}`
    const reducerName = `${rootNameStartsLow}${rootNameLower.includes('reducer') ? '' : 'Reducer'}`
    let name

    switch (type) {
      case 'container':
        name = containerName
        break

      case 'api':
        name = apiName
        break

      case 'actions':
        name = actionsName
        break

      case 'reducer':
        name = reducerName
        break

      default:
        name = rootName
        break
    }

    return {
      name,
      rootNameLower,
      rootName,
      rootNameUpper,
      rootNameUpperLowDash,
      rootNameStartsLow,
      containerName,
      apiName,
      actionsName,
      reducerName
    }
  }

  _camelCaseToUpperLowdash (str) {
    return str.replace(/([A-Z])/g, (g) => `_${g[0]}`).toUpperCase()
  }

  _transformName (name, isLow) {
    return `${isLow ? name[0].toLowerCase() : name[0].toUpperCase()}${name.slice(1)}`
  }

  _promptingNameConfirm () {
    return this.prompt([{
      type: 'confirm',
      name: 'nameConfirmed',
      message: chalk.magenta(`Would you like to keep the name "${this.component.name}"?`)
    }]).then((answers) => {
      if (!answers.nameConfirmed) {
        this.log(`Let's start again ${String.fromCodePoint('0x1F501')}`)
        this._promptingName()
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

  _promptingSmart () {
    return this.prompt([{
      type: 'confirm',
      name: 'dumb',
      message: chalk.magenta('Is it a dumb component?')
    }]).then((answers) => {
      this.component.dumb = answers.dumb
      this.log(chalk.magenta(`Writing... ${String.fromCodePoint('0x1F4DD')}`))
      this._writing()
    })
  }

  _chooseTemplate () {
    switch (this.component.type) {
      case 'api':
        return 'api.js'

      case 'actions':
        return 'actions.js'

      case 'reducer':
        return 'reducer.js'

      case 'container':
        return 'container.js'

      case 'connected':
        return 'connectedComponent.js'

      case 'connectedPage':
        return 'connectedPageComponent.js'

      default:
        return this.component.dumb ? 'componentDumb.js' : 'component.js'
    }
  }

  _writing () {
    switch (this.component.type) {
      case 'api':
        this.fs.copyTpl(
          this.templatePath(this._chooseTemplate()),
          this.destinationPath(`${this.component.name}.js`),
          {...this.component}
        )
        break

      case 'actions':
        this.fs.copyTpl(
          this.templatePath(this._chooseTemplate()),
          this.destinationPath(`${this.component.name}.js`),
          {...this.component}
        )
        break

      case 'reducer':
        this.fs.copyTpl(
          this.templatePath(this._chooseTemplate()),
          this.destinationPath(`${this.component.name}.js`),
          {...this.component}
        )
        break

      case 'container':
        this.fs.copyTpl(
          this.templatePath(this._chooseTemplate()),
          this.destinationPath(`${this.component.name}/${this.component.name}.js`),
          {...this.component}
        )
        break

      default:
        this.fs.copyTpl(
          this.templatePath(this._chooseTemplate()),
          this.destinationPath(`${this.component.name}/${this.component.name}.js`),
          {...this.component}
        )
        this.fs.copyTpl(
          this.templatePath('component.sass'),
          this.destinationPath(`${this.component.name}/${this.component.name}.sass`),
          {...this.component}
        )
        break
    }

    this._end()
  }

  _end () {
    this.log(chalk.green(`All set! ${String.fromCodePoint('0x1F378')}`))
  }
}
