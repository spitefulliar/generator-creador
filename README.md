# Yeoman generator for react component + css-modules/sass generating

Developed for a specific project, but can be easily customized by changing templates or names in sources.

## Install

1. First thing is to install yo using npm: `npm install -g yo`
1. `npm install generator-creador -g`
1. Change dir to apropriate folder
1. Run one of the commands
1. Follow instructions.

## Commands

In general every command consists of desired file's/component's type and name (optional). Where name itself is just the name of a component it is created for. For example: `header` would be transformed into `Panel`, `PanelContainer`, `PanelReducer`, etc.

`yo creador [component | container | connected | connectedPage | actions | reducer | api] [<component name>]`

| command | purpose |
|---------|---------|
| `yo creador [component <component name>]` | Short command for creating a component (dumb or stateful) |
| `yo creador container [<component name>]` | Create a container for connetion to Redux store (and also our custom BaseHelmet component) |
| `yo creador connected [<component name>]` | Create a connected component |
| `yo creador connectedPage [<component name>]` | Create a connected page component (has imported header and footer by default) |
| `yo creador actions [<component name>]` | Create actions for the component |
| `yo creador reducer [<component name>]` | Create reducer for the component |
| `yo creador api [<component name>]` | Create api for the component |
| `yo creador --help` | Help |

## Output

For any sort of components:

/<name>

- /<name>.js
- [/<name>.sass]

For the container:

/<name>Container

- /<name>Container.js
- [/<name>Container.sass]

Others:
/<name>ActionCreators.js
/<name>Reducer.js
