const menus = document.querySelectorAll('.menu__link')
const cards = document.querySelectorAll('.card__recipes')
const buttons = document.querySelectorAll('.button')
const infos = document.querySelectorAll('.recipe__info')

for (var i = 0; i < menus.length; i++) {
    if (menus[i].href == document.URL) {
        menus[i].classList.add('clicked')
    }
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
        window.location.href = `/recipe/${i}`
    })
}

for (let button of buttons ) {
    button.addEventListener('click', function(){
        if (button.innerHTML === 'MOSTRAR <span class="material-icons">expand_more</span>') {
            button.innerHTML = 'ESCONDER <span class="material-icons">expand_less</span>'            
        } else {
            button.innerHTML = 'MOSTRAR <span class="material-icons">expand_more</span>'
        }
    })
}

for (let button in buttons) {
    buttons[button].addEventListener('click', function(){
        if (infos[button].classList.contains('hide')) {
            infos[button].classList.remove('hide')
        } else {
            infos[button].classList.add('hide')
        }
    })
}