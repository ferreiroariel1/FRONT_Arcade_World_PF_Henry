import React,{useEffect} from "react";
import Chart from '/node_modules/chart.js/auto'


function Grafico() {
    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
    
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['OneStar', 'TwoStar', 'ThreeStar','FourStar','FiveStar'],
            datasets: [{
              label: 'Nombre del conjunto de datos',
              data: [3.8,3.2,1.5,4.6,2.1],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
              barThickness: 15,
              barPercentage: 0.8,
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                min: 0, 
                max: 5,
              }
            }
          }
        });
      }, []);
    
      return (
        <div>
        <canvas id="myChart"></canvas>
        </div>)
}

export default Grafico