import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './<%= name %>.sass'

export default class <%= name %> extends Component {
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
