import React,{useEffect} from "react";
import Chart from '/node_modules/chart.js/auto'
import { Box, Typography } from "@mui/material";


function Grafico() {
    useEffect(() => {
      const ctx = document.getElementById('GRAPHICS').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['1', '2', '3', '4', '5'],
          datasets: [{
            label: 'Stars',
            data: [4.5, 3.8, 4.2, 3.5, 4.0],
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
          labels: ['1', '2', '3', '4', '5'],
          datasets: [{
            label: 'Stars',
            data: [4.5, 3.8, 4.2, 3.5, 4.0],
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
          labels: ['1', '2', '3', '4', '5'],
          datasets: [{
            label: 'Stars',
            data: [4.5, 3.8, 4.2, 3.5, 4.0],
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
      return (<div>
        <Box display='flex' sx={estilos} gap={12}>
          <Box sx={estilosG} >
          <div style={estiloss}>
        <h2 style={{margin:'0'}}>2.5</h2>
        <p>Graphics</p>
          </div>
        <canvas id="GRAPHICS" ></canvas>
          </Box >
        <Box sx={estilosG}>
          <div style={estiloss}>
        <h2 style={{margin:'0'}}>2.5</h2>
        <p>Game play</p>
          </div>
        <canvas id="GAMEPLAY" ></canvas>
        </Box>
        <Box sx={estilosG}>
        <div style={estiloss}>
        <h2 style={{margin:'0'}}>2.5</h2>
        <p>Quality Price</p>
          </div>
          <canvas id="QUALITYPRICE" ></canvas>
        </Box>
      </Box>
        </div>)
}

export default Grafico

