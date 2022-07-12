(function() {
    const slides = [
        `<div class="food__snacks">
        <h3 class="food-menu__header">SNACKS</h3>
        <div class="food-menu__item">
          <h4 class="title">
            SPICY NACHOS<span class="price"
              ><span class="menu-line"> _____________ </span>$15</span
            >
          </h4>
          <p class="description">
            Cheddar cheese, jalapenos, queso fresco, sour cream, salsa
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            FISH & CHIPS<span class="price"
              ><span class="menu-line"> ______________ </span>$12</span
            >
          </h4>
          <p class="description">
            Ale battered cod, coleslaw, French fries, and tartar sauce
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            FRIED CALAMARY<span class="price"
              ><span class="menu-line"> ____________ </span>$12</span
            >
          </h4>
          <p class="description">
            "Fried calamari served with spicy tartar sauce and dill
            aioli
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            CHICKEN WRAP<span class="price"
              ><span class="menu-line"> _____________ </span>$18</span
            >
          </h4>
          <p class="description">
            Grilled chicken, bacon, tomato, cucumber, avocado, village
            sauce
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            MAC & CHEESE BITES<span class="price"
              ><span class="menu-line"> __________ </span>$10</span
            >
          </h4>
          <p class="description">With maple bacon and cheese sauce</p>
        </div>
      </div>`,
        `<div class="food__burgers">
        <h3 class="food-menu__header">BURGERS</h3>
        <div class="food-menu__item">
          <h4 class="title">
            CLASSIC BURGER<span class="price"
              ><span class="menu-line"> ___________ </span>$14</span
            >
          </h4>
          <p class="description">
            Beef, tomato, pickle, lettuce, cucumber, cheddar cheese,
            bacon
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            BEEF KING<span class="price"
              ><span class="menu-line"> ________________ </span>$18</span
            >
          </h4>
          <p class="description">
            Beef brisket, Swiss cheese, caramelised onions
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            DOUBLE CHEESEBURGER<span class="price"
              ><span class="menu-line"> ________ </span>$22</span
            >
          </h4>
          <p class="description">
            Double beef patties with cheese, tomato, topped with
            mozzarella
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            CHICKEN BURGER<span class="price"
              ><span class="menu-line"> ____________ </span>$15</span
            >
          </h4>
          <p class="description">
            Chicken breast, soaked with hot sauce & blue cheese slaw
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            BOUTIQUE BURGER<span class="price"
              ><span class="menu-line"> ___________ </span>$19</span
            >
          </h4>
          <p class="description">
            Maple bacon, tomato, red onions topped off with a fried egg
          </p>
        </div>
      </div>`,
        `<div class="food__meat">
        <h3 class="food-menu__header">MEAT</h3>
        <div class="food-menu__item">
          <h4 class="title">
            SEZAME CHICKEN STRIPS<span class="price"
              ><span class="menu-line"> ________ </span>$13</span
            >
          </h4>
          <p class="description">
            Chicken breasts in Jack Daniel's® glaze with toasted sesame
            seeds
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            HOT WINGS<span class="price"
              ><span class="menu-line"> ________________ </span>$15</span
            >
          </h4>
          <p class="description">
            Served with barbecue sauce and coleslaw
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            LAMB GYRD<span class="price"
              ><span class="menu-line"> _______________ </span>$20</span
            >
          </h4>
          <p class="description">
            Lamb, tzatziki sauce, tomato, cucumber & lettuce in pita
            bread
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            LAMB CHOPS<span class="price"
              ><span class="menu-line"> _______________ </span>$22</span
            >
          </h4>
          <p class="description">
            Marinated herb roasted rack of lamb chops with balsamic
            sauce
          </p>
        </div>
        <div class="food-menu__item">
          <h4 class="title">
            PAN ROASTED PORK CHOP<span class="price"
              ><span class="menu-line"> _______ </span>$23</span
            >
          </h4>
          <p class="description">
            Served in a bourbon & honey glaze with berry sauce
          </p>
        </div>
      </div>`
    ]
    
    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.main-food__carousel .food__menu-list');
        slideContainer.innerHTML = slides[slideIdx];
        if(window.matchMedia('(min-width: 900px)').matches) {
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

    const nextButton = document.querySelector('.main-food__carousel > .button-next-food');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.main-food__carousel > .button-prev-food');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})()