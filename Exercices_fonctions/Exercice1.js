function calTotalPrice(articles){
    // Total à zéro
    // Faire une boucle
    // Elle additionne a total le prix de l'element
    // for(const price of articles)
    // console.log.log(price)
    let total=0
    for (let i=0; i<articles.length; i++)
        total +=articles[i]
    return total
}
console.log("Test 1:", calTotalPrice ([1,2,4]))
