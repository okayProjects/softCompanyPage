// aside-menu activator

const burger = document.querySelector('.burger');
const activeElements = [...document.querySelectorAll('.active')];

const displayAsideMenu = () => {
    for (let key in activeElements) {
        activeElements[key].classList.toggle('show')
    }
}

burger.addEventListener('click', displayAsideMenu);

//jumbotron animation

let activeSlide = 0;
const colorImg = document.querySelector('.color');
const greyImg = document.querySelector('.grey');
const h1 = document.querySelector('.member h1');
const h2 = document.querySelector('.member h2');

const colorImages = ['assets/welcome-slider/s1.png', 'assets/welcome-slider/s2.png', 'assets/welcome-slider/s3.png'];
const greyImages = ['assets/welcome-slider/s1a.png', 'assets/welcome-slider/s2a.png', 'assets/welcome-slider/s3a.png'];
const names = ['Anna Deadline', 'Mark Flexible', 'Joe TeamPlayer'];
const professions = ['JS Programmer', 'UX UI designer', 'front-end developer'];

const changeSlideTime = 5000;

const changeSlide = () => {
    activeSlide++;

    if (activeSlide === colorImages.length) {
        activeSlide = 0;
    }

    colorImg.src = colorImages[activeSlide];
    greyImg.src = greyImages[activeSlide];
    h1.textContent = names[activeSlide];
    h2.textContent = professions[activeSlide];
}

setInterval(changeSlide, changeSlideTime);

//menu-go-to-section

$('aside li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]"
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    });
})


//opinions

const slideList = [
    {
        image: 'assets/opinions/portrait1.jpg',
        opinion: 'Opinion no ONE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium',
        jobTitle: 'Job Title One'
    },
    {
        image: 'assets/opinions/portrait2.jpg',
        opinion: 'Opinion no TWO: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium',
        jobTitle: 'Job Title TWO'
    },
    {
        image: 'assets/opinions/portrait3.jpg',
        opinion: 'Opinion no THREE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium',
        jobTitle: 'Job Title THREE'
    },
    {
        image: 'assets/opinions/portrait4.jpg',
        opinion: 'Opinion no FOUR: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium',
        jobTitle: 'Job Title FOUR'
    },
    {
        image: 'assets/opinions/portrait5.jpg',
        opinion: 'Opinion no FIVE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error magnam dolor numquam provident cupiditate laudantium',
        jobTitle: 'FIVE'
    }
]

console.log(slideList);


const image = document.querySelector('.s4-carusel-photo-wrapper img');
const opinion = document.querySelector('.s4-carusel-wrapper blockquote i');
const jobTitle = document.querySelector('.s4-carusel-wrapper h3');
const time = 5000;
let activeOpinionSlide = 0;

const changeOpinionSlide = () => {
    activeOpinionSlide++;
    if (activeOpinionSlide === slideList.length) {
        activeOpinionSlide = 0;
    }
    image.src = slideList[activeOpinionSlide].image;
    opinion.textContent = slideList[activeOpinionSlide].opinion;
    jobTitle.textContent = slideList[activeOpinionSlide].jobTitle;
}

setInterval(changeOpinionSlide, time);
