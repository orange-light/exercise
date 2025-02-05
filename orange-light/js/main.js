function lazyAnchorScroller() {
    const triggerEl = document.querySelectorAll('.js-lazyAnchorScroller');
    if (triggerEl) {
        triggerEl.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const href = item.getAttribute("href");
                const hrefTargetOffsetTop = document.querySelector(href).offsetTop;
                scroll({
                    top: hrefTargetOffsetTop,
                    behavior: "smooth"
                });
            })
        });
    }
}

function skillCirlce() {
    const triggerEl = document.querySelectorAll('.js-skilCircle');
    if (triggerEl) {
        triggerEl.forEach((item) => {
            const number = item.querySelector('span').textContent.split('%')[0];
            const target = item.querySelector('.p-index-skills-circle-fill');
            let thisNum = 0;
            const interval =setInterval(()=>{
                target.style.backgroundImage = `conic-gradient(#20b2aa ${thisNum++}%, #f4f4f4 0%)`;
                if(thisNum == number){
                    clearInterval(interval);
                }
            },50);
        });
    }
}
function modalAutoGetPhoto() {
    const triggerEl = document.querySelectorAll('.js-modalAutoGetPhoto');
    const target = document.querySelector('#exampleModal01 .modal-body img');

    if (triggerEl) {
        triggerEl.forEach((item) => {
            item.addEventListener('click', (event) => {
                const imgSrc = item.children[0].children[0].attributes[0].nodeValue;
                target.attributes[0].nodeValue = imgSrc;
                // console.log();
            });
        });
    }
}

function toolTip() {
    $('[data-toggle="tooltip"]').tooltip();
}
window.onload = function () {
    lazyAnchorScroller();
    skillCirlce();
    modalAutoGetPhoto();
    toolTip();
}