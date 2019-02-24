import axios from 'axios'
function getJson () {
  return new Promise((resolve, reject) => {
    axios.get('../static/question.json')
      .then(function (response) {
        console.log(response)
        resolve(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
        resolve({})
      })
  })
}
export {
  getJson
}
