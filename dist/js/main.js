async function fetchAlcoholStressed() {
  // get data from server
  let res = await fetch('/rest/insights')

  // convert list of JSON to objects
  let alcoholStressed = await res.json()

  console.log(alcoholStressed) // debug log
}

async function fetchAlcoholNotStressed() {
  // get data from server
  let res = await fetch('/rest/insights')
  
  // convert list of JSON to objects
  let alcoholNotStressed = await res.json()
  
  console.log(alcoholNotStressed) // debug log
}

async function fetchSpecialization() {
  // get data from server
  let res = await fetch('/rest/insights')
    
  // convert list of JSON to objects
  let specialization = await res.json()
    
  console.log(specialization) // debug log
}