const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// open nav on click
open.addEventListener('click', () => container.classList.add('show-nav'));

// close nav on click
close.addEventListener('click', () => container.classList.remove('show-nav'));