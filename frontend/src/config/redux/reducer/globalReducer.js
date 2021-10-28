
const initialState = {
  name: 'fiyosa'
}

const globalReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE_NAME'){
    return {
      ...state,
      name: '12345'
    }
  }
  return state;
}

export default globalReducer;