function getLatinCharacterList(text){
    return text.split("")

    
}
// getLatinCharacterList("Hello, world")


const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
    ' ': '/'
}
function translateLatinCharacter(caractere){
   return latinToMorse[caractere]
}
// translateLatinCharacter("A")



function encode(message){

     let tableauDeCaractere = getLatinCharacterList(message.toUpperCase())
     let result=[]

for(let caractere of tableauDeCaractere){
let morse=translateLatinCharacter(caractere)
result.push(morse)
}
return result.join(" ") //
}
// console.log(encode("SALUT"))



function getMorseCharacterList(text){
    return text.split(" ")
}
// getMorseCharacterList("Hello world")



const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H",
   '/' : " "
}


function translateMorseCharacter(caractere){
   return morseToLatin[caractere]
}
translateMorseCharacter("")

function decode(latin){
    let  morseCharacter= getMorseCharacterList(latin)
    let result=[]

 for(let caractere of morseCharacter){
    let morseTexte = translateMorseCharacter(caractere)
    result.push(morseTexte)
 }
 return result.join("")
}

console.log(decode("... .- .-.. ..- -"))

function translateMorse(){
    let texte = document.getElementById("textInput").value
    let morse = encode(texte)
    document.getElementById("morseInput").value = morse
}

function translateLatin(){
    let morse = document.getElementById("morseInput").value
    let texte = decode(morse)
    document.getElementById("textInput").value = texte
}
