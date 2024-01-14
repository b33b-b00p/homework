const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

let textIsRight = null;

btn.addEventListener('click', () => {
    if((textIsRight === true))
    {
        text.classList.remove('moveRight');
        text.classList.add('moveLeft');
        textIsRight = false;
    }
    else if ( (textIsRight === false))
    {
        text.classList.remove('moveLeft');
        text.classList.add('moveRight');
        textIsRight = true;
    }
    else
    {
        text.classList.add('moveRight');
        textIsRight = true;
    }
})