/*  -------- Diana Pinchuk | start -----------*/
(function() {
  const slides = [
    `<div class="blog-section__card">
      <img class="blog-section__card-img" src="img/blog-section__beer-tasting.png" alt="Beer tasting photo" />
      <p class="blog-section__card-category"><strong>EVENT</strong></p>
      <p class="blog-section__card-title">BEER TASTING</p>
      <p class="blog-section__card-text">
        Beer Boutique has always been something bigger than just a pub. We
        often host different events and tastings with local and
        world-famous beer producers.
      </p>
      <div class="blog-section__card-btn">
        <a href="" class="blog-section__card-button">READ MORE</a>
      </div>
    </div>`,
    `<div class="blog-section__card">
      <img class="blog-section__card-img" src="img/blog-section__perfect-match.png" alt="Beer photo" />
      <p class="blog-section__card-category"><strong>BEER BLOG</strong></p>
      <p class="blog-section__card-title">HOW TO FIND A PERFECT MATCH?</p>
      <p class="blog-section__card-text">
        What goes first, the food or the beer? Here is a brief guide to
        choosing the combination of beer and snack, so that they
        complement each other's flavor. Spoiler: no chips in this list.
      </p>
      <div class="blog-section__card-btn">
        <a href="" class="blog-section__card-button">READ MORE</a>
      </div>
    </div>`,
    `<div class="blog-section__card">
      <img class="blog-section__card-img" src="img/blog-section__festival.png" alt="Irish beer festival photo" />
      <p class="blog-section__card-category"><strong>EVENT</strong></p>
      <p class="blog-section__card-title">IRISH BEER FESTIVAL</p>
      <p class="blog-section__card-text">
        Irish Beer festival is a small celebration of the Irish tradition
        in drinking culture. Our brewmasters will introduce an exclusive
        line of ales especially for our guests at the festiva...
      </p>
      <div class="blog-section__card-btn">
        <a href="" class="blog-section__card-button">READ MORE</a>
      </div>
    </div>`
  ];
  
  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector('.blog-section__cards');
    slideContainer.innerHTML = slides[slideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.matchMedia('(min-width: 992px)').matches) {
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

  showCurrentSlide();

  const nextButton = document.querySelector('.blog-section__cards-btn-next');
  nextButton.addEventListener('click', nextSlide);

  const prevButton = document.querySelector('.blog-section__cards-btn-prev');
  prevButton.addEventListener('click', prevSlide);

  window.addEventListener('resize', showCurrentSlide);
})();
/*  -------- Diana Pinchuk | end -----------*/

