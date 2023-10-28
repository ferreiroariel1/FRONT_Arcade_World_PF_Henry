import Sider from "../../components/sider/Sider"
import Cards from "../../components/cards/Cards";
import Paginate from '../../components/paginate/Paginate.jsx';
import usePage  from "../../components/utils/usePage";
import style from './Store.module.css';


function Store() {
  
    const {changeNext, changePrev, paginate, count, totPagine} = usePage();

  return (
    <div className={style.wrap}>
      <div className={style.contenStore}>
         <Sider/>
          <Cards games={paginate}/>
        <div className={style.storePage} >
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