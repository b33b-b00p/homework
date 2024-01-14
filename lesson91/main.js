const buttons = document.querySelector(".btns");

buttons.addEventListener('click', (event) => {
    const target = event.target;
    
    if(target && target.classList.contains("btn"))
    {
        console.log(target.innerText)
    }
})