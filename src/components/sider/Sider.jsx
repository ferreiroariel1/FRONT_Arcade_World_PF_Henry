import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gamePlataforms, gameGenres, setSelectedPlatform, setSelectedGenre, resetFilters } from "../../redux/actions";

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
    console.log(selectedPlatform);
  }, [selectedPlatform]);

  function handlePlatformSelectChange(e) {
    let platformName =  e.target.value;
    dispatch(setSelectedPlatform({ platformName}));
    console.log(platformName);
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
    console.log(selectedGenre);
  }, [selectedGenre]);

  function handleGenreSelectChange(e) {
    let genresName =  e.target.value;
    dispatch(setSelectedGenre({ genresName }));
    console.log(genresName);
  }


  return (
    <div>
        <div>
           <label htmlFor="">Platforms: </label>
           <select onChange={handlePlatformSelectChange}>
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

