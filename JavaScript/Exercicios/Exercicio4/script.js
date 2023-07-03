function azul(){
    document.getElementById("campo").classList.remove('verde');
    document.getElementById("campo").classList.remove('vermelho');
    document.getElementById("campo").classList.add('azul');
}

function vermelho(){
    document.getElementById("campo").classList.remove('azul');
    document.getElementById("campo").classList.remove('verde');
    document.getElementById("campo").classList.add('vermelho');
    
}

function verde(){
    document.getElementById("campo").classList.remove('azul');
    document.getElementById("campo").classList.remove('vermelho');
    document.getElementById("campo").classList.add('verde');    
}


