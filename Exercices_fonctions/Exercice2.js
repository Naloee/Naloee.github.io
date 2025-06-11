function priceRandom(number){
 let nombreRandom=[]
 for(let i=0; i<number ; i++){
    nombreRandom.push(Math.floor(Math.random()*(10)+1))
  
 }
  return nombreRandom
}
console.log(priceRandom(3))