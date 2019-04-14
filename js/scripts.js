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
