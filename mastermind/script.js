const secretCode = ["red","blue"];
const colors = ["blue","red","yellow","green"];
const code_length =2
const trys = 12;
const guess = ["red","blue"]

function isGuessValid(guess,code_length,colors){
if(guess.length !== code_length){
    return false
}for (let colorIndex of guess) {
    if (!colors.includes(colorIndex)) {
      return false;
    }

}
return true;
}

console.log(isGuessValid(guess,code_length,colors))

function isCorrectGuess(secretCode,guess){
    if(guess.length !== secretCode.length){
        return false       
    }
    for(let i =0; i  < guess.length; i++ ){
        if(guess[i] !== secretCode[i])
        return false
    }
return true
}

console.log(isCorrectGuess(["blue","red"], secretCode)); 