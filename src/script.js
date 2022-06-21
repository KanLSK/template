const btnOpen = document.getElementById('open-btn');
const menu = document.getElementById('menu');
const btnClose = document.getElementById('close-btn');
const body = document.getElementById('body');
btnOpen.addEventListener('click', open);
btnClose.addEventListener('click', close);

function open() {
    console.log('Gell')
    menu.classList.toggle('hidden')
    body.classList.toggle('overflow-y-hidden')
}

function close() {
    menu.classList.toggle('hidden')
    body.classList.toggle('overflow-y-hidden')
}