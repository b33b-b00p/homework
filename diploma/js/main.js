(function() {
    //burger
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        if(document.documentElement.clientWidth > 1300) return
        
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');
        const burgerDropdownLink = e.target.closest('.dropdown__link');
        
        if(!burgerIcon && 
            (!burgerNavLink || burgerNavLink.classList.contains('nav__link--dropdown'))
            && !burgerDropdownLink) return

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
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        lazyLoading: true,
        initialSlide: 1,
        loop: true,
        allowTouchMove: false,
        speed: 700,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        
        breakpoints: {
            341: {
                slidesPerView: 2.1,
            },
            451: {
                slidesPerView: 3,
            },
        },
    });

    new Swiper('.testimonials__author-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        initialSlide: 1,
        loop: true,
        allowTouchMove: false,
        speed: 700,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
    });

    new Swiper('.testimonials__quote-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        initialSlide: 1,
        loop: true,
        allowTouchMove: false,
        speed: 700,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
    });
    //accordion
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(element => {
        element.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            
            if(!accordionControl) return;

            e.preventDefault();
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;
            
            if(accordionOpenedItem && accordionOpenedItem !== accordionItem)
            {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if(accordionItem.classList.contains('accordion-list__item--opened'))
            {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
            else 
            {
                accordionContent.style.maxHeight = null;
            }
        });
    });
    //progressbar
    //1) Initiate intersection observer to play animations when progressbars are visible 
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting)
                {
                    increase__WebsiteAndMobile();
                    increase__DesktopApp();
                    observer.unobserve(entry.target);
                }
            })
        },
        {
            threshold: 1,
        }
    )
    observer.observe(document.querySelector('.digital-experience__progressbars'));

    // 2) Functions for each progressbar
    function increase__WebsiteAndMobile() {
        // Define elements
        const progressbar = document.querySelector('.progressbar__progress#website-and-mobile');
        const progressbarValue = document.getElementById('website-and-mobile__value');
        // Change the variable to modify the speed of the number increasing from 0 to (ms)
        const speed = 35;
        // Define the limit for progress bar
        const progressbarLimit = 78;
        
        progressbar.style.animation = 'progress__website-and-mobile 3s normal forwards';
        for(let i = 0; i <= progressbarLimit; i++) {
            setTimeout(function () {
                progressbarValue.innerHTML = i + "%";
            }, speed * i);
        }
    }

    function increase__DesktopApp() {
        // Define elements
        const progressbar = document.querySelector('.progressbar__progress#desktop-app');
        const progressbarValue = document.getElementById('desktop-app__value');
        // Change the variable to modify the speed of the number increasing from 0 to (ms)
        const speed = 29;
        // Define the limit for progress bar
        const progressbarLimit = 95;
        
        progressbar.style.animation = 'progress__desktop-app 3s normal forwards';
        for(let i = 0; i <= progressbarLimit; i++) {
            setTimeout(function () {
                progressbarValue.innerHTML = i + "%";
            }, speed * i);
        }
    }
})();