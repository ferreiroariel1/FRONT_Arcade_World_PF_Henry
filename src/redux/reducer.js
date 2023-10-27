import { GET_GAMES, GET_GAME_NAME, GET_GAME_ID, GET_PLATFORMS, GET_GENRES, SET_SELECTED_GENRE,SET_SELECTED_PLATFORM} from './actions.js';

const initialState = {
  games:[],
  gameId: [],
  gameFilter: [],
  platforms:[],
  genres:[],
  selectedGenre: null,
  selectedPlatform: null

 }  

 const rootReducer = (state=initialState, action)=> {

  switch (action.type) {
    case GET_GAMES:
     return {
      ...state,
      games: action.payload,
      };
    case GET_GAME_NAME:
      return {
       ...state,
       games: action.payload
       };
    case GET_GAME_ID:
       return {
        ...state,
        gameId: action.payload
        };
    case GET_PLATFORMS:
        return {
          ...state,
          platforms: action.payload
        };  
    case GET_GENRES:
         return {
          ...state,
          genres: action.payload
        };
    case SET_SELECTED_GENRE:
          return {
            ...state,
            selectedGenre: action.payload,
          };
    case SET_SELECTED_PLATFORM:
          return {
            ...state,
            selectedPlatform: action.payload,
          };
    default:
      return {...state}  
  }
 }

 export default rootReducer;