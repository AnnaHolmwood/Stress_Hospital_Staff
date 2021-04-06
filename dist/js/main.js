let chart = new Chart('chart', {
    // There are multiple diagrams we can use. Check chartjs.org documentation 
    type: 'pie',
    data: {
      labels: ['Stressed', 'Not stressed'],
      datasets: [
        {
          order: 0,
          label: 'Bar Dataset',
          borderWidth: 3,
          data: [100, 0],
          // we can use HEX, rgba or simple css colors
          backgroundColor: ['red','green']
        },
      ]
    },
  
  })