
import style from './details.module.css'

const Details = () =>{
     
   return(
    <>
   <div className={style.container}>
     <div>
    <img className={style.photo} src="https://m.media-amazon.com/images/I/81KUccM8azL._AC_UF1000,1000_QL80_.jpg" alt="" />
    <p className={style.score}>Score</p>
    <div className={style.attributes}>
        <p>Graphics:</p>
        <p>Gameplay:</p>
        <p>Quality price:</p>
    </div> 
</div>
<div className={style.info}>
    <h3 className={style.title}>Name: Super Smash Bros Brawl</h3>
    <p><span>Plataforms:</span> Wii, Wii U, Nintendo Switch</p>
    <p><span>Genres:</span> Action, Adventure, Multiplayer</p>
    <p className={style.data}><span>About the game:</span> There </p>
    <p><span>Relase:</span> DD/MM/AAAA</p>
    <div className={style.buttons}>
        <button>Add</button>
        <button>Buy</button>
    </div>
    
</div>
</div>
<div className={style.commets}>
<p>Comments:</p>
<form className={style.message}>
    <label >Message:</label>
    <br />
    <textarea id='message' name='message'></textarea>
    <br />
    <button type="submit" className={style.btn}>Submit</button>
</form>
</div> 
</>
    )
}
export default Details;

