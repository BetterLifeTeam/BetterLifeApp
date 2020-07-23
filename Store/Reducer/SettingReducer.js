const initialState = { timeSettings: {}, dattedTask: [], recurrentTask: []}

function toggleSetting(state = initialState, action) {
  console.log("hereee");
  let nextState
  switch (action.type) {
    case 'TOGGLE_SETTING':
      return {...state, timeSettings: action.value }
    case 'ADD_DATTED_TASK':
      nextState = {
        ...state,
        dattedTask: [...state.dattedTask, action.value]
      }
    return nextState || task
    case 'ADD_RECCURENT_TASK':
      nextState = {
        ...state,
        recurrentTask: [...state.recurrentTask, action.value]
      }
    return nextState || task
  default:
    return state
  }
}

export default toggleSetting