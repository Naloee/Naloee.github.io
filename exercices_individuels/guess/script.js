function askNumber(){
    let givenNumber = Number(prompt("Enter a number"))
    return givenNumber
  }
  function didIWin (givenNumber){
    if(givenNumber < 22){
      return false
    }
    else if (givenNumber>22){
      return false
    }
      return true
  }
  //alert(didIWin(askNumber()))
/*function gamePlay() {
    let a
    do{
        a=askNumber()
        if(didIWin(a)===false)
     alert(didIWin(a))
    }while(didIWin(a) !== true)
}*/
function gamePlay() {
    let number;
    let result;
 do {
        number = askNumber();         // On demande un nombre
        result = didIWin(number);     // On vérifie s’il est bon
    if (result === false) {
            alert("C'est raté");       // Affiche "false" si ce n’est pas bon
    }else (alert("Brava tu as trouvé"))
    
    }
  while (result !== true);   // On recommence tant qu’on n’a pas gagné
}
gamePlay()