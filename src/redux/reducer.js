import { GET_GAMES, GET_GAME_NAME, GET_GAME_ID, 
         GET_PLATFORMS, GET_GENRES, SET_SELECTED_GENRE,
         SET_SELECTED_PLATFORM, SET_AUTHENTICATED, SET_USER_DATA, RESET_FILTERS,
         FILTER_GAMES, RESET_GENRE_FILTER, RESET_PLATFORM_FILTER,
         SORT_GAMES_ASC, SORT_GAMES_DESC, FILTER_GAMES_BY_PRICE, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES,
         ADD_COMMENT, DELETE_ITEM_CART, ADD_NEWS_PURCHASED, ADD_TO_CART,GET_USER } from './actions.js';
                  
const local = JSON.parse(localStorage.getItem("cart"));
const storage = local ? local : [];

const userDefault =  {
  "id": "20d65f25-8dba-4fa5-a926-d01149d3bea8",
  "name": "Ignacio",
  "lastname": "Hermiston",
  "nickname": "Tony.Will95",
  "Email": "Rex75@yahoo.com",
  "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/876.jpg",
  "purchased": [
    {
      "id": "64e49eb8-4548-441e-8016-8003d55fc95a",
      "name": "Portal 2",
      "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      "genres": [
        "Puzzle",
        "Shooter"
      ],
      "platforms": [
        "PlayStation 3",
        "PC",
        "Xbox 360",
        "Linux",
        "macOS",
        "Xbox One"
      ]
    },
    {
      "id": "fabba1fd-1634-41ab-bd73-d5cead527299",
      "name": "Counter-Strike: Global Offensive",
      "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      "genres": [
        "Shooter",
        "Action"
      ],
      "platforms": [
        "PC",
        "Xbox 360",
        "PlayStation 3"
      ]
    },
    {
      "id": "7f188cd3-28da-4ae2-8cc6-a11e65ac53cd",
      "name": "Metro 2033",
      "image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      "genres": [
        "Shooter",
        "Action"
      ],
      "platforms": [
        "Xbox 360",
        "PC"
      ]
    },
    {
      "id": "2d347724-c99a-4829-9db7-5113c3590f03",
      "name": "Dark Souls III",
      "image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      "genres": [
        "RPG",
        "Action"
      ],
      "platforms": [
        "Xbox One",
        "PlayStation 4",
        "PC"
      ]
    },
    {
      "id": "340cde8c-c0ad-4387-a491-5f32a254c47e",
      "name": "Saints Row: The Third",
      "image": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      "genres": [
        "Adventure",
        "Action"
      ],
      "platforms": [
        "Linux",
        "PC",
        "Xbox One",
        "Xbox 360",
        "PlayStation 3"
      ]
    },
    {
      "id": "fe97da81-8348-4c89-b7e5-c314cd7ad096",
      "name": "Prey",
      "image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
      "genres": [
        "RPG",
        "Shooter",
        "Action"
      ],
      "platforms": [
        "Xbox One",
        "PC",
        "PlayStation 4"
      ]
    },
    {
      "id": "3d03f727-6d5f-4ad0-a997-1315bd5e1bf3",
      "name": "Garry's Mod",
      "image": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
      "genres": [
        "Indie",
        "Casual",
        "Simulation",
        "Adventure",
        "Action"
      ],
      "platforms": [
        "Linux",
        "macOS",
        "PC"
      ]
    },
    {
      "id": "3d96ad2b-de33-4af6-ae83-b44e7b21505d",
      "name": "Injustice: Gods Among Us Ultimate Edition",
      "image": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
      "genres": [
        "Fighting",
        "Arcade",
        "Action"
      ],
      "platforms": [
        "PlayStation 4",
        "PS Vita",
        "PC",
        "Xbox 360",
        "PlayStation 3"
      ]
    },
    {
      "id": "8e59578c-859c-4f87-9023-3cb9ecfc1e72",
      "name": "Prison Architect",
      "image": "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
      "genres": [
        "Indie",
        "Simulation",
        "Strategy"
      ],
      "platforms": [
        "Xbox One",
        "PC",
        "macOS",
        "Linux",
        "Nintendo Switch",
        "PlayStation 4"
      ]
    }
  ],
  "favorites": [
    {
      "id": "64e49eb8-4548-441e-8016-8003d55fc95a",
      "name": "Portal 2",
      "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      "price": 47.83,
      "genres": [
        "Puzzle",
        "Shooter"
      ],
      "platforms": [
        "PlayStation 3",
        "PC",
        "Xbox 360",
        "Linux",
        "macOS",
        "Xbox One"
      ]
    },
    {
      "id": "fabba1fd-1634-41ab-bd73-d5cead527299",
      "name": "Counter-Strike: Global Offensive",
      "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      "price": 41.38,
      "genres": [
        "Shooter",
        "Action"
      ],
      "platforms": [
        "PC",
        "Xbox 360",
        "PlayStation 3"
      ]
    },
    {
      "id": "2b594a99-6dcd-4b45-b743-553e1ebd9f36",
      "name": "Horizon Zero Dawn",
      "image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      "price": 50,
      "genres": [
        "RPG",
        "Adventure",
        "Action"
      ],
      "platforms": [
        "PlayStation 4",
        "PC"
      ]
    },
    {
      "id": "7f188cd3-28da-4ae2-8cc6-a11e65ac53cd",
      "name": "Metro 2033",
      "image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
      "price": 44.94,
      "genres": [
        "Shooter",
        "Action"
      ],
      "platforms": [
        "Xbox 360",
        "PC"
      ]
    },
    {
      "id": "2d347724-c99a-4829-9db7-5113c3590f03",
      "name": "Dark Souls III",
      "image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      "price": 41.51,
      "genres": [
        "RPG",
        "Action"
      ],
      "platforms": [
        "Xbox One",
        "PlayStation 4",
        "PC"
      ]
    },
    {
      "id": "b7a7c3cf-a7ec-40cd-82a4-886af376299a",
      "name": "Half-Life",
      "image": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      "price": 46.91,
      "genres": [
        "Shooter",
        "Action"
      ],
      "platforms": [
        "Dreamcast",
        "Linux",
        "macOS",
        "PC",
        "PlayStation 2"
      ]
    },
    {
      "id": "d7704048-965d-4ffb-91c7-fdcdca42c10a",
      "name": "Path of Exile",
      "image": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
      "price": 48.52,
      "genres": [
        "Indie",
        "Massively Multiplayer",
        "RPG",
        "Action"
      ],
      "platforms": [
        "Xbox One",
        "PlayStation 4",
        "PC"
      ]
    },
    {
      "id": "3d96ad2b-de33-4af6-ae83-b44e7b21505d",
      "name": "Injustice: Gods Among Us Ultimate Edition",
      "image": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
      "price": 47.48,
      "genres": [
        "Fighting",
        "Arcade",
        "Action"
      ],
      "platforms": [
        "PlayStation 4",
        "PS Vita",
        "PC",
        "Xbox 360",
        "PlayStation 3"
      ]
    },
    {
      "id": "6a40bdc2-2af2-42cd-8aab-35ca0616110e",
      "name": "Dead Space (2008)",
      "image": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
      "price": 43.28,
      "genres": [
        "Shooter",
        "Action"
      ],
      "platforms": [
        "PlayStation 3",
        "PC",
        "Xbox One",
        "Xbox 360"
      ]
    },
    {
      "id": "c6104015-47d5-42c2-ae32-38436a1eb7e7",
      "name": "Mortal Kombat 11",
      "image": "https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg",
      "price": 48.68,
      "genres": [
        "Fighting",
        "Adventure",
        "Action"
      ],
      "platforms": [
        "Nintendo Switch",
        "Xbox One",
        "PC",
        "PlayStation 4",
        "Xbox Series S/X",
        "PlayStation 5"
      ]
    }
  ],
  "reviews": [
    {
      "id": "64e49eb8-4548-441e-8016-8003d55fc95a",
      "review": {
        "value": "This game is a hidden treasure. The level design is intricate, and the puzzles are challenging.",
        "editedAt": "2023-11-04T06:06:37.129Z"
      }
    },
    {
      "id": "fabba1fd-1634-41ab-bd73-d5cead527299",
      "review": {
        "value": "Avoid this game at all costs. It's riddled with game-breaking bugs and poor optimization.",
        "editedAt": "2023-11-04T06:06:37.126Z"
      }
    },
    {
      "id": "2b594a99-6dcd-4b45-b743-553e1ebd9f36",
      "review": null
    },
    {
      "id": "7f188cd3-28da-4ae2-8cc6-a11e65ac53cd",
      "review": {
        "value": "I'm addicted to this game! The open world is vast, and the quests are engaging.",
        "editedAt": "2023-11-04T06:06:37.129Z"
      }
    },
    {
      "id": "2d347724-c99a-4829-9db7-5113c3590f03",
      "review": null
    },
    {
      "id": "b7a7c3cf-a7ec-40cd-82a4-886af376299a",
      "review": null
    },
    {
      "id": "340cde8c-c0ad-4387-a491-5f32a254c47e",
      "review": {
        "value": "A buggy mess. I encountered game-breaking glitches within minutes of playing.",
        "editedAt": "2023-11-04T06:06:37.124Z"
      }
    },
    {
      "id": "d7704048-965d-4ffb-91c7-fdcdca42c10a",
      "review": null
    },
    {
      "id": "fe97da81-8348-4c89-b7e5-c314cd7ad096",
      "review": {
        "value": "A buggy mess. I encountered game-breaking glitches within minutes of playing.",
        "editedAt": "2023-11-04T06:06:37.125Z"
      }
    },
    {
      "id": "3d03f727-6d5f-4ad0-a997-1315bd5e1bf3",
      "review": {
        "value": "This game was a disappointment. Boring story and poor graphics.",
        "editedAt": "2023-11-04T06:06:37.123Z"
      }
    },
    {
      "id": "3d96ad2b-de33-4af6-ae83-b44e7b21505d",
      "review": {
        "value": "This game is a hidden treasure. The level design is intricate, and the puzzles are challenging.",
        "editedAt": "2023-11-04T06:06:37.127Z"
      }
    },
    {
      "id": "6a40bdc2-2af2-42cd-8aab-35ca0616110e",
      "review": null
    },
    {
      "id": "c6104015-47d5-42c2-ae32-38436a1eb7e7",
      "review": null
    },
    {
      "id": "8e59578c-859c-4f87-9023-3cb9ecfc1e72",
      "review": {
        "value": "Absolutely loved it! The gameplay is addictive, and the graphics are stunning.",
        "editedAt": "2023-11-04T06:06:37.125Z"
      }
    }
  ],
  "graphics": [
    {
      "id": "64e49eb8-4548-441e-8016-8003d55fc95a",
      "stars": 5
    },
    {
      "id": "fabba1fd-1634-41ab-bd73-d5cead527299",
      "stars": 2
    },
    {
      "id": "7f188cd3-28da-4ae2-8cc6-a11e65ac53cd",
      "stars": 4
    },
    {
      "id": "2d347724-c99a-4829-9db7-5113c3590f03",
      "stars": 1
    },
    {
      "id": "340cde8c-c0ad-4387-a491-5f32a254c47e",
      "stars": 3
    },
    {
      "id": "fe97da81-8348-4c89-b7e5-c314cd7ad096",
      "stars": 5
    },
    {
      "id": "3d03f727-6d5f-4ad0-a997-1315bd5e1bf3",
      "stars": 1
    },
    {
      "id": "3d96ad2b-de33-4af6-ae83-b44e7b21505d",
      "stars": 3
    },
    {
      "id": "8e59578c-859c-4f87-9023-3cb9ecfc1e72",
      "stars": 3
    }
  ],
  "gameplay": [
    {
      "id": "64e49eb8-4548-441e-8016-8003d55fc95a",
      "stars": 3
    },
    {
      "id": "fabba1fd-1634-41ab-bd73-d5cead527299",
      "stars": 2
    },
    {
      "id": "7f188cd3-28da-4ae2-8cc6-a11e65ac53cd",
      "stars": 5
    },
    {
      "id": "2d347724-c99a-4829-9db7-5113c3590f03",
      "stars": 2
    },
    {
      "id": "340cde8c-c0ad-4387-a491-5f32a254c47e",
      "stars": 3
    },
    {
      "id": "fe97da81-8348-4c89-b7e5-c314cd7ad096",
      "stars": 3
    },
    {
      "id": "3d03f727-6d5f-4ad0-a997-1315bd5e1bf3",
      "stars": 3
    },
    {
      "id": "3d96ad2b-de33-4af6-ae83-b44e7b21505d",
      "stars": 4
    },
    {
      "id": "8e59578c-859c-4f87-9023-3cb9ecfc1e72",
      "stars": 4
    }
  ],
  "quality_price": [
    {
      "id": "64e49eb8-4548-441e-8016-8003d55fc95a",
      "stars": 5
    },
    {
      "id": "fabba1fd-1634-41ab-bd73-d5cead527299",
      "stars": 1
    },
    {
      "id": "7f188cd3-28da-4ae2-8cc6-a11e65ac53cd",
      "stars": 5
    },
    {
      "id": "2d347724-c99a-4829-9db7-5113c3590f03",
      "stars": 3
    },
    {
      "id": "340cde8c-c0ad-4387-a491-5f32a254c47e",
      "stars": 5
    },
    {
      "id": "fe97da81-8348-4c89-b7e5-c314cd7ad096",
      "stars": 3
    },
    {
      "id": "3d03f727-6d5f-4ad0-a997-1315bd5e1bf3",
      "stars": 1
    },
    {
      "id": "3d96ad2b-de33-4af6-ae83-b44e7b21505d",
      "stars": 4
    },
    {
      "id": "8e59578c-859c-4f87-9023-3cb9ecfc1e72",
      "stars": 3
    }
  ]
}

const initialState = {
  games:[],
  allGames:[],
  gameId: [],
  gameFilter: [],
  platforms:[],
  genres:[],
  selectedGenre: "",
  selectedPlatform: "",
  sortDirection: 'asc',
  // sortDirection: 'desc',
  sortOrder:'',
  isAuthenticated: false,
  userData: null,
  favorites: [],
  reviews:[],
  user:[]
 }  



 const rootReducer = (state=initialState, action)=> {
  let found;
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
        gameId: action.payload,
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
    case SORT_GAMES_ASC:
          return {
            ...state,
            games: [...state.games].sort((a, b) => a.name.localeCompare(b.name)),
          };

    case SORT_GAMES_DESC:
          return {
            ...state,
            games: [...state.games].sort((a, b) => b.name.localeCompare(a.name)),
          };
    case FILTER_GAMES_BY_PRICE:
          return {
            ...state,
            games: state.allGames
              .filter(game => game.price <= action.payload)
              .sort((a, b) => b.price - a.price)
          };
              case RESET_FILTERS:
            return {
              ...state,
              selectedGenre: "",
              selectedPlatform: "",
              games: [...state.allGames],
              sortOrder: initialState.sortOrder 
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
              games: [...state.allGames]
              , 
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

    case ADD_TO_FAVORITES:
            let allGamesFav = [...state.favorites, action.payload];
            console.log("Add:",allGamesFav)
            return {
                ...state,
                favorites: allGamesFav,
            };
      case REMOVE_FROM_FAVORITES:
              let allGamesRemove = state.favorites.filter(game => game.id !== action.payload);
              console.log("Remove:",allGamesRemove)
              return {
                  ...state,
                  favorites: allGamesRemove 
            };
        case ADD_COMMENT:
              let allComments = [...state.reviews, action.payload];
              console.log(allComments)
              return {
                ...state,
                reviews: allComments
              }
    // case CART_SHOPING:
    //    found = state.shoppingCart.find(el => el.id === action.payload[0].id);
      
    //   if(!found) {
    //     const localCart = [...state.shoppingCart, ...action.payload];
    //     localStorage.setItem("cart", JSON.stringify(localCart));
    //   return {
    //     ...state,
    //     shoppingCart: localCart
    //   }
    // } else {
    //   return {
    //     ...state,
        
    //   }
    // }
    case DELETE_ITEM_CART:
      return {
        ...state,
        shoppingCart: action.payload
      };

    case ADD_NEWS_PURCHASED:
      return{
        ...state,
        userData: {
          ...userData,
          purchased: [...state.userData.purchased, ...action.payload]
        }
      }

    case ADD_TO_CART:
      return{
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload]
      }
      case GET_USER:
        return{
          ...state,
          user:action.payload
        } 
    default:
      return {...state}  
  }

 }

 export default rootReducer;