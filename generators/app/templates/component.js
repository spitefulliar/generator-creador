import React, { Component } from 'react'
import PropTypes from 'prop-types'
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


