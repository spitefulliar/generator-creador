import { createActions } from 'redux-actions'

import { <%= apiName %> } from 'api/<%= apiName %>'
// import { <%= apiName %> } from 'api/fake/<%= apiName %>' // fake api for test purposes

const <%= name %> = createActions({
  <%= rootNameUpperLowDash %>: {
    LOAD_DATA_SUCCESS: response => response,
    LOAD_DATA_FAIL: error => ({
      error: true,
      payload: error
    })
  }
})

const {
  loadDataSuccess,
  loadDataFail
} = <%= name %>.<%= rootNameStartsLow %>

<%= name %>.<%= rootNameStartsLow %>.fetchData = () =>
  async (dispatch, getState, { axios, getCSRFToken }) => {
    const response = await <%= apiName %>.get()
      .then(({ data }) => dispatch(loadDataSuccess(data)))
      .catch(error => dispatch(loadDataFail(error)))

    return response
  }


export { <%= name %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= name %>
