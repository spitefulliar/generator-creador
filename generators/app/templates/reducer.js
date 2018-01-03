import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import { <%= actionsName %> } from 'actions/<%= actionsName %>'

const {
  loadDataSuccess,
  loadDataFail
} = <%= actionsName %>.<%= rootNameStartsLow %>

const <%= name %> = combineReducers({
  isDataLoaded: handleActions({
    [loadDataSuccess]: () => true,
    [loadDataFail]: () => true
  }, false),
  data: handleActions({
    [loadDataSuccess]: (state, { payload: { data } }) => data,
    [loadDataFail]: () => {}
  }, {})
})

export { <%= name %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= name %>
