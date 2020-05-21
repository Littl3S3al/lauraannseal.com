const navSm = document.querySelector('header.hide-pro-up');
const navLg = document.querySelector('header.hide-until-pro');
const landing = document.querySelector('#landing');
const brand = document.querySelector('#brand');
const design = document.querySelector('#design');
const productions = document.querySelector('#production');
const getInTouch = document.querySelector('#get-in-touch');
const footer = document.querySelector('footer');

const windowY = window.innerHeight;


window.addEventListener('scroll', () => {
    let brandTop = brand.getBoundingClientRect().top;
    let designTop = design.getBoundingClientRect().top;
    let productionsTop = productions.getBoundingClientRect().top;
    let getInTouchTop = getInTouch.getBoundingClientRect().top;
    let footerTop = footer.getBoundingClientRect().top;

    if(brandTop <= windowY && brandTop > 0){
        console.log('brand');
    } 
    if( designTop <= windowY && designTop > 0){
        console.log('design');
    } 
    if( productionsTop <= windowY && productionsTop > 0){
        console.log('production');
    } 
    if(getInTouchTop <= windowY && getInTouchTop > 0){
        console.log('get in touch');
    } 
    if( footerTop <= windowY){
        console.log('footer');
    }

})