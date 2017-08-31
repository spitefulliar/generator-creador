import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as <%= rootNameLower %>ActionCreators from 'actions/<%= rootNameLower %>ActionCreators'

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
    actions: bindActionCreators(<%= rootNameLower %>ActionCreators, dispatch)
  })
)(<%= rootName %>)
