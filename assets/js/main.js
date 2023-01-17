/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')

navToggle.addEventListener('click', event => {
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', event => {
    navMenu.classList.remove('show-menu')
})


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(link => link.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('#header')

const scrollHeader = () => {
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});


/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});


/* Link active featured */

const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured() {
    linkFeatured.forEach(link => link.classList.remove('active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(link => link.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home__title, .popular__containerr, .features__img, .featured__filters')
sr.reveal('.home__subtitle', {delay: 500})
sr.reveal('.home__elec', {delay: 600})
sr.reveal('.home__img', {delay: 800})
sr.reveal('.home__car-data', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.home__button', {delay: 1000, origin: 'bottom'})
sr.reveal('.about__group, .offer__data', {origin: 'left'})
sr.reveal('.about__data, .offer__img', {origin: 'right'})
sr.reveal('.features__map', {delay: 600, origin: 'bottom'})
sr.reveal('.features__card', {interval: 300})
sr.reveal('.featured__card, .logos__content, .footer__content', {interval: 100})

