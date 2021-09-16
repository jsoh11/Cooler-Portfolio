// Modal

const cancelBtn = document.querySelector('#cancel-btn');
const deleteBtn = document.querySelector('#delete-btn');
const modal = document.querySelector('.modal');
const contact = document.querySelector('#contact');

contact.addEventListener('click', () => {
    modal.classList.add('is-active');
});

cancelBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
})