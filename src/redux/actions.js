import axios from 'axios';
export const GET_GAMES = 'GET_GAMES';
export const GET_GAME_NAME = 'GET_GAME_NAME';
export const GET_GAME_ID = 'GET_GAME_ID';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const GET_GENRES = 'GET_GENRES';
export const SET_SELECTED_GENRE = 'SET_SELECTED_GENRE';
export const SET_SELECTED_PLATFORM = 'SET_SELECTED_PLATFORM';
export const FILTER_GAMES = 'FILTER_GAMES';
export const SORT_GAMES_ASC = 'SORT_GAMES_ASC';
export const SORT_GAMES_DESC = 'SORT_GAMES_DESC';
export const FILTER_GAMES_BY_PRICE = 'FILTER_GAMES_BY_PRICE';
export const RESET_PLATFORM_FILTER = 'RESET_PLATFORM_FILTER';
export const RESET_GENRE_FILTER = 'RESET_GENRE_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_USER_DATA = 'SET_USER_DATA';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_USER='GET_USER'
export const CART_SHOPING = 'CART_SHOPING';
export const DELETE_ITEM_CART = 'DELETE_ITEM_CART';
export const ADD_NEWS_PURCHASED = 'ADD_NEWS_PURCHASED';
export const ADD_TO_CART = 'ADD_TO_CART'


export const getGames = ()=>{ 
  return async function(dispatch) {
  try {
   const dataGm = (await axios.get('http://localhost:3001/videogame')).data;
   return dispatch({
      type: GET_GAMES, 
      payload: dataGm
    });
    
  } catch (error) {
    console.log(error.message)
  }
}
};

export const gameByName = (name)=> {
return async function(dispatch) {
  try {
    const {data} = await axios.get(`http://localhost:3001/videogame/?name=${name}`);
            
      return dispatch({
      type: GET_GAME_NAME, 
      payload: data 
    })
    
  } catch (error) {
    console.log(error.message)
  }
}
};
export const gameById = (id)=> {
return async function(dispatch) {
  try {
    const dataId = (await axios.get(`http://localhost:3001/videogame/${id}`)).data;

      return dispatch({
      type: GET_GAME_ID,
      payload: dataId
     })

  } catch (error) {
    console.log(error.message)
  }
}
};
export const gamePlataforms = ()=> {
  return async function(dispatch) {
    try {
      const dataPl = (await axios.get('http://localhost:3001/platform')).data;
      return dispatch({
        type: GET_PLATFORMS,
        payload: dataPl
      });
    } catch (error) {
      console.log(error.message)
    }
  }
};
export const gameGenres = ()=> {
  return async function(dispatch) {
    try {
      const dataGn = (await axios.get('http://localhost:3001/genre')).data;
      return dispatch({
        type: GET_GENRES,
        payload: dataGn
      });
    } catch (error) {
      console.log(error.message)
    }
  }
};
export const setSelectedGenre = (genre) => {
  return {
    type: SET_SELECTED_GENRE,
    payload: genre
  }
};
export const setSelectedPlatform = (platform) => {
  return {
    type: SET_SELECTED_PLATFORM,
    payload: platform
  }
};
export const filterGames = () => {
  return (dispatch, getState) => {
    const { allGames, selectedGenre, selectedPlatform } = getState();
    let filteredGames = [...allGames]; // Crear una copia del array
    if (selectedGenre && selectedGenre !== "") {
      filteredGames = filteredGames.filter((game) =>
        game.genres.includes(selectedGenre)
      );
    }
    if (selectedPlatform && selectedPlatform !== "") {
      filteredGames = filteredGames.filter((game) =>
        game.platforms.includes(selectedPlatform)
      );
    }
    dispatch({
      type: FILTER_GAMES,
      payload: filteredGames,
    });
  };
};
export const sortGamesAsc = () => ({
  type: SORT_GAMES_ASC,
});

export const sortGamesDesc = () => ({
  type: SORT_GAMES_DESC,
});
export const filterGamesByPrice = (price) => ({
  type: FILTER_GAMES_BY_PRICE,
  payload: price,
});
export const resetPlatformFilter = () => {
  return {
    type: RESET_PLATFORM_FILTER,
  }
};
export const resetGenreFilter = () => {
  return {
    type: RESET_GENRE_FILTER,
  }
};
export const resetFilters = () => {
  return (dispatch, getState) => {
    dispatch({
      type: RESET_FILTERS,
    });
    dispatch(filterGames());
  };
};
export function postRegister(payload){
  return async function(){
    const data = await
    axios.post("http://localhost:3001/user/register",payload)
    return data
  }
}
export function postLogin(payload){
  return async function(){
    const data = await
    axios.post("http://localhost:3001/user/login",payload)
    return data
  }
}
export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
}
export function setAuthenticated(isAuthenticated) {
  return {
    type: SET_AUTHENTICATED,
    payload: isAuthenticated,
  };
}

export const addToFavorites = (game) => ({
  type: ADD_TO_FAVORITES,
  payload: game,
});
export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});
export const addComments = (gameComment) => ({
  type: ADD_COMMENT,
  payload: gameComment,
});


// export const addFav = (character) => {
  //     const endpoint = 'http://localhost:3001/user/logout';
  //     return (dispatch) => {
    //        axios.put(endpoint, character).then(({ data }) => {
      //           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

export function GetUser(){
  return async function(dispatch){
   try {
    const {data}= await axios.get('http://localhost:3001/user')
    return dispatch({
      type:GET_USER,
      payload:data
    })
   } catch (error) {
    console.log(error.message)
   }
  }
}

export const shoppingCartId = (id) => {
  return async function(dispatch) {
    try {
      const dated = (await axios.get(`http://localhost:3001/videogame/${id}`)).data;
      return dispatch({
        type: CART_SHOPING,
        payload: dated,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}
export const deleteItemCart = (payload) => {
  return {
    type: DELETE_ITEM_CART,
    payload: payload,
  };
}

export const addPurchades = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_NEWS_PURCHASED,
        payload
      });
    } catch (error) {
      console.log(error.message)
      
    }
  };
};

export const addToCart = (payload) => {
  return async function(dispatch) {
    try {
      // Realiza operaciones asíncronas si es necesario aquí antes de despachar la acción
      // Por ejemplo, puedes realizar una solicitud de API antes de agregar al carrito.

      // Despacha la acción una vez que las operaciones asíncronas se completen
      return dispatch({
        type: ADD_TO_CART,
        payload: payload
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};



