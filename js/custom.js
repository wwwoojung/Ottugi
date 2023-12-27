const VISUAL_SLIDE = new Swiper('.visual_slide', {
    loop: true,
});

const MAIN_ESG_CON = document.querySelectorAll('.MainESG .ESG_con .con_box');
// const MAIN_ESG_CON = document.querySelector('.MainESG .ESG_con .con_box');
// MAIN_ESG_CON.addEventListener('mouseover', function () {
//     MAIN_ESG_CON.classList.add('on');
// })

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
})