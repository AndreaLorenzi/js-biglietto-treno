// costo biglietto 21 centesimi al km
// sconto per minorenni 20%
// sconto per over60 40%
const userDistance= parseInt(prompt('quanti chilomentri deve perccorrere?'));
console.log(userDistance);

const userAge = parseInt(prompt('inserisci la tua età'));
console.log(userAge)

const kmPrice = (0.21);
console.log(kmPrice * userDistance);

const totalPrice =(userDistance * kmPrice)



if (userAge < 18){
    console.log ( totalPrice - totalPrice * 20 / 100 );
    document.getElementById('price').innerHTML = (totalPrice - totalPrice * 20 / 100 + '€')
}
else if (userAge >= 65){
    console.log ( totalPrice - totalPrice * 40 / 100 );
    document.getElementById('price').innerHTML = (totalPrice - totalPrice * 40 / 100 + '€')
}

else{
    console.log(totalPrice)
    document.getElementById('price').innerHTML = (totalPrice + '€')
}



