import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as <%= rootName %>ActionCreators from 'actions/<%= rootName %>ActionCreators'

import <%= rootName %> from 'components/<%= rootName %>/<%= rootName %>'

export default connect(
  ({ <%= rootName %>Store }) => {
    const data = <%= rootName %>.toJSON()
    const {
      something
    } = data

    return {
      something
    }
  },
  dispatch => ({
    actions: bindActionCreators(<%= rootName %>ActionCreators, dispatch)
  })
)(<%= rootName %>)
