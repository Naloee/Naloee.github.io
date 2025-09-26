 const drawMyPen = (mois) =>{


console.log(' /\\')
console.log('/__\\')

const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

const niveaux = calendrierDuCrayon[mois]


    for(let i= 0 ; i< niveaux; i++){
         console.log('||||')
        // console.log(taille)
    }
    if(niveaux>4){
        console.log('|__|')
        console.log('|  |')
        console.log('|__|')
    }else{
        console.log('|__|')
        console.log('|__|') 
    }
    
}


drawMyPen('juin')