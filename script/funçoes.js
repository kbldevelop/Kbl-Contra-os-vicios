let nome = document.querySelector('.game-board')
const player1 = document.querySelector('.player1')
const obstaculo1 = document.querySelector('.obstaculo1')

const jump = () => {
    player1.classList.add('jump')

    setTimeout(() => {
        player1.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const obstaculo1Position = obstaculo1.offsetLeft
    const player1Position = +window.getComputedStyle(player1).bottom.replace('px', '')

    if (obstaculo1Position <= 60 && obstaculo1Position > 0 && player1Position < 80) {

        obstaculo1.style.animation = 'none'
        obstaculo1.style.left = `${obstaculo1Position}px`

        player1.style.animation = 'none'
        player1.style.bottom = `${player1Position}px`

        player1.src = './imagens/esqueleto.png'
        player1.style.width = '170px'

        nome.innerHTML += '<strong>Virou nóia</strong>' 
        nome.style.fontSize = '5em'
        

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)