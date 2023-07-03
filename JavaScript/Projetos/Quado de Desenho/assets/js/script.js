// Initial Data
let currentColor = 'black';
let canDraw      = false;
let mouseX       = 0;
let mouseY       = 0;

let screen       = document.querySelector('#tela');
let ctx          = screen.getContext('2d');

//Event
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup'  , mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);

//Function
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e) {
    canDraw = true;
    mouseX  = e.pageX - screen.offsetLeft;
    mouseY  = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY);       
    }
}

function mouseUpEvent() {
    canDraw = false;
}

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;


    ctx.beginPath();                // Inicia o desenho
    ctx.lineWidth = 5;              // tamanho da linha (linha no sentido de pontos desenhados)
    ctx.lineJoin  = "round";        // formato da linha
    ctx.moveTo(mouseX, mouseY);     // movimentos iniciais
    ctx.lineTo(pointX, pointY);     // desenhando
    ctx.closePath();                // fechar o processo de desenho
    ctx.strokeStyle = currentColor; // cor da linha
    ctx.stroke();                   //finalizar o processo de desenho completo
                       
    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}