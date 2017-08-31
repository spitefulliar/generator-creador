import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './<%= name %>.sass'

class <%= name %> extends Component {
  constructor () {
    super(...arguments)

    this.state = {}
  }

  render () {
    const {
      children
    } = this.props

    return (
      <div className={css.root}>
        {children}
      </div>
    )
  }
}

const {
  node
} = PropTypes

<%= name %>.propTypes = {
  children: node
}

export default <%= name %>
