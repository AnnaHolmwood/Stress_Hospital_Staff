
let doughnut = new Chart('chart', {
    type: 'doughnut',
    data: {
      datasets: [
       /* Outer doughnut data starts*/
      {
        data: data1,
        backgroundColor: [
          "rgb(255, 0, 0)", // red
          "rgb(0, 255, 0)", // green
          "rgb(0, 0, 255)", //blue
          "ANOTHER COLOUR"
        ],
        label: 'Significant stress at work'
      },
      /* Outer doughnut data ends*/
      /* Inner doughnut data starts*/
      {
        data: data2, 
        backgroundColor: [
          "rgb(255, 0, 0)", // red
          "rgb(0, 255, 0)", // green
          "rgb(0, 0, 255)", //blue
          "ANOTHER COLOUR"
        ],
        label: 'Little to no stress at work'
      }
      /* Inner doughnut data ends*/
      ],
      labels: [
        "Daily",
        "Occassionally",
        "Sometimes",
        "Never"
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Alcohol intake among hospital staff according to stress levels'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      },
      tooltips: {
        callbacks: {
          label: function(item, data) {
          console.log(data.labels, item);
              return data.datasets[item.datasetIndex].label+ ": "+ data.labels[item.index]+ ": "+ data.datasets[item.datasetIndex].data[item.index];
          }
        }
      }
    }
  });

  window.onload = function() {
    var ctx = document.getElementById("doughnut")
      .getContext("2d");
    window.myDoughnut = new Chart(ctx, config);
  };

  // functions for passing data to charts
  async function pass_data1_to_doughnut() {
    let res = await fetch('/api/insights')
    let alcohol_data1 = await res.json()
    console.log(alcohol_data1) // returns an array with needed data
    doughnut.data.datasets.data1 = alcohol_data1
    doughnut.update()
  }

  async function pass_data2_to_doughnut() {
    let res = await fetch('/api/insights')
    let alcohol_data2 = await res.json()
    console.log(alcohol_data2) // returns an array with needed data
    doughnut.data.datasets.data2 = alcohol_data2
    doughnut.update()
  }
