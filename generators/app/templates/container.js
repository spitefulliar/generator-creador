import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import withHelmet from 'containers/BaseHelmet/BaseHelmet'
import { <%= actionsName %> } from 'actions/<%= actionsName %>'

import { <%= rootName %> } from 'components/<%= rootName %>/<%= rootName %>'

const <%= name %> = withRouter(withHelmet(connect(
  ({ <%= rootNameStartsLow %>Store }) => {
    const {
      something
    } = <%= rootNameStartsLow %>Store

    return {
      something
    }
  },
  { ...<%= actionsName %>.<%= rootNameStartsLow %> }
)(<%= rootName %>)))

export { <%= name %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= name %>
