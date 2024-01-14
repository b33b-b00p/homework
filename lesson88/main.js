const button = document.querySelector('.btn');
let btnIsRed = false;

button.addEventListener('click', () => {
    if(btnIsRed)
    {
        button.style.backgroundColor = 'blue';
        button.style.color = 'white';
        btnIsRed = false;
    }
    else

    {
        button.style.backgroundColor = 'red';
        button.style.color = 'black';
        btnIsRed = true;
    }
})
