const rating_state = document.querySelector('.rating__state');
const thanks_state = document.querySelector('.thanks__state');
const rate_buttons = document.querySelectorAll('.rating__state__buttons button');
const submit_button = document.querySelector('.rating__state__button');
const rating = document.querySelector('.thanks__state__rating');


const removeActive = () => {
    rate_buttons.forEach((button) => {
        button.classList.remove('active');
        button.setAttribute('aria-pressed', false);
    })    
}

rate_buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        submit_button.disabled= false;
        removeActive();
        button.setAttribute('aria-pressed', true);
        button.classList.add('active');
        rating.textContent = event.target.textContent;
    })
})  

submit_button.addEventListener('click', (event) => {
    event.target.setAttribute('aria-pressed', true);
    thanks_state.style.display= 'flex';
    rating_state.style.display= 'none';
})