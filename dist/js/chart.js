// Pass canvas id for Chart to work.
let chart = new Chart('chart', {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        order: 0,
        label: 'Bar Dataset',
        borderWidth: 3,
        data: [53, 39, 6],
        // we can use HEX, rgba or simple css colors
        backgroundColor: ["#FF5768", "#00A5E3", "#FFBF65", "#8DD7BF"]
      },
    ]
  },
  options: {
    onClick(e) {
      // console.log(chart.getElementAtEvent(e)[0])
      let point = chart.getElementAtEvent(e)[0]

      if (point) {
        let label = chart.data.labels[point._index]
        let value = chart.data.datasets[point._datasetIndex].data[point._index]
        console.log(label, value)
      }
    },

    onHover(e) {
      let point = chart.getElementAtEvent(e)[0]
      if (point) {
        e.target.style.cursor = 'pointer'
      } else {
        e.target.style.cursor = 'default'
      }
    }
  }
})

function addChartData(label, color, data) {
  let chartDataset = chart.data.datasets[0]

  chart.data.labels.push(label)
  chartDataset.data.push(data)
  chartDataset.backgroundColor.push(color)
  // This step is important since each time something is added to canvas it needs to be updated as well
  chart.update()
}


addChartData('Purple', 'purple', 15)
addChartData('Orange', 'orange', 35)


function addLineDataset(){
  chart.data.datasets.push({
    label: 'Line Dataset',
    data: [90, 32, 5, 15, 45, 62],
    type: 'line',
    backgroundColor: ['rgba(0, 0, 0, 0)'],
    borderColor: ['#03a5fc'],
    order: 1,
    pointRadius: 10,
    pointBorderColor: 'black'
  })

  chart.update()
}

addLineDataset()
