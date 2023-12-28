window.addEventListener('scroll', () => {
    const SCT = window.scrollY;
    if (SCT > 0) {
        document.querySelector('#Header .header_wrap').classList.add('on')
    } else {
        document.querySelector('#Header .header_wrap').classList.remove('on')
    }
})


const VISUAL_SLIDE = new Swiper('.visual_slide', {
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },

    // slideActiveClass: 'on',
    // on: {
    //     init: function () {

    //     }
    // }
});

const MAIN_SLIDE_PREV = document.querySelector('.MainVisual .control_box .left')
const MAIN_SLIDE_NEXT = document.querySelector('.MainVisual .control_box .right')
MAIN_SLIDE_PREV.addEventListener('click', function () {
    VISUAL_SLIDE.slidePrev();
})
MAIN_SLIDE_NEXT.addEventListener('click', function () {
    VISUAL_SLIDE.slideNext();
})

const MAIN_SLIDE_PAUSE = document.querySelector('.MainVisual .control_box .pause')
MAIN_SLIDE_PAUSE.addEventListener('click', function () {
    this.classList.toggle('on');
    if (this.classList.contains('on')) {
        VISUAL_SLIDE.autoplay.stop();
    } else {
        VISUAL_SLIDE.autoplay.start();
    }
})

const MAIN_ESG_CON = document.querySelectorAll('.MainESG .ESG_con .con_box');
MAIN_ESG_CON.forEach((it) => {
    it.addEventListener('mouseenter', () => {
        for (var i = 0; i < MAIN_ESG_CON.length; i++) {
            MAIN_ESG_CON[i].classList.remove('on');
        }
        it.classList.add('on');
    })
})

const MBTN = document.querySelector('.mbtn')
MBTN.addEventListener('click', () => {
    document.querySelector('#Header .header_wrap .gnb').classList.toggle('on');
    document.querySelector('#Header .header_wrap .util').classList.toggle('on');
})