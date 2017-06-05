import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import css from './<%= name %>.sass'

export default class <%= name %> extends Component {
  render () {
    const {
      children
    } = props

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


