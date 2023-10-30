import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Sider.module.css';
import { gamePlataforms, gameGenres, setSelectedPlatform, setSelectedGenre, resetFilters, filterGames, resetGenreFilter } from "../../redux/actions";

function Sider() {

  //fetch platforms:
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gamePlataforms());
  }, [dispatch]);
  let allPlatforms = useSelector(state => state.platforms);
  let allPlatformsArray = Object.values(allPlatforms);

//este codigo es para visualizar el reset filter
  let selectedPlatform = useSelector(state => state.selectedPlatform);
  useEffect(() => {
  }, [selectedPlatform]);

  function handlePlatformSelectChange(e) {
    let platformName =  e.target.value;
    if (platformName === "") {
      dispatch(resetPlatformFilter());
    } else {
      dispatch(setSelectedPlatform(platformName));
    }
    dispatch(filterGames());
  }
 
  //fetch genres:
  useEffect(() => {
    dispatch(gameGenres());
  }, [dispatch]);
  let allGenres = useSelector(state => state.genres);
  let allGenresArray = Object.values(allGenres);

  //este codigo es para visualizar el reset filter
  let selectedGenre = useSelector(state => state.selectedGenre);
  useEffect(() => {
  }, [selectedGenre]);

  function handleGenreSelectChange(e) {
    let genresName =  e.target.value;
    if (genresName === "") {
      dispatch(resetGenreFilter());
    } else {
      dispatch(setSelectedGenre(genresName));
    }
    dispatch(filterGames());
  }


  return (
    <div className={style.form}>
        <div >
           <label htmlFor="">Platforms: </label>
           <select onChange={handlePlatformSelectChange}>
           <option value="">All</option>
              {allPlatformsArray.map((platformName, index) => (
                <option key={index} value={platformName}>
                  {platformName}
                </option>
              ))}
            </select>
        </div>

        <div>
            <label htmlFor="">Genres: </label>
            <select onChange={handleGenreSelectChange}>
            <option value="">All</option>
              {allGenresArray.map((genresName, index) => (
                <option key={index} value={genresName}>
                  {genresName}
                </option>
              ))}
            </select>
        </div>
          
       <button onClick={() => dispatch(resetFilters())}>Reset Filter</button>
    </div>
  )
}

export default Sider

