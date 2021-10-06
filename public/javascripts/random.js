const { model } = require("mongoose")

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = upper.toLocaleLowerCase()
const num = '1234567890'
const sampleArray = [...upper,...lower,...num]
const shortenedUrl = 'https://your-project-name.herokuapp.com/'

function random(){
  let randomPickedArray = []
  while(!randomPickedArray.some(item => [...num].includes(item))){
    randomPickedArray = []
    for (let i=0 ; i < 6 ; i++){
      randomPickedArray.push(sampleArray[Math.floor(Math.random() * sampleArray.length)])
    }
  }
  return shortenedUrl + randomPickedArray.join('')
}

module.exports = random