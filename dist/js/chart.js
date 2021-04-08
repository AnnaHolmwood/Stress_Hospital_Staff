/* Create first doughnut chart*/
let doughnut = new Chart('doughnut', {
    type: 'doughnut',
    data: {
      datasets: [
       /* Outer doughnut data starts*/
      {
        data: data1,
        backgroundColor: [
          "#FF5768", // red
          "#00A5E3", // yellow
          "#FFBF65", //blue
          "#8DD7BF" //green
        ],
        label: 'Significant stress at work'
      },
      /* Outer doughnut data ends*/
      /* Inner doughnut data starts*/
      {
        data: data2, 
        backgroundColor: [
            "#FF5768", // red
            "#00A5E3", // yellow
            "#FFBF65", //blue
            "#8DD7BF" //green
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

//   window.onload = function() {
//     var ctx = document.getElementById("doughnut")
//       .getContext("2d");
//     window.doughnut = new Chart(ctx, config);
//   };

/* Create bar chart*/
let bar = new Chart('bar', {
    type: 'bar',
    data: {
        datasets: [
        {
            data: data3,
            backgroundColor:  "#FFBF65", //blue
            labels: [
                "Hospital Counselor", 
                "Anesthetics", 
                "Casualty doctor", 
                "Critical Care", 
                "Fetal medicine", 
                "General Practitioner", 
                "Gynaecology", 
                "Neurology", 
                "Paediatrics", 
                "Pathology", 
                "Radiology", 
                "Surgeon"]
        },
        ]
    },
    title: {
        display: true,
        text: 'Low motivation at work by specialization'
    },
});

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

async function pass_data_to_bar() {
    let res = await fetch('/api/insights')
    let specialization_data = await res.json()
    console.log(specialization_data) // returns an array with needed data
    bar.data.datasets.data = specialization_data
    bar.update()
}