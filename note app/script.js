const noteEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const main = noteEl.querySelector('.main');
const textArea = noteEl.querySelector('textarea');

editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})