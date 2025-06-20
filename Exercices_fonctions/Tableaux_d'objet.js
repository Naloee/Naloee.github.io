 //Tableaux d'objet
// const pierreArray=['Pierre', true, 'Paris', false]
// const pierre = {
// firstname : "Pierre",
// hasKey:true,
// city: "Paris",
// delegate:false
// }
// console.log(pierre.firstname, )
let totalPrice=0
const restaurant={
    name:"Mcdo",
    menus:[
        {name: "Mcfirst", price: 12},
        {name: "BestOf", price: 10},
        {name: "MaxiBestOf", price: 8},
        {name: "McWrap", price:9},
        ]
}
console.log(`le fastfood ${restaurant.name} propose ${restaurant.menus.length} menus`)

for(let i=0; i<restaurant.menus.length;i++){
    totalPrice+=restaurant.menus[i].price 

console.log(`Le ${restaurant.menus[i].name}: ${restaurant.menus[i].price}€`);
}



console.log(`${totalPrice}€`)
// console.log(restaurant.menus[1])
// console.log(restaurant.menus[2])
// console.log(restaurant.menus[3])