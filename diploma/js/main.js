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
    //animated-text
    const scrollers = document.querySelectorAll(".animated-text__scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) 
    {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            
            const scrollerInner = scroller.querySelector('.animated-text__scroller-inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            })
        });
    }
    //testimonials
    new Swiper('.testimonials__img-slider', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        lazyLoading: true,
        initialSlide: 1,
        loop: true,
        speed: 800,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        
        // breakpoints: {
        //     901: {
        //         slidesPerView: 1.5,
        //     },
        //     1201: {
        //         slidesPerView: 2.1,
        //     },
        // },
    });

    new Swiper('.testimonials__author-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        initialSlide: 1,
        loop: true,
        speed: 700,
        // centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        
        // breakpoints: {
        //     901: {
        //         slidesPerView: 1.5,
        //     },
        //     1201: {
        //         slidesPerView: 2.1,
        //     },
        // },
    });

    new Swiper('.testimonials__quote-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        initialSlide: 1,
        loop: true,
        speed: 700,
        // centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        
        // breakpoints: {
        //     901: {
        //         slidesPerView: 1.5,
        //     },
        //     1201: {
        //         slidesPerView: 2.1,
        //     },
        // },
    });
})();