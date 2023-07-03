// https://jsonplaceholder.typicode.com/posts
/*
// GET
function clicou() {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then ((response) => { return response.json();    })
    .then ((data)     => { console.log(data[80].body) })
    .catch((error)    => { console.log(`Infomação do erro: ${error}`)})
}*/

//GET async / await
async function clicou() {
    let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    let json     = await response.json();
    console.log(json[80].body);
}

// POST
function inserir() {
    fetch ('https://jsonplaceholder.typicode.com/posts', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({
            tittle: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
}

async function enviar() {
    let arquivo = document.querySelector('#arquivo').files[0];
    
    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('arquivo', arquivo);

    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

function mostrar_img() {
    let imagem = document.getElementById("imagem").files[0];
    
    let img    = document.createElement('img');
    img.src    = URL.createObjectURL(imagem);
    img.width  = 300;

    document.getElementById("area_img").appendChild(img);

}

// POST async / await
document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);
document.querySelector('#arquivo').addEventListener('click', enviar);


