import fetcher from 'lib/fetcher'

const <%= apiName %> = {
  get = id => fetcher.get('/api/<%= rootNameLower %>')
}

export { <%= apiName %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= apiName %>
