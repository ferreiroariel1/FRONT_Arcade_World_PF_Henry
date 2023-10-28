import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './StyleSearch.css'
import lupa from './lupa.svg'
import { gameByName } from '../../redux/actions'

function Search() {
  const [Valor,setValor]=useState('')
  const dispatch=useDispatch()
  const chageHandlers=(e)=>{
    setValor(e.target.value)
  }
  const onsearch=(Name)=>{
    dispatch(gameByName(Name))
  }
  return (
    <div className="InputContainer">
      <input type="search"  placeholder="Search Game" value={Valor}  onChange={chageHandlers} className="input"/>
      <button onClick={()=>{
        onsearch(Valor)
      }} className="thebutton"><img src={lupa} alt="lupa" /></button>
      </div>
  )
}

export default Search