const openButton = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close-btn');

openButton.addEventListener('click', () => {
    modal.classList.remove('modal--hidden');
})

modal.addEventListener('click', (event)=>{
    const target = event.target;
    if( target && 
        (target.classList.contains('modal') || target.classList.contains('modal__close-btn')) )
    {
        modal.classList.add('modal--hidden');
    }
})