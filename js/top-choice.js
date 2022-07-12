(function() {
    const slides = [
        `<div class="photo">
            <p class="menu__photo"><img src="img/menu1.png" alt="French fries"></p>
        </div>`,
        `<div class="photo">
            <p class="menu__photo"><img src="img/menu2.png" alt="Beer"></p>
        </div>`,
        `<div class="photo">
            <p class="menu__photo"><img src="img/menu3.png" alt="Burger"></p>
        </div>`,
        `<div class="photo">
            <p class="menu__photo"><img src="img/menu4.png" alt="Guests"></p>
        </div>`
    ]
    
    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.menu__carousel .menu-photos__container');
        slideContainer.innerHTML = slides[slideIdx];
        if(window.matchMedia('(min-width: 500px)').matches) {
            const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if(window.matchMedia('(min-width: 761px)').matches) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
        
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 4000);
    showCurrentSlide();

    const nextButton = document.querySelector('.menu__carousel > .button-next');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.menu__carousel > .button-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})()