(async function () {
    let lostValues;
    const orks = document.querySelector('.header__news-ork');
    const tanks = document.querySelector('.header__news-tanks');
    const ships = document.querySelector('.header__news-ships');

    async function getData() {
        if (!lostValues) {
            const respons = await fetch('https://russianwarship.rip/api/v1/statistics/latest');
            lostValues = await respons.json();
            const orksLost = lostValues.data.stats.personnel_units;
            const tanksLost = lostValues.data.stats.tanks;
            const shipsLost = lostValues.data.stats.warships_cutters;
            orks.innerHTML = `${orksLost}`;
            tanks.innerHTML = `${tanksLost}`;
            ships.innerHTML = `${shipsLost}`;
        }
    }
    getData();
})()