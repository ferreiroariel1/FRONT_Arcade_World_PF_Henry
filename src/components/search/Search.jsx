

import './StyleSearch.css'
import lupa from './lupa.svg'

function Search() {
  return (
    <div className="InputContainer">
      <input type="text"  placeholder="search" className="input"/>
      <button className="thebutton"><img src={lupa} alt="lupa" /></button>
      </div>
  )
}

export default Search