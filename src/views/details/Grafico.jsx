import React,{useEffect} from "react";
import Chart from '/node_modules/chart.js/auto'
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { gameById } from "../../redux/actions";

function Grafico() {
  const dispatch=useDispatch()
  const gameDetails = useSelector((state) => state?.gameId);
  const { id } = useParams();
  useEffect(() => {
    dispatch(gameById(id));
  }, [dispatch, id]);

console.log("detail", gameDetails)
 const graficosGames=(arrs)=>{
  let arr=arrs?.graphics;
  let contador = [0, 0, 0, 0, 0];

  for (let i = 0; i < arr?.length; i++) {
    let numero = arr[i];
    if (numero >= 1 && numero <= 5) {
      contador[numero - 1]++;
    }
  }
  const totalElementos = contador?.reduce((acc, valor) => acc + valor, 0);
  const porcentajes = contador?.map(valor => parseFloat(((valor / totalElementos) * 5).toFixed(1)));

  return porcentajes.reverse();
}
const GamesPlay=(arry)=>{
  let arr=arry?.gameplay;
  let contadorr = [0, 0, 0, 0, 0];

  for (let i = 0; i < arr?.length; i++) {
    let numero = arr[i];
    if (numero >= 1 && numero <= 5) {
      contadorr[numero - 1]++;
    }
  }
  const totalElementos = contadorr?.reduce((acc, valor) => acc + valor, 0);
  const porcentajes = contadorr?.map(valor => parseFloat(((valor / totalElementos) * 5).toFixed(1)));

  return porcentajes.reverse();
}
const PrecioCalidad =(arrs)=>{
  let arr=arrs?.quality_price;
  let contador = [0, 0, 0, 0, 0];

  for (let i = 0; i < arr?.length; i++) {
    let numero = arr[i];
    if (numero >= 1 && numero <= 5) {
      contador[numero - 1]++;
    }
  }
  const totalElementos = contador?.reduce((acc, valor) => acc + valor, 0);
  const porcentajes = contador?.map(valor => parseFloat(((valor / totalElementos) * 5).toFixed(1)));

  return porcentajes.reverse();
}
const porcentajesGraphics = graficosGames(gameDetails);
const porcentajesGameplay = GamesPlay(gameDetails);
const porcentajesQualityPrice = PrecioCalidad(gameDetails);
function calcularPromedio(array) { 
  const suma = array?.reduce((acc, valor) => acc + valor, 0);
  const promedio = (suma / array.length)?.toFixed(1);
  return parseFloat(promedio);
}
const porcentajeG =calcularPromedio(porcentajesGraphics)
const porcentajeGame=calcularPromedio(porcentajesGameplay)
const  porcentajeQP=calcularPromedio(porcentajesQualityPrice)

  console.log(gameDetails)
  const Stargraphics= gameDetails?.graphics?.stars
  const scoregraphics= gameDetails?.graphics?.score
  const Stargameplay= gameDetails?.gameplay?.stars
  const scoregameplay= gameDetails?.gameplay?.score
  const Starquality_price= gameDetails?.quality_price?.stars
  const scorequality_price= gameDetails?.quality_price?.score
    useEffect(() => {
      const ctx = document.getElementById('GRAPHICS').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['5','4','3','2','1'],
          datasets: [{
            label: 'Stars',
            data: Stargraphics,
            backgroundColor: '#4CAF50', 
            borderWidth: 1, 
            borderRadius: 20,
            barThickness: 16,
            borderColor: 'rgba(75, 192, 192, 1)',
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              display: false, 
            },
            y: {
              beginAtZero: true,
              display: true, 
            }
          },
          plugins: {
            legend: {
              display: false, 
            }
          },
          layout: {
            padding: {
              top: 0,
              bottom: 0, 
            }
          }
        }
      });
    }, []);

    useEffect(() => {
      const ctx = document.getElementById('GAMEPLAY').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['5','4','3','2','1'],
          datasets: [{
            label: 'Stars',
            data: Stargameplay,
            backgroundColor: '#4CAF50',
            borderWidth: 1, 
            borderRadius: 20,
            barThickness: 16,
            borderColor: 'rgba(75, 192, 192, 1)',
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              display: false, 
            },
            y: {
              beginAtZero: true,
              display: true, 
            }
          },
          plugins: {
            legend: {
              display: false, 
            }
          },
          layout: {
            padding: {
              top: 0, 
              bottom: 0, 
            }
          }
        }
      });
    }, []);

    useEffect(() => {
      const ctx = document.getElementById('QUALITYPRICE').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['5','4','3','2','1'],
          datasets: [{
            label: 'Stars',
            data: Starquality_price,
            backgroundColor: '#4CAF50', 
            borderWidth: 1, 
            borderRadius: 20,
            barThickness: 16,
            borderColor: 'rgba(75, 192, 192, 1)',
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              display: false, 
            },
            y: {
              beginAtZero: true,
              display: true, 
            }
          },
          plugins: {
            legend: {
              display: false, 
            }
          },
          layout: {
            padding: {
              top: 0, 
              bottom: 0, 
            }
          }
        }
      });
    }, []);

    const estilos={
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap:'wrap'
    }
    const estilosG={
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width:'300px',

    }
    const estiloss={
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    }
      return (  <div>
        <Box display='flex' sx={estilos} gap={12}>
          <Box sx={estilosG}>
            <div style={estiloss}>
              <h2 style={{margin:'0'}}>{scoregraphics}</h2>
              <p>Graphics</p>
            </div>
            <canvas id="GRAPHICS" ></canvas>
          </Box>
          <Box sx={estilosG}>
            <div style={estiloss}>
              <h2 style={{margin:'0'}}>{scoregameplay}</h2>
              <p>Game play</p>
            </div>
            <canvas id="GAMEPLAY" ></canvas>
          </Box>
          <Box sx={estilosG}>
            <div style={estiloss}>
              <h2 style={{margin:'0'}}>{scorequality_price}</h2>
              <p>Quality Price</p>
            </div>
            <canvas id="QUALITYPRICE" ></canvas>
          </Box>
        </Box>
      </div>)
}

export default Grafico

