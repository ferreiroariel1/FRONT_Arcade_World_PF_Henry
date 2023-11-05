import React,{useEffect} from "react";
import Chart from '/node_modules/chart.js/auto'
import { Box } from "@mui/material";

function Grafico({infoGame}) {
 const graficosGames=(arrs)=>{
  let arr=arrs.graphics;
  let contador = [0, 0, 0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    let numero = arr[i];
    if (numero >= 1 && numero <= 5) {
      contador[numero - 1]++;
    }
  }
  const totalElementos = contador.reduce((acc, valor) => acc + valor, 0);
  const porcentajes = contador.map(valor => parseFloat(((valor / totalElementos) * 5).toFixed(1)));

  return porcentajes.reverse();
}
const GamesPlay=(arry)=>{
  let arr=arry.gameplay;
  let contadorr = [0, 0, 0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    let numero = arr[i];
    if (numero >= 1 && numero <= 5) {
      contadorr[numero - 1]++;
    }
  }
  const totalElementos = contadorr.reduce((acc, valor) => acc + valor, 0);
  const porcentajes = contadorr.map(valor => parseFloat(((valor / totalElementos) * 5).toFixed(1)));

  return porcentajes.reverse();
}
const PrecioCalidad =(arrs)=>{
  let arr=arrs.quality_price;
  let contador = [0, 0, 0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    let numero = arr[i];
    if (numero >= 1 && numero <= 5) {
      contador[numero - 1]++;
    }
  }
  const totalElementos = contador.reduce((acc, valor) => acc + valor, 0);
  const porcentajes = contador.map(valor => parseFloat(((valor / totalElementos) * 5).toFixed(1)));

  return porcentajes.reverse();
}
const porcentajesGraphics = graficosGames(infoGame);
const porcentajesGameplay = GamesPlay(infoGame);
const porcentajesQualityPrice = PrecioCalidad(infoGame);


    useEffect(() => {
      const ctx = document.getElementById('GRAPHICS').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['5','4','3','2','1'],
          datasets: [{
            label: 'Stars',
            data: porcentajesGraphics,
            backgroundColor: '#4CAF50', // Color verde característico de Play Store
            borderWidth: 1, // Sin bordes
            borderRadius: 20,
            barThickness: 16,
            borderColor: 'rgba(75, 192, 192, 1)',
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              display: false, // Oculta el eje x
            },
            y: {
              beginAtZero: true,
              display: true, // Oculta el eje y
            }
          },
          plugins: {
            legend: {
              display: false, // Oculta la leyenda
            }
          },
          layout: {
            padding: {
              top: 0, // Elimina el espacio en la parte superior
              bottom: 0, // Elimina el espacio en la parte inferior
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
            data: porcentajesGameplay,
            backgroundColor: '#4CAF50', // Color verde característico de Play Store
            borderWidth: 1, // Sin bordes
            borderRadius: 20,
            barThickness: 16,
            borderColor: 'rgba(75, 192, 192, 1)',
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              display: false, // Oculta el eje x
            },
            y: {
              beginAtZero: true,
              display: true, // Oculta el eje y
            }
          },
          plugins: {
            legend: {
              display: false, // Oculta la leyenda
            }
          },
          layout: {
            padding: {
              top: 0, // Elimina el espacio en la parte superior
              bottom: 0, // Elimina el espacio en la parte inferior
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
            data: porcentajesQualityPrice,
            backgroundColor: '#4CAF50', // Color verde característico de Play Store
            borderWidth: 1, // Sin bordes
            borderRadius: 20,
            barThickness: 16,
            borderColor: 'rgba(75, 192, 192, 1)',
          }]
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              display: false, // Oculta el eje x
            },
            y: {
              beginAtZero: true,
              display: true, // Oculta el eje y
            }
          },
          plugins: {
            legend: {
              display: false, // Oculta la leyenda
            }
          },
          layout: {
            padding: {
              top: 0, // Elimina el espacio en la parte superior
              bottom: 0, // Elimina el espacio en la parte inferior
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
              <h2 style={{margin:'0'}}>{(porcentajesGraphics.reduce((a,b)=>a+b,0)/5).toFixed(1)}</h2>
              <p>Graphics</p>
            </div>
            <canvas id="GRAPHICS" ></canvas>
          </Box>
          <Box sx={estilosG}>
            <div style={estiloss}>
              <h2 style={{margin:'0'}}>{(porcentajesGameplay.reduce((a,b)=>a+b,0)/5).toFixed(1)}</h2>
              <p>Game play</p>
            </div>
            <canvas id="GAMEPLAY" ></canvas>
          </Box>
          <Box sx={estilosG}>
            <div style={estiloss}>
              <h2 style={{margin:'0'}}>{(porcentajesQualityPrice.reduce((a,b)=>a+b,0)/5).toFixed(1)}</h2>
              <p>Quality Price</p>
            </div>
            <canvas id="QUALITYPRICE" ></canvas>
          </Box>
        </Box>
      </div>)
}

export default Grafico

