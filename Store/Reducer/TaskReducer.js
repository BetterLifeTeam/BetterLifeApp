const initialState = { dattedTask: "mes taches" }

function toggleTask(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.dattedTask.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          dattedTask: state.dattedTask.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
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