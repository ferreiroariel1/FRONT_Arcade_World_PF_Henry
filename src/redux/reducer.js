import { GET_GAMES, GET_GAME_NAME, GET_GAME_ID, 
         GET_PLATFORMS, GET_GENRES, SET_SELECTED_GENRE,
         SET_SELECTED_PLATFORM, SET_AUTHENTICATED, SET_USER_DATA, RESET_FILTERS,
         FILTER_GAMES, RESET_GENRE_FILTER, RESET_PLATFORM_FILTER } from './actions.js';

const initialState = {
  games:[],
  allGames:[],
  gameId: [],
  gameFilter: [],
  platforms:[],
  genres:[],
  selectedGenre: "",
  selectedPlatform: "",
  isAuthenticated: false,
  userData: null,
 }  

 const rootReducer = (state=initialState, action)=> {

  switch (action.type) {
    case GET_GAMES:
     return {
      ...state,
      games: action.payload,
      allGames: action.payload
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
    case FILTER_GAMES:
          return {
            ...state,
            games: action.payload
          };
      case RESET_FILTERS:
            return {
              ...state,
              selectedGenre: "",
              selectedPlatform: "",
              games: [...state.allGames], 
            };
      case RESET_PLATFORM_FILTER:
            return {
              ...state,
              selectedPlatform: "",
              games: [...state.allGames], 
            };
      case RESET_GENRE_FILTER:
            return {
              ...state,
              selectedGenre: "",
              games: [...state.allGames], 
            };
    case SET_AUTHENTICATED:
            return {
              ...state,
              isAuthenticated: action.payload,
            };
    case SET_USER_DATA:
              return {
                ...state,
                userData: action.payload,
              };
    default:
      return {...state}  
  }
 }

 export default rootReducer;