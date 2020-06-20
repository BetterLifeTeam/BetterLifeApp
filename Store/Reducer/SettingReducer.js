const initialState = { setting: {}}

function toggleSetting(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_SETTING':
      const favoriteFilmIndex = state.setting.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          setting: state.setting.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          setting: [...state.setting, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleSetting