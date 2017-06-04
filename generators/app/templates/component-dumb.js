import React from 'react'
import PropTypes from 'react-proptypes'
import css from './<%= name %>.sass'

const <%= name %> = props => {
  const {
    content
  } = props

  return (
    <div className={css.root}>
      {content}
    </div>
  )
}

const {
  string
} = PropTypes

<%= name %>.propTypes = {
  content: string
}

export default <%= name %>

