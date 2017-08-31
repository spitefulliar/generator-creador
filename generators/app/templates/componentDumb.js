import React from 'react'
import PropTypes from 'prop-types'
import css from './<%= name %>.sass'

const <%= name %> = props => {
  const {
    children
  } = props

  return (
    <div className={css.root}>
      {children}
    </div>
  )
}

const {
  node
} = PropTypes

<%= name %>.propTypes = {
  children: node
}

export default <%= name %>
