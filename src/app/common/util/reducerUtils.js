export const createReducer = (initialstate, fnMap) => {
  return (state = initialstate, {type, payload}) => {
    //↑actionがdispatchされた時にreducerが受け取るから、actionにアクセス可能?
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state
  }
}