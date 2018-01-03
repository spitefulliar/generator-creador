import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './<%= name %>.sass'

import AppHeader from 'containers/AppHeaderContainer/AppHeaderContainer'
import AppFooter from 'containers/AppFooterContainer/AppFooterContainer'

class <%= name %> extends Component {
  constructor () {
    super()

    this.state = {}
  }

  componentWillMount () {
    // this.props.fetchData()
  }

  render () {
    const {
      history,
      match: { params }
    } = this.props

    return (
      <div className={css.root}>
        <AppHeader />

        {/* insert content */}

        <AppFooter />
      </div>
    )
  }
}

const {
  object
} = PropTypes

<%= name %>.propTypes = {
  match: object.isRequired,
  history: object.isRequired
}

export { <%= name %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= name %>
