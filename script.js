const slider = document.querySelector('.main_slider')
const projectChecked = document.querySelector('.project_checked')

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

new Swiper('.image-slider', {
    navigation: {
        nextEl: '.slider-button-next'
    },
    // отключает свайпы
    simulateTouch: false,
    // количество показанных слайдов (можно не целые числа)
    slidesPerView: 2.5,
    // отключает сайдер при малом кол-ве картинок
    watchOverFlow:true,
    // количество пролистываемых слайдов
    // slidesPerGroup: 2,
    // бесконечный слайдер
    loop: true
})

