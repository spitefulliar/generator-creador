import fetcher from 'lib/fetcher'

class <%= apiName %> {
  get () {
    return fetcher.get(`/api/<%= rootNameLower %>`)
  }
}

export { <%= apiName %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= apiName %>
