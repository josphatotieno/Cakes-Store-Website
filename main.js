const birthdayCakes = document.querySelectorAll('.birthday-cake');

// Check if in viewport
const isInViewport = (item, offset = 200) => {
    const rectTop = item.getBoundingClientRect().top

    return (
        rectTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );

}


const scrollAnimation = () => {

birthdayCakes.forEach((item) => {
    if(isInViewport(item)) {
        item.classList.add('show')
    } 
})
}

// Events
window.addEventListener('load', scrollAnimation);
window.addEventListener('resize', scrollAnimation);
window.addEventListener('scroll', scrollAnimation);


