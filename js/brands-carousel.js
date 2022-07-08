(function() {
    const slides = [
        `<div class="carousel-item"><img src="./img/brands/budweiser.svg" alt="budweiser"></div>`,
        `<div class="carousel-item"><img src="./img/brands/carlsberg.svg" alt="carlsberg"></div>`,
        `<div class="carousel-item"><img src="./img/brands/corona.svg" alt="corona"></div>`,
        `<div class="carousel-item"><img src="./img/brands/heineken.svg" alt="heineken"></div>`,
        `<div class="carousel-item"><img src="./img/brands/hoegaarden.svg" alt="hoegaarden"></div>`,
        `<div class="carousel-item"><img src="./img/brands/miller.svg" alt="miller"></div>`
    ]

    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.brands-carousel');
        slideContainer.innerHTML = slides[slideIdx];
        if(window.matchMedia('(min-width: 473px)').matches) {
            const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if(window.matchMedia('(min-width: 761px)').matches) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
                if(window.matchMedia('(min-width: 991px)').matches) {
                    const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                    slideContainer.innerHTML += slides[fourthSlideIdx];
                    if(window.matchMedia('(min-width: 1108px)').matches) {
                        const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
                        slideContainer.innerHTML += slides[fifthSlideIdx];
                    }
                }
            }
        }
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >=  slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }
    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ?  slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    const nextButton = document.querySelector('.carousel-control-next');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.carousel-control-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})()