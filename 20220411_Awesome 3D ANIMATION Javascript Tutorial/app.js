//Movement Aniation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX, e.pageY);
    let xAsis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAsis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAsis}deg) rotateX(${yAsis}deg)`;
});

//(e) => {}  == function(e){}

//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(10deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
});
//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease-in';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});