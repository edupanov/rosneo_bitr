const projectImg = document.querySelector('.project_img')
const buildImg = document.querySelector('.build_img')
const exploitationImg = document.querySelector('.exploitation_img')
// const project = document.querySelector('.project')
// const build = document.querySelector('.build')
// const exploitation = document.querySelector('.exploitation')
const sliderItem = document.querySelector('.slider_item')
const sliderTitle = document.querySelector('.slider_title')
const slider = document.querySelector('.main_slider')

const arrayData = [
    {
        src: './assets/img/project.png',
        ChangeSrc: './assets/img/project_full.png',
        title: 'Проектирование',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее о проектировании',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'min_img',
        className: 'project_img'
    },
    {
        src: './assets/img/build.png',
        ChangeSrc: './assets/img/build_full.png',
        title: 'Строительство',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее о строительстве',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'min_img',
        className: 'build_img'
    },
    {
        src: '',
        ChangeSrc: './assets/img/exploitation.png',
        title: 'Эксплуатация',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее об эксплуатации',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'min_img',
        className: 'exploitation_img'
    },

]

const Data = {
    project: {
        src: './assets/img/project.png',
        ChangeSrcFull: './assets/img/project_full.png',
        ChangeSrcMin: './assets/img/project_min.png',
        title: 'Проектирование',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее о проектировании',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'min_img',
        className: 'project_img'
    },
    build: {
        src: './assets/img/build.png',
        ChangeSrcFull: './assets/img/build_full.png',
        ChangeSrcMin: './assets/img/build_min.png',
        title: 'Строительство',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее о строительстве',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'min_img',
        className: 'build_img'
    },
    exploitation: {
        src: './assets/img/exploitation.png',
        ChangeSrcFull: './assets/img/exploitation_full.png',
        ChangeSrcMin: './assets/img/exploitation_min.png',
        title: 'Эксплуатация',
        text: 'Мы развиваем и активно внедряем новые технологии при проектировании и разработке девелоперских проектов, предлагая рынку лучшие решения в своей сфере',
        button: 'Подробнее об эксплуатации',
        changeClassNameFull: 'full_img',
        changeClassNameMin: 'min_img',
        className: 'exploitation_img'
    }
    ,

}

slider.addEventListener('click', (event) => {
    const arrayClassName = arrayData.map(el => el.className)
    const findElemClassName = arrayClassName.find(el => el === event.target.className)
    const findElem = arrayData.find(el => el.className === findElemClassName)


    if (findElemClassName === 'project_img') {
        console.log(111)
        document.querySelectorAll('#slider').innerHTML = `
    <div>
        <h1 className='slider_title'>{findElem.title}</h1>
        <img className={findElem.changeClassNameFull} src={findElem.changeClassNameFull} alt="">
        <div className="change_text">{findElem.text}</div>
        <button className="change_button">{findElem.button}</button>\
    </div>
    <div class="slider_item  build">
        <h2 class="slider_title-change">Строительство</h2>
        <img class={findElem.changeClassNameMin} src={Data.build.ChangeSrc} alt="">

    </div>
    <div class="slider_item exploitation">
        <h2 class="slider_title-change">Эксплуатация</h2>
        <img class={findElem.changeClassNameMin} src={Data.exploitation.ChangeSrc} alt="">
    </div>
    `


    }
    console.log(findElemClassName)
})

// project.addEventListener('click', (event) => {
//     projectImg.src = './assets/img/project_full.png'
//     projectImg.className = 'full_img'
//
//     buildImg.src = './assets/img/build_min.png'
//     buildImg.className = 'min_img'
//
//     exploitationImg.src = './assets/img/exploitation_min.png'
//     exploitationImg.className = 'min_img'
//
// })
// build.addEventListener('click', (event) => {
//     buildImg.src = './assets/img/build_full.png'
//     buildImg.className = 'full_img'
//
//     projectImg.src = './assets/img/project_min.png'
//     projectImg.className = 'min_img'
//
//     exploitationImg.src = './assets/img/exploitation_min.png'
//     exploitationImg.className = 'min_img'
//
// })
// exploitation.addEventListener('click', (event) => {
//     exploitationImg.src = './assets/img/exploitation_full.png'
//     exploitationImg.className = 'full_img'
//
//     buildImg.src = './assets/img/build_min.png'
//     buildImg.className = 'min_img'
//
//     projectImg.src = './assets/img/project_min.png'
//     projectImg.className = 'min_img'
//
// })
