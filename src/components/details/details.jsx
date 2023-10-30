import { useEffect } from 'react';
import { gameById } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './details.module.css'
import { useParams } from 'react-router-dom';

const Details = () =>{

    const dispatch = useDispatch();
    const gameDetails = useSelector(state => state.gameId);
    const { id } = useParams();

    useEffect(() => {
        dispatch(gameById(id));
        console.log(gameDetails)
    }, [dispatch, id]);    

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return(
        <>
            {gameDetails ? (
                <div className={style.container}>
                <div>
                    <img className={style.photo} src={gameDetails.image} alt={gameDetails.name} />
                    <p className={style.score}>Score: {gameDetails.score}</p>
                    <div className={style.attributes}>
                        <p>Graphics: {gameDetails.graphics}</p>
                        <p>Gameplay: {gameDetails.gameplay}</p>
                        <p>Quality price: {gameDetails.qualityPrice}</p>
                    </div>
                </div>
                <div className={style.info}>
                    <h3 className={style.title}>{gameDetails.name}</h3>
                    <p><span>Platforms:</span> {gameDetails.platforms && gameDetails.platforms.join(', ')}</p>
                    <p><span>Genres:</span> {gameDetails.genres && gameDetails.genres.join(', ')}</p>
                    <p className={style.data}><span>About the game:</span> {gameDetails.description}</p>
                    <p><span>Release:</span> {gameDetails.released}</p>
                    <p><span>Price:</span> ${gameDetails.price}</p>
                    <div className={style.buttons}>
                        <button className={style.cartbutton} >Add</button>
                        <button className={style.buybutton} >Buy</button>
                    </div>
                </div>
            </div>
                ) : (
                <p>Loading...</p>
            )}
        
        <div className={style.comments}>
                <p>Comments:</p>
                {/* {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))} */}
                <form className={style.message}>
                    <label htmlFor="message">Message:</label>
                    <br />
                    <textarea id='message' name='message' onChange={handleChange}></textarea>
                    <br />
                    <button type="submit" className={style.btn}>Submit</button>
                </form>
            </div>
        </>
    );
}
export default Details;

 // <div className={style.commets}>
            //     <p>Comments:</p>
            //     <form className={style.message}>
            //         <label for="message">Message:</label>
            //         <br />
            //         <textarea id='message' name='message' onChange={handleChange}></textarea>
            //         <br />
            //         <button type="submit" className={style.btn}>Submit</button>
            //     </form>
            // </div>