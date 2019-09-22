export const createReducer = (initialstate, fnMap) => {
  return (state = initialstate, {type, payload}) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state
  }
}