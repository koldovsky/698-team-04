// -------------Natasha | start----------------

(function(){
    const slides = [
        `<div class="bar__bottled-beer">
        <h3 class="bar-menu__header">BOTTLED BEER</h3>
        <div class="bar-menu__item">
          <h4 class="title">
            INDIAN PALE ALE<span class="price"
              ><span class="menu-line"> _______________ </span>$4</span
            >
          </h4>
          <p class="description">
            Strong and bitter beer with intense aroma
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            LAGER BEER<span class="price"
              ><span class="menu-line"> ________________ </span
              >$3.50 </span
            >
          </h4>
          <p class="description">
            This beer is not bitter at all and features wheat aroma
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            BITTER<span class="price"
              ><span class="menu-line"> _____________________ </span>$4 </span
            >
          </h4>
          <p class="description">
            "England's favorite beer", dark and intense
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            STOUT<span class="price"
              ><span class="menu-line"> _____________________ </span>$5 </span
            >
          </h4>
          <p class="description">
            This frothy beer has a medium strength and a pleasant aroma
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            CARAMEL ALE<span class="price"
              ><span class="menu-line"> _______________ </span
              >$5.50 </span
            >
          </h4>
          <p class="description">
            Caramel malt sweetness accompanied by spicy and citrusy hops
          </p>
        </div>
      </div>`,
        `<div class="bar__beer-on-tap">
        <h3 class="bar-menu__header">BEER ON TAP</h3>
        <div class="bar-menu__item">
          <h4 class="title">
            BLUE STYLE<span class="price"
              ><span class="menu-line"> _________________ </span>$5 </span
            >
          </h4>
          <p class="description">
            Brewed with oats and spiced with orange peel
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            BOUTIQUE IPA<span class="price"
              ><span class="menu-line"> _______________ </span>$6</span
            >
          </h4>
          <p class="description">
            Our best-selling draft beer with bitter taste
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            ABSOLUTE PORTER<span class="price"
              ><span class="menu-line"> _____________ </span>$7</span
            >
          </h4>
          <p class="description">
            Chocolate peanut butter porter with rich taste
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            BELGIAN DREAM<span class="price"
              ><span class="menu-line"> ______________ </span>$8</span
            >
          </h4>
          <p class="description">
            A traditional Belgian-style wheat ale with whispers of
            orange
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            BEER BOUTIQUE LAGER<span class="price"
              ><span class="menu-line"> __________ </span>$9</span
            >
          </h4>
          <p class="description">
            Crisp, clean and slightly dry with some residual sweetness
          </p>
        </div>
      </div>`,
        `<div class="bar__cocktails">
        <h3 class="bar-menu__header">COCKTAILS</h3>
        <div class="bar-menu__item">
          <h4 class="title">
            MONKEY SOUR<span class="price"
              ><span class="menu-line"> _______________ </span>$10</span
            >
          </h4>
          <p class="description">
            Monkey Shoulder whisky, strawberry, lemon, sugar
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            OLD FASHIONED<span class="price"
              ><span class="menu-line"> _______________</span>$11</span
            >
          </h4>
          <p class="description">
            Buffalo Trace bourbon, demerara, Angostura Bitters
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            PIÑA COLADA<span class="price"
              ><span class="menu-line"> ________________ </span>$10</span
            >
          </h4>
          <p class="description">
            Havana Club 3 Year Old rum, coconut, pineapple
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            MOJITO<span class="price"
              ><span class="menu-line"> ____________________ </span>$11</span
            >
          </h4>
          <p class="description">
            Havana Club 3 Year Old rum, lime, mint, soda
          </p>
        </div>
        <div class="bar-menu__item">
          <h4 class="title">
            BRAMBLE<span class="price"
              ><span class="menu-line"> __________________ </span>$13</span
            >
          </h4>
          <p class="description">
            Tanqueray London Dry gin, crème de mure, lemon
          </p>
        </div>
      </div>`
    ]
    
    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.main-products__carousel .bar__menu-list');
        slideContainer.innerHTML = slides[slideIdx];
        if(window.matchMedia('(min-width: 500px)').matches) {
            const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
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

    const nextButton = document.querySelector('.main-products__carousel > .button-next');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.main-products__carousel > .button-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
}
)()

// -------------Natasha | end----------------