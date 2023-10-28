import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const usePage = ()=> {
  const allGames = useSelector((state)=> state.games);
 
  const [prev, setPrev]= useState(0);  
  const [next, setNext] = useState(4); 
  const [count, setCount]= useState(1);  
  let paginate =allGames?.slice(prev,next); 
  const totPagine = Math.ceil(allGames.length/4);

  useEffect(()=> {
    setPrev(0);
    setNext(4);
    setCount(1);
  },[allGames.length]); 
  
  const changePrev = ()=> {
    if(count > 1){
      if(prev-4 < 0){
        setPrev(0);
        setNext(4);
      } else if(prev-4 >= 0){
        setPrev(prev-4);
        setNext(next-4);
      }
      setCount(count-1)
    }
  };
  const changeNext = ()=> {
    if(count < totPagine){
      setPrev(prev + 4);
      setNext(next + 4);
      setCount(count + 1);
    }
  }
  return {changeNext, changePrev, paginate, count, totPagine};

}

export default usePage;