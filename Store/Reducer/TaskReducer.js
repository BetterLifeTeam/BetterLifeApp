const initialState = { myTasks: [] }

function toggleTask(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.myTasks.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          myTasks: state.myTasks.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          myTasks: [...state.myTasks, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleTask