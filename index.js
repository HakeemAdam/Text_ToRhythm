/**
 * Instance One - Master Thesis 
 * 
 * 
 * This program takes a poem and returns a set of instructions for building a background sonic material 
 */

const Algo = require('total-serialism').Algorithmic
const corpus = require('./corpus.js')
let res = []
let total = 0
let final = []
let left = []
let packet = []


// Selecting a line
let randomIndex = Math.floor(Math.random() * corpus.length) 
let selectedLine = corpus[randomIndex]

//console.log(selectedLine)

corpus.forEach((element) => { 

  //Each Element in the poems
  //console.log(element)
  const splitElem = element.split(" ")
  //console.log(splitElem)


  //Splitting each word from each line into one array
  splitElem.forEach((el)=>{
  packet.push(el)
  //console.log(el)
  })
  
  
  //The Lenght of Each line
  const lineLen = Object.keys(element).length
  //console.log(lineLen)

  //Pushing the result of the count 
  res.push(lineLen)

  total += lineLen

  return lineLen
  })

//Finding number of lines
const len = Object.keys(res).length

//Finding the avergae
let range = Math.floor(total / len ) 


//Creating sequences based on dividing each line by number of lines
res.forEach((element)=>{
  let a = Math.floor(element /len)
  if( a ===2 || a ===3 ){
    final.push(a)
  }else{
    left.push(a)
  }
})

let randIndex = Math.floor(Math.random() * packet.length) 
let randElement = packet[randomIndex] 
console.log(randElement)
console.log(packet)

//console output
console.log(`The Lenght of each line is : ${res}`)
console.log(`The number of lines are: ${len}`)
console.log(`The total number of characters is : ${total}`)
console.log(`The average is: ${range}`)
console.log(`The final sequence is: ${final}`)
console.log(`The left sequence is: ${left}`)

const rht = Algo.euclid(len, 5, 3)
console.log(`This is the rhythm ${rht}`)