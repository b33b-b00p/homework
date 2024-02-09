(function() {
    //burger
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        if(document.documentElement.clientWidth > 1300) return
        
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        e.preventDefault();
        if(!burgerIcon && !burgerNavLink) return
        

        if(!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        }
        else {
            document.body.classList.remove('body--opened-menu');
        }
    }
})();