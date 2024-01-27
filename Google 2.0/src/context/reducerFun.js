export const initialState = {
  theme: 'light',
  searchQ: '',
  loading: false,
  results: [],
  token: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, theme: action.payload }
    case 'SEARCH_Q':
      return {...state, searchQ: action.payload }
    case 'RESULTS':
      return { ...state, results: action.payload }
    default:
      return state
  }
}