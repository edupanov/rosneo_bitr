const slider = document.querySelector('.main_slider')
const projectChecked = document.querySelector('.project_checked')

// -----Main page slider-----

const sliderData = {
    project: {
        src: './assets/img/project.png',
        changeSrcFull: './assets/img/project_full.png',
        changeSrcMin: './assets/img/project_min.png',
        title: 'Проектирование',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее о проектировании',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'minProject_img',
        className: 'project_img'
    },
    build: {
        src: './assets/img/build.png',
        changeSrcFull: './assets/img/build_full.png',
        changeSrcMin: './assets/img/build_min.png',
        title: 'Строительство',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее о строительстве',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'minBuild_img',
        className: 'build_img'
    },
    exploitation: {
        src: './assets/img/exploitation.png',
        changeSrcFull: './assets/img/exploitation_full.png',
        changeSrcMin: './assets/img/exploitation_min.png',
        title: 'Эксплуатация',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее об эксплуатации',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'minExploitation_img',
        className: 'exploitation_img'
    }
    ,
}

slider.addEventListener('click', (event) => {

    switch (event.target.className) {
        case 'project_img':
            slider.innerHTML = `
            <div class="slider_item">
                <h1 class='slider_main_title'>${sliderData.project.title}</h1>
                <img class='${sliderData.project.changeClassNameFull}' src='${sliderData.project.changeSrcFull}' alt="project">
                <div class="change_text">${sliderData.project.text}</div>
                <button class="change_button">${sliderData.project.button}</button>\
            </div>
            <div class="slider_item">
                <h2 class="slider_title-rotate">${sliderData.build.title}</h2>
                <img class='${sliderData.build.className}' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.build.changeSrcMin}' alt="build">
            </div>
            <div class="slider_item">
                <h2 class="slider_title-rotate">${sliderData.exploitation.title}</h2>
                <img class='${sliderData.exploitation.className}' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.exploitation.changeSrcMin}' alt="exploitation">
            </div>
    `;
            projectChecked.style.display = 'block'
            break;
        case 'build_img':
            slider.innerHTML = `
            <div class="slider_item">
                <h2 class="slider_title-rotate">${sliderData.project.title}</h2>
                <img class='${sliderData.project.className}' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.project.changeSrcMin}' alt="project">
            </div>
            <div class="slider_item" >
                <h1 class='slider_main_title'>${sliderData.build.title}</h1>
                <img class='${sliderData.build.changeClassNameFull}' src='${sliderData.build.changeSrcFull}' alt="build">
                <div class="change_text">${sliderData.build.text}</div>
                <button class="change_button">${sliderData.build.button}</button>\
            </div>
            <div class="slider_item">
                <h2 class="slider_title-rotate">${sliderData.exploitation.title}</h2>
                <img class='${sliderData.exploitation.className}' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.exploitation.changeSrcMin}' alt="exploitation">
            </div>
    `;
            projectChecked.style.display = 'none'
            break;
        case 'exploitation_img':
            slider.innerHTML = `
            <div class="slider_item">
                <h2 class="slider_title-rotate">${sliderData.project.title}</h2>
                <img class='${sliderData.project.className}' src='${sliderData.project.changeSrcMin}' style="max-width: 120px ; z-index: 1 ;" alt="project">
            </div>
            <div class="slider_item">
                <h2 class="slider_title-rotate">${sliderData.build.title}</h2>
                <img class='${sliderData.build.className}' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.build.changeSrcMin}' alt="build">
            </div>
            <div class='slider_item'>
                <h1 class='slider_main_title'>${sliderData.exploitation.title}</h1>
                <img class='${sliderData.exploitation.changeClassNameFull}' src='${sliderData.exploitation.changeSrcFull}' alt="exploitation">
                <div class="change_text">${sliderData.exploitation.text}</div>
                <button class="change_button">${sliderData.exploitation.button}</button>\
            </div>
    `;
            projectChecked.style.display = 'none'
            break;
    }
})

// -----Project slider-----

const swiperProjects = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.slider-button-next'
    },
    // отключает свайпы
    simulateTouch: false,
    // количество показанных слайдов (можно не целые числа)
    slidesPerView: 2.5,
    // отключает сайдер при малом кол-ве картинок
    watchOverFlow: true,
    // количество пролистываемых слайдов
    // slidesPerGroup: 2,
    // бесконечный слайдер
    loop: true
})

ymaps.ready(init);
let myMap;

function init() {

    myMap = new ymaps.Map("map", {
        center: [43.238253, 76.945465], // Координаты центра карты
        zoom: 17 // Маштаб карты
    });

    myMap.controls.add(
        new ymaps.control.ZoomControl()  // Добавление элемента управления картой
    );

    myPlacemark = new ymaps.Placemark([55.75021860081118, 37.62227867752328], { // Координаты метки объекта
        balloonContent: `
                <div class="map-slider map-container">
                    <div class="map-slider_wrapper map-wrapper">
                        <div class="map-slider_slide map-slide">
                            <div class="map-slider_image">
                                <img src="./assets/img/our_projects/Mask%20Group%20(2).png" alt="">
                            </div>
                        </div>
                        <div class="map-slider_slide map-slide">
                            <div class="map-slider_image">
                                <img src="./assets/img/our_projects/Mask%20Group.png" alt="">
                            </div>
                        </div>
                        <div class="map-slider_slide map-slide">
                            <div class="map-slider_image">
                                <img src="./assets/img/our_projects/Mask%20Group%20(1).png" alt="">
                            </div>
                        </div>
                        <div class="map-slider_slide map-slide">
                            <div class="map-slider_image">
                                <img src="./assets/img/our_projects/Mask%20Group%20(2).png" alt="">
                            </div>
                        </div>
                        <div class="map-slider_slide map-slide">
                            <div class="map-slider_image">
                                <img src="./assets/img/our_projects/Mask%20Group.png" alt="">
                            </div>
                        </div>
                        <div class="map-slider_slide map-slide">
                            <div class="map-slider_image">
                                <img src="./assets/img/our_projects/Mask%20Group%20(1).png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="map_control">
                        <p class="map_text">Капитальный ремонт офисного здания ПАО "Банк УралСиб" Филиал южный г.Краснодар</p>
                        <div class="map_button_img"><img src="./assets/img/map/map_button.png" alt=""></div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-scrollbar"></div>
                 </div>
        `
    }, {
        preset: "twirl#redDotIcon" // Тип метки
    });

    myMap.geoObjects.add(myPlacemark); // Добавление метки
    myPlacemark.balloon.open(); // Открытие подсказки метки

};

const swiperMap = new Swiper('.map-slider', {
    navigation: {
        nextEl: '.map_button_img'
    },
    pagination: {
        el: '.swiper-pagination',
        //Булеты
       // clickable: true
        type: 'fraction'
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    },
    // отключает свайпы
    simulateTouch: false,
    // количество показанных слайдов (можно не целые числа)
    slidesPerView: 1,
    // отключает сайдер при малом кол-ве картинок
    watchOverFlow: true,
    // количество пролистываемых слайдов
    // slidesPerGroup: 2,
    // бесконечный слайдер
    loop: true
})

//-----Fake news-----

const sortAll = document.querySelector('#sortAll')
const sortCompany = document.querySelector('#sortCompany')
const sortUseful = document.querySelector('#sortUseful')
const newsWrapper = document.querySelector('.news-wrapper')

const fakeNewsData = [
    {
        date: '21.05.2021',
        src: './assets/img/news/1.png',
        text: 'Минстрой России предлагает проводить замену и восстановление несущих конструкций зданий в правила подключения'
    },
    {
        date: '21.05.2021',
        src: './assets/img/news/2.png',
        text: 'Планируется принять новые правила подключения (технологического присоединения) к правила подключения'
    },
    {
        date: '21.05.2021',
        src: './assets/img/news/3.png',
        text: 'Минстрой России предлагает проводить замену и восстановление несущих конструкций зданий правила подключения'
    },
    {
        date: '21.05.2021',
        src: './assets/img/news/4.png',
        text: 'Планируется принять новые Правила подключения (технологического присоединения) к системе'
    },
    {
        date: '21.05.2021',
        src: './assets/img/news/5.png',
        text: 'Планируется принять новые Правила подключения (технологического присоединения) к системе'
    },
]


fakeNewsData.forEach(el => {
    return newsWrapper.innerHTML += `
                        <div class="news-slider_slide news-slide">
                            <div class="news-slider_image">
                                <p class="newsDate">${el.date}</p>
                                <img src="${el.src}" alt="">
                                <div><p class="newsText">${el.text}</p></div>
                            </div>
                        </div>`
})
const swiperNews = new Swiper('.news-slider')



