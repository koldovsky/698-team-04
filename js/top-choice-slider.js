(function() {
    const slides = [
        `<img class="img-slider" src="img/menu1.png" alt="French fies">`,
        `<img class="img-slider" src="img/menu2.png" alt="Beer">`,
        `<img class="img-slider" src="img/menu3.png" alt="Burger">`,
        `<img class="img-slider" src="img/menu3.png" alt="Guest sits outside with a beer"> `
    ]
    
    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carousel .slides');
        slideContainer.innerHTML = slides[slideIdx];
        // if(window.matchMedia('(min-width: 500px)').matches) {
        //     const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        //     slideContainer.innerHTML += slides[secondSlideIdx];
        // }
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    const nextButton = document.querySelector('.carousel > .btn-next');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.carousel > .btn-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})()