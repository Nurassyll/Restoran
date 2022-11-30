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


function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.menu-item')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })

    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

}

app()