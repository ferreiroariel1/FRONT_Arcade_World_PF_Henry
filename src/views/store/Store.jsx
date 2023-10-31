import Sider from "../../components/sider/Sider"
import Cards from "../../components/cards/Cards";
import Paginate from '../../components/paginate/Paginate.jsx';
import usePage  from "../../components/utils/usePage";


function Store() {
  
    const {changeNext, changePrev, paginate, count, totPagine} = usePage();

  return (
    <div style={{backgroundColor:'#1a2a3b'}}>
      <div >
         <Sider/>
          <Cards games={paginate} />
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'1em'}}>
          <Paginate prevChange={changePrev} 
            nextChange={changeNext} 
            pages={count} 
            pageTotal={totPagine}
          />
          </div> 
      </div>
    </div>
  )
}

export default Store