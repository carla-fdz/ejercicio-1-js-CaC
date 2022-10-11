let a = Number(prompt('Inserte precio 1: '));
let b = Number(prompt('Inserte precio 2: '));
let c = Number(prompt('Inserte precio 3: '));
let d = Number(prompt('Inserte precio 4: '));
let e = Number(prompt('Inserte precio 5: '));

// let suma = a + b + c + d + e;
// Mediante una función:

function suma(){
    const suma = a + b + c + d + e
    console.log('Precio 1: ', a)
    console.log('Precio 2: ', b)
    console.log('Precio 3: ', c)
    console.log('Precio 4: ', d)
    console.log('Precio 5: ', e)
    console.log('La suma total de los precios insertados es: $', suma)
    document.write('La suma total de los precios insertados es: $' + suma)
}

suma()

