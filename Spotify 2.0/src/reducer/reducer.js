import { LOGIN_USER, SIGNUP_USER, actionTypes } from "../action/action.type";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return state;
    case SIGNUP_USER:
      return state;
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case actionTypes.SET_PLAYLIST_ID:
      return {
        ...state,
        playlistID: action.playlistID,
      };
    case actionTypes.SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    case actionTypes.SET_PLAYING:
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case actionTypes.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.plyerState,
      };
    
      default:
      return state;
  }
};

export default reducer;