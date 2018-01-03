import React from 'react'
import PropTypes from 'prop-types'

import css from './<%= name %>.sass'

const <%= name %> = ({
  children
}) => (
  <div className={css.root}>
    {children}
  </div>
)

const {
  node
} = PropTypes

<%= name %>.propTypes = {
  children: node
}

export { <%= name %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= name %>
