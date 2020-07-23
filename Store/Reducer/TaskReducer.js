const initialState = { dattedTask: "mes taches" }

function toggleTask(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const taskIndex = state.dattedTask.findIndex(item => item.id === action.value.id)
      if (taskIndex !== -1) {
        nextState = {
          ...state,
          dattedTask: state.dattedTask.filter( (item, index) => index !== taskIndex)
        }
      }
      else {
        nextState = {
          ...state,
          dattedTask: [...state.dattedTask, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleTask