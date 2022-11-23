const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const pop_up = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault()
    pop_up.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    pop_up.classList.remove('active');
})