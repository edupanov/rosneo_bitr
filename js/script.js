document.addEventListener('DOMContentLoaded', () => {
    const slinky = $('.js-menu').slinky({
        title: true
    });

    (function () {
        $(".flex-slide").each(function () {
            $(this).hover(function () {
                $(this).find('.flex-title').css({
                    transform: 'rotate(0deg)',
                    top: '40%',
                });
                $(this).find('.flex-about').css({
                    opacity: '1'
                });
            }, function(){
                $(this).find('.flex-title').css({
                    transform: 'rotate(0deg)',
                    top: '34vw'
                });
                $(this).find('.flex-about').css({
                    opacity: '0'
                });
            })
        });
    })();

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
    const aaa = document.querySelector('.hide_input')

    const phoneElements = document.querySelectorAll('[data-mask="phone"]') // ищем все поля с атрибутом
    // data-mask="phone"
    if (!phoneElements) return // если таких нет, прекращаем выполнение функции
    const phoneOptions = { // создаем объект параметров
        mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
    }
    phoneElements.forEach(el => {
        IMask(el, phoneOptions) // инициализируем плагин с установленными выше параметрами
    })

// -----Main page slider-----

    const project = document.querySelector('.project')
    const build = document.querySelector('.build')
    const exploitation = document.querySelector('.exploitation')

    const projectRotate = document.querySelector('.flex-title-project')
    const buildRotate = document.querySelector('.flex-title-build')
    const exploitationRotate = document.querySelector('.flex-about-exploitation')

    const projectChecked = document.querySelector('.project_checked')
    const changeButtonProject = document.querySelector('.change_button_project')
    const accordionItem = document.querySelector('.accordion_item')
    const accordionItems = document.querySelector('.accordion_items')

    function isHover(e) {
        return (e.parentElement.querySelector(':hover') === e);
    }

    document.addEventListener('mousemove', () => {
        const hoveredProject = isHover(project);
        const hoveredBuild = isHover(build);
        const hoveredExploitation = isHover(exploitation);
        if (hoveredProject) {
            changeButtonProject.addEventListener('click', () => {
        })
            projectRotate.style.transform = "rotate(0deg)"
            buildRotate.style.transform = "rotate(-90deg)"
            exploitationRotate.style.transform = "rotate(-90deg)"
    }
    if (hoveredBuild) {
        projectRotate.style.transform = "rotate(-90deg)"
        buildRotate.style.transform = "rotate(0deg)"
        exploitationRotate.style.transform = "rotate(-90deg)"
    }
    if (hoveredExploitation) {
        projectRotate.style.transform = "rotate(-90deg)"
        buildRotate.style.transform = "rotate(-90deg)"
        exploitationRotate.style.transform = "rotate(0deg)"
    }
    if(!hoveredProject && !hoveredBuild && !hoveredExploitation){
        projectRotate.style.transform = "rotate(0deg)"
        buildRotate.style.transform = "rotate(0deg)"
        exploitationRotate.style.transform = "rotate(0deg)"
    }
});


    // -----mobile main slider

    const swiperMainMobile = new Swiper('.main-mobile-slider', {
        navigation: {
            nextEl: ''
        },
        pagination: {
            el: '.project_pagination',
            clickable: true
        },
        // отключает свайпы
        simulateTouch: true,
        // количество показанных слайдов (можно не целые числа)
        slidesPerView: 1,
        // отключает сайдер при малом кол-ве картинок
        watchOverFlow: true,
        // количество пролистываемых слайдов
        // slidesPerGroup: 2,
        // бесконечный слайдер
        loop: true,
        breakpoints: {
            120: {
                slidesPerView: 1,
                navigation: {nextEl: ''},
            },
        }

    })

    const swiperOurProgressMobile = new Swiper('.our_progress-slider', {
        navigation: {
            nextEl: ''
        },
        pagination: {
            el: '.project_pagination',
            clickable: true
        },
        // отключает свайпы
        simulateTouch: true,
        // количество показанных слайдов (можно не целые числа)
        slidesPerView: 1,
        // отключает сайдер при малом кол-ве картинок
        watchOverFlow: true,
        // количество пролистываемых слайдов
        // slidesPerGroup: 2,
        // бесконечный слайдер
        loop: true,
        breakpoints: {
            120: {
                slidesPerView: 1.1,
                navigation: {nextEl: ''},
            },
        }

    })


// -----Project slider-----

const swiperProjects = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.slider-button-next'
    },
    pagination: {
        el: '.project_pagination',
        clickable: true
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
    loop: true,
    breakpoints: {
        120: {
            slidesPerView: 1,
            navigation: {nextEl: ''},
        },
        480: {
            slidesPerView: 2.5,
        }
    }

})

// Yandex map
const mapData = [
    {moscow: [55.75021860081118, 37.62227867752328]}
]

    ymaps.ready(init);

function init() {

    let myMap = new ymaps.Map('map', {
        center: mapData[0].moscow,
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    let placemark = new ymaps.Placemark(myMap.getCenter(), {
        // Зададим содержимое заголовка балуна.
        // balloonContentHeader: '',
        // Зададим содержимое основной части балуна.

        balloonContentBody: `
                <div class="map-slider swiper-container">
                    <div class="map-slider_wrapper swiper-wrapper">
                    ${fakeNewsData.map(el => {
            return `<div class="map-slider_slide map-slide">
                                <div class="map-slider_image">
                                    <img src="${el.src}" alt="">
                                </div>
                                </div>`
        })}
                    </div>
                </div>
                <div class="map_control">
                        <p class="map_text">Капитальный ремонт офисного здания ПАО "Банк УралСиб" Филиал южный г.Краснодар</p>
                        <div class="map_button_img"><img src="../assets/img/map/map_button.png" alt=""></div>
                </div>
                <div class="map-pagination"></div>
                <div class="map-scrollbar"></div>
        `,
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: ``,
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Rosneo object'
    });

    // const swiperMap = new Swiper('.map-slider');
    // Добавим метку на карту.
    myMap.geoObjects.add(placemark);
    // Откроем балун на метке.
    // placemark.balloon.open();
    placemark.balloon.maxWidth = '200px'
}

//-----Fake news-----

const sortAll = document.querySelector('#sortAll')
const sortCompany = document.querySelector('#sortCompany')
const sortUseful = document.querySelector('#sortUseful')
const newsWrapper = document.querySelector('.news-wrapper')


const swiperNews = new Swiper('.news-slider', {
    navigation: {
        nextEl: '.news-button-next',
        prevEl: '.news-button-prev'
    },
    virtual: {
        slides: (function () {
            return fakeNewsData.map(el => {
                return `
                        <div class="news-slider_slide news-slide">
                            <div class="news-slider_image">
                                <p class="newsDate">${el.date}</p>
                                <img src="${el.src}" alt="">
                                <div><p class="newsText">${el.text}</p></div>
                            </div>
                        </div>`
            })
        }())
    },
    // количество показанных слайдов (можно не целые числа)
    slidesPerView: 4.1,
    pagination: {
        el: '.news-pagination',
        clickable: true
    },

    // бесконечный слайдер
    loop: false,
    breakpoints: {
        120: {
            slidesPerView: 1,
            navigation: {nextEl: ''},
        },
        480: {
            slidesPerView: 4.2,
        }
    }
})

// ------Callbck modal ------

const modal = document.querySelector('#myModal');


const callbackBtn = document.querySelector(".callback_btn");


const span = document.querySelector(".close");


callbackBtn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



    document.querySelector('.burger').addEventListener('click', () => {
        document.querySelector('.slinky-menu').classList.add('activeBurger')
    })
    document.querySelector('.burgerClose').addEventListener('click', ()=>{
        document.querySelector('.slinky-menu').classList.remove('activeBurger')
    })


    document.querySelector('.callback_btn').addEventListener('click', ()=>{
        document.querySelector('.callback_modal').style.display = 'block'
    })
    document.querySelector('.close').addEventListener('click', ()=>{
        document.querySelector('.callback_modal').style.display = 'none'
    })





})






