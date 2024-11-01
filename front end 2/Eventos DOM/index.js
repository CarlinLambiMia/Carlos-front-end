const p = document.querySelector('#paragrafo');
const divImg = document.querySelector('#divImg');


divImg.addEventListener('mouseenter',() => {
    divImg.style.border = '2px solid black';
})

function pMouse() {
    divImg.style.border = 'none';
}

function sMouse () {
    divImg.style.border = 'none'
}

divImg.addEventListener('mouseover', pMouse)
divImg.addEventListener('mouseout', sMouse)

p.onclick = () => {
    alert('Paragrafo clicado!')
}
const clique = () => {
    console.log('botão clicado!')
    alert('Botão clicado!')
}

function pressTecla () {
    if (window.getComputedStyle(divImg, null).getPropertyValue('background-color') === 'rgb(0, 0, 0)') {
        divImg.style.backgroundcolor = 'rgb(255, 255, 255)'
    } else {
        divImg.style.backgroundcolor = 'rgb(0, 0, 0)'
    }
}



clique();
pressTecla();