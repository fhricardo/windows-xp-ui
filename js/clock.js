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