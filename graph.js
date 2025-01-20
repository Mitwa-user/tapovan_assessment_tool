// graph.js

import Chart from 'chart.js/auto'; // Import Chart.js with auto configuration

function createPerformanceGraph(data) {
  const ctx = document.getElementById('performanceGraph').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['4 Years', '5 Years', '6 Years', '7 Years'], // Adjust labels as needed
      datasets: [{
        label: 'Performance (%)',
        data: data, // Pass the actual performance data here
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100, // Set maximum y-axis value to 100
          title: {
            display: true,
            text: 'Percentage (%)'
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Performance Graph'
        }
      }
    }
  });
}

export { createPerformanceGraph };
