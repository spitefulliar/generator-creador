import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import css from './<%= name %>.sass'

export default class <%= name %> extends Component {
  render () {
    const {
      content
    } = props

    return (
      <div className={css.root}>
        {content}
      </div>
    )
  }
}

const {
  string
} = PropTypes

<%= name %>.propTypes = {
  content: string
}


