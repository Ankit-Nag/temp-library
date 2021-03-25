// MODAL

const modalButton = document.querySelector('#btn-modal')
const closeButton = document.querySelector('#btn-close')
const cancelButton = document.querySelector('#btn-cancel')
const deleteButton = document.querySelector('#btn-delete')
const modalBg = document.querySelector('.modal-bg')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const body = document.querySelector('body');

if (modalButton) {
  modalButton.addEventListener('click', () => {
    modal.classList.remove('hide')
    modalBg.classList.remove('hide')
    modalContent.classList.remove('hide')
    body.classList.add('body-hide-scroll')
  })
}
const addHideClass = (elem) => {
  elem.addEventListener('click', () => {
    modal.classList.add('hide')
    modalBg.classList.add('hide')
    modalContent.classList.add('hide')
    body.classList.remove('body-hide-scroll')
  })
}
if (closeButton && cancelButton && deleteButton) {
  addHideClass(closeButton)
  addHideClass(cancelButton)
  addHideClass(deleteButton)
}

window.onclick = function(event) {
    if (event.target == modalBg) {
        modal.classList.add('hide')
        modalBg.classList.add('hide')
        modalContent.classList.add('hide')
        body.classList.remove('body-hide-scroll')
    }
}

// HAMBURGER MENU

const button = document.querySelector('#hamburger-btn');
const nav = document.querySelector('nav');
if (button) {
  button.addEventListener('click', () => {
    nav.classList.toggle('hide');
  })
}