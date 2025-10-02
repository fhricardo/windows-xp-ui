const shutdown = document.getElementById('btnShutdown')
const logoff = document.getElementById('logoff')
const cancel = document.getElementById('cancel')
const modal = document.getElementById('logOutScreen')
const audio = new Audio("assets/audio/win-xp-shutdown.mp3")

shutdown.addEventListener('click', () => {
    // Abre o modal
    modal.style.display = 'flex'

    // Reproduz o som
    audio.currentTime = 0
    audio.play()

    // Redireciona após 6 segundos
    setTimeout(() => {
        window.location.href = "shutdown.html"; // altere para o destino desejado
    }, 6000)
})
cancel.addEventListener('click', () => {
    window.location.href = 'home.html'
})
logoff.addEventListener('click', () => {
    window.location.href = 'index.html'
})