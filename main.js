const cakes = document.querySelectorAll('.cake');

// Check if in viewport
const isInViewport = (item, offset = 200) => {
    const rectTop = item.getBoundingClientRect().top

    return (
        rectTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );

}


const scrollAnimation = () => {
    cakes.forEach((item) => {
        if(isInViewport(item)) {
            item.classList.add('show')
        } 
    })
}

// Events
window.addEventListener('load', scrollAnimation);
window.addEventListener('resize', scrollAnimation);
window.addEventListener('scroll', scrollAnimation);

