//Etape 1
let message= "Bonjour"
console.log(message)
// 2.
let firstname="Beyonce"
message=`Bonjour ${firstname}`
console.log(message)

 function sayHello(firstname){
 let message= `Bonjour ${firstname}`
 console.log(message)
}
 sayHello("Beyonce")


function sayHello(firstname,hour){
    if (hour>= 18){
        return `Bonsoir ${firstname}`
    }else {
        return `Bonjour ${firstname}`
    }
}
console.log(sayHello("Beyonce",11))
console.log(sayHello("Beyonce", 18))
console.log(sayHello("Beyonce", 17))

