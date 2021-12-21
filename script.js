const projectImg = document.querySelector('.project_img')
const buildImg = document.querySelector('.build_img')
const exploitationImg = document.querySelector('.exploitation_img')
const project = document.querySelector('.project')
const build = document.querySelector('.build')
const exploitation = document.querySelector('.exploitation')
const sliderItem = document.querySelector('.slider_item')
const sliderTitle = document.querySelector('.slider_title')
let slider = document.querySelector('.main_slider')

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
    console.log(event.target.className)

    switch (event.target.className) {
        case 'project_img':
            slider.innerHTML = `
            <div class="slider_item project">
                <h1 class='slider_main_title'>${sliderData.project.title}</h1>
                <img class='${sliderData.project.changeClassNameFull}' src='${sliderData.project.changeSrcFull}' alt="">
                <div class="change_text">${sliderData.project.text}</div>
                <button class="change_button">${sliderData.project.button}</button>\
            </div>
            <div class="slider_item  build">
                <h2 class="slider_title-rotate">${sliderData.build.title}</h2>
                <img class='build_img' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.build.changeSrcMin}' alt="">
            </div>
            <div class="slider_item exploitation">
                <h2 class="slider_title-rotate">${sliderData.exploitation.title}</h2>
                <img class='exploitation_img' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.exploitation.changeSrcMin}' alt="">
            </div>
    `;
            break;
        case 'build_img':
            slider.innerHTML = `
            <div class="slider_item  project">
                <h2 class="slider_title-rotate">${sliderData.project.title}</h2>
                <img class='project_img' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.project.changeSrcMin}' alt="">
            </div>
            <div class="slider_item  build" >
                <h1 class='slider_main_title'>${sliderData.build.title}</h1>
                <img class='${sliderData.build.changeClassNameFull}' src='${sliderData.build.changeSrcFull}' alt="">
                <div class="change_text">${sliderData.build.text}</div>
                <button class="change_button">${sliderData.build.button}</button>\
            </div>
            <div class="slider_item exploitation">
                <h2 class="slider_title-rotate">${sliderData.exploitation.title}</h2>
                <img class='exploitation_img' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.exploitation.changeSrcMin}' alt="">
            </div>
    `;
            break;
        case 'exploitation_img':
            slider.innerHTML = `
            <div class="slider_item  project">
                <h2 class="slider_title-rotate">${sliderData.project.title}</h2>
                <img class='project_img' src='${sliderData.project.changeSrcMin}' style="max-width: 120px ; z-index: 1 ;" alt="">
            </div>
            <div class="slider_item  build">
                <h2 class="slider_title-rotate">${sliderData.build.title}</h2>
                <img class='build_img' style="max-width: 120px ; z-index: 1 ;" src='${sliderData.build.changeSrcMin}' alt="">
            </div>
            <div class='slider_item exploitation'>
                <h1 class='slider_main_title'>${sliderData.exploitation.title}</h1>
                <img class='${sliderData.exploitation.changeClassNameFull}' src='${sliderData.exploitation.changeSrcFull}' alt="">
                <div class="change_text">${sliderData.exploitation.text}</div>
                <button class="change_button">${sliderData.exploitation.button}</button>\
            </div>
    `;
            break;
    }
})

