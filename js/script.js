function doubleDigit(n) {
    return n.toString().padStart(2, '0');
}

function winClock() {
    const now = new Date();
    const hours = doubleDigit(now.getHours());
    const minutes = doubleDigit(now.getMinutes());

    // atualiza o conteúdo do <p id="clock">
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

winClock();

setInterval(winClock, 1000);

const startBtn = document.getElementById('start-btn');
const menu = document.getElementById('start-menu');

// Toggle ao clicar no botão
startBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // impede o clique de fechar imediatamente
    menu.classList.toggle('show');
    menu.classList.toggle('hide');
});

// Fecha ao clicar fora do menu
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== startBtn) {
        menu.classList.remove('show');
        menu.classList.add('hide');
    }
});
//Window Drag & Drop - Resize
const myWindow = document.getElementById("myWindow");
const titleBar = document.getElementById("titleBar");
const contents = document.getElementById("contents");

// Abrir myWindow com conteúdo dinâmico
function openWindow(title, texto) {
    contents.innerHTML = "<p>" + texto + "</p>";
    myWindow.style.display = "block";
    titleBar.span.innerHTML = title
}

function closeWindow() {
    myWindow.style.display = "none";
}

// Função para arrastar
let offsetX = 0, offsetY = 0, arrastando = false;

titleBar.addEventListener("mousedown", (e) => {
    arrastando = true;
    offsetX = e.clientX - myWindow.offsetLeft;
    offsetY = e.clientY - myWindow.offsetTop;
    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", parar);
});

function mover(e) {
    if (arrastando) {
        myWindow.style.left = (e.clientX - offsetX) + "px";
        myWindow.style.top = (e.clientY - offsetY) + "px";
    }
}

function parar() {
    arrastando = false;
    document.removeEventListener("mousemove", mover);
    document.removeEventListener("mouseup", parar);
}