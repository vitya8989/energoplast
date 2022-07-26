const projectSlider2307 = new Swiper('.project_slider-2307__slider', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.project_slider-2307__pagination',
        clickable: true,
    },
    autoHeight: true,
    spaceBetween: 20,
});

window.addEventListener('load', () => {
    projectSlider2307.update();
});
const projectSlider2307Border = document.querySelectorAll('.project_slider-2307__border');
const projectSlider2307Top = document.querySelector('.project_slider-2307__top');

const mediaQuery959 = window.matchMedia('(max-width: 959.9px)');

function headerTabletChange959(e) {
    if (e.matches) {
        projectSlider2307.on('slideNextTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 2) {
                projectSlider2307Top.scrollLeft += 100;
            }
            if (projectSlider2307.activeIndex === 3) {
                projectSlider2307Top.scrollLeft += 105;
            }
            if (projectSlider2307.activeIndex === 4) {
                projectSlider2307Top.scrollLeft += 210;
            }
            if (projectSlider2307.activeIndex === 5) {
                projectSlider2307Top.scrollLeft += 240;
            }
            if (projectSlider2307.activeIndex === 6) {
                projectSlider2307Top.scrollLeft += 300;
            }
        });
        projectSlider2307.on('slidePrevTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 1) {
                projectSlider2307Top.scrollLeft -= 300;
            }
            if (projectSlider2307.activeIndex === 2) {
                projectSlider2307Top.scrollLeft -= 110;
            }
            if (projectSlider2307.activeIndex === 3) {
                projectSlider2307Top.scrollLeft -= 215;
            }
            if (projectSlider2307.activeIndex === 4) {
                projectSlider2307Top.scrollLeft -= 250;
            }
            if (projectSlider2307.activeIndex === 5) {
                projectSlider2307Top.scrollLeft -= 190;
            }
        });
    } else {
        projectSlider2307.on('slideNextTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 1) {
                projectSlider2307Top.scrollLeft += 180;
            }
            if (projectSlider2307.activeIndex > 1) {
                projectSlider2307Top.scrollLeft += 248;
            }
        });
        projectSlider2307.on('slidePrevTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 5) {
                projectSlider2307Top.scrollLeft -= 180;
            }
            if (projectSlider2307.activeIndex < 5) {
                projectSlider2307Top.scrollLeft -= 248;
            }
        });
    }
}

mediaQuery959.addListener(headerTabletChange959);
headerTabletChange959(mediaQuery959);

const projectSlider2307SlideContent = document.querySelectorAll('.project_slider-2307__slide_content');
for (let k = 0; k < projectSlider2307SlideContent.length; k++) {
    let projectSlider2307Accordion = projectSlider2307SlideContent[k].querySelectorAll('.project_slider-2307__slide_accordion');
    for (let i = 0; i < projectSlider2307Accordion.length; i++) {
        if (window.innerWidth < 960) {
            if (projectSlider2307Accordion[i].classList.contains('open')) {
                projectSlider2307Accordion[i].classList.remove('open');
            }
            projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = '0';
        } else {
            if (projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').classList.contains('open')) {
                projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = `${projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').scrollHeight}px`;
            }
            if (!projectSlider2307Accordion[0].classList.contains('open')) {
                projectSlider2307Accordion[i].classList.add('open');
            }
        }
        window.addEventListener('resize', function () {
            if (window.innerWidth < 960) {
                if (projectSlider2307Accordion[i].classList.contains('open')) {
                    projectSlider2307Accordion[i].classList.remove('open');
                }
                projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = '0';
            } else {
                if (projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').classList.contains('open')) {
                    projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = `${projectSlider2307Accordion[i].querySelector('.project_slider-2307__slide_accordion_body').scrollHeight}px`;
                }
                if (!projectSlider2307Accordion[0].classList.contains('open')) {
                    projectSlider2307Accordion[i].classList.add('open');
                }
            }
        });
        projectSlider2307Accordion[i].onclick = function (e) {
            if (e.target.closest('.project_slider-2307__slide_accordion_head')) {
                for (let j = 0; j < projectSlider2307Accordion.length; j++) {
                    if (projectSlider2307Accordion[j] !== this && projectSlider2307Accordion[j].classList.contains('open')) {
                        projectSlider2307Accordion[j].classList.remove('open');
                        projectSlider2307Accordion[j].querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = '0';
                    }
                }
                if (!this.classList.contains('open')) {
                    this.classList.add('open');
                    this.querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = `${this.querySelector('.project_slider-2307__slide_accordion_body').scrollHeight}px`;
                } else {
                    this.classList.remove('open');
                    this.querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = '0';
                    if (this.querySelector('.project_slider-2307__slide_accordion_body').classList.contains('open')) {
                        this.querySelector('.project_slider-2307__slide_accordion_body').classList.contains('remove');
                    }
                }
                setTimeout(function () {
                    projectSlider2307.update();
                }, 100);
                setTimeout(function () {
                    projectSlider2307.update();
                }, 400);
            }
        }
    }
}