//Elementos
let item = document.querySelector('input');
const ul = document.querySelector('ul');
//Evento   
item.addEventListener('keyup', ChecarEnter);

function ChecarEnter(t) {
    if (t.key === 'Enter') {
        const newli = document.createElement('li');   
        newli.innerText =item.value;
                
        ul.append(newli);
        item.value = '';


    }
}

/*
////////////////////////////////////////////////////////////

let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'Bmw', year: 2018 },
    {brand: 'Ferrari', year: 2022}
]

cars.sort((a,b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else
        return
});
console.log(cars);

/////////////////////////////////////////////////////////

let carro = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log('1. ' + carro[1]);

carro[1] = 'Audi';
console.log('2. Lista com Audi: ');
console.log(carro);

carro.push('Volvo');
console.log('3. Lista com Volvo: ');
console.log(carro);

console.log('4. Itens no array: ');
console.log(carro.length);

///////////////////////////////////////////////////

function addSquare(x, y) {
    const square = (x) => x * x;
    return square(x) + square(y);
}

console.log(addSquare(2, 2));

/////////////////////////////////////////////////////////////////////////////

function value (usuario, senha) {
    if ((usuario === 'pedro') && (senha === 123 )) {
        return true;
    } else {
        return false;
    }
}

let usuario = 'pedro';
let senha = 123;
let valida = value (usuario, senha);
if (valida) {
    console.log('Acessoo liberado');
} else {
    console.log('Acesso bloqueado');
}   


///////////////////////////////////////////////////////////////////////////

function calcularImovel(metragem, quarto) {
    let m2 = 3000;
    let valor = 10;
    switch (quarto) {
        case 1: return valor = metragem * (m2 * 1);
            break;
        case 2: return valor = metragem * (m2 * 1.2);
            break;
        case 3: return valor = metragem * (m2 * 1.5);
            break;
    }
    
}


let metragem = 10;
let quarto = 3;
let preco = calcularImovel(metragem, quarto);
console.log(`A casa custa R$ ${preco}`); */