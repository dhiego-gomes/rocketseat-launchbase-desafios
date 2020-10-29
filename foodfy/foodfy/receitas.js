const modalOverlay = document.querySelector('.modal__overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    const cardImage = card.getAttribute('id')
    const cardTitle = card.querySelector('p').textContent
    const cartText = card.querySelector('span').textContent

    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `assets/${cardImage}.png`
        modalOverlay.querySelector('p').innerHTML = cardTitle
        modalOverlay.querySelector('.card__chef').innerHTML = cartText
    })
}

document.querySelector('.close__buttom').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})