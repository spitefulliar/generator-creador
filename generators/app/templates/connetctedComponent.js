import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './<%= name %>.sass'
import { Helmet } from 'react-helmet'
import { getDefaultPageSchema } from 'lib/jsonld'

import AppHeader from 'containers/AppHeaderContainer/AppHeaderContainer'
import AppFooter from 'containers/AppFooterContainer/AppFooterContainer'

class <%= name %> extends Component {
  constructor () {
    super(...arguments)

    this.state = {}
  }

  componentWillMount () {
    this.props.actions.load()
  }

  render () {
    const {
      history,
      match: { params }
    } = this.props

    return (
      <div>
        <Helmet>
          <title></title>
          <meta name='description' content='' />
          <script type='application/json+ld'>{getDefaultPageSchema()}</script>
        </Helmet>
        <div className={css.root}>
          <AppHeader />
          <AppFooter />
        </div>
      </div>
    )
  }
}

const {
  object
} = PropTypes

<%= name %>.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  actions: object.isRequired
}

export default <%= name %>
