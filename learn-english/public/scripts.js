const modalOverlay = document.querySelector('.modal-overlay') // O objeto 'document' está procurando dentro dele o 'modal-overlay'.
const cards = document.querySelectorAll('.card') // 'querySelectorAll' vai pegar uma coleção de elementos da classe 'card'.

for (let card of cards) {
    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id')
        window.location.href = `/player?id=${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src =""
})