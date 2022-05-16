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

const arr = [[2,3,4],[4,5,6],[9,8,7]];

function diagonalDifference(arr) {
    // Write your code here
    let leftToRight = [];
    let rightToLeft = [];
    
    arr[0].forEach(num => {
        if(num[0]) {
            console.log(num[0])
            leftToRight.push(num[0])
        }
        
    })

    console.log(leftToRight);
    
    arr[1].forEach(num => {
        if(num[1]) {
            leftToRight.push(num[1])
        }
        
    })
    
    arr[2].forEach(num => {
         if(num[2]) {
            leftToRight.push(num[2])
        }
    })
    
    arr[0].forEach(num => {
        if(num[2]) {
            rightToLeft.push(num[2])
        }
        
    })
    
    arr[1].forEach(num => {
        if(num[1]) {
            rightToLeft.push(num[1])
        }
        
    })
    
    arr[2].forEach(num => {
         if(num[0]) {
            rightToLeft.push(num[0])
        }
    })
    console.log(leftToRight)
    
    // let left = leftToRight.reduce((a,b) => a + b);
    // let right = rightToLeft.reduce((a,b)=> a + b);
    // let diff = left - right;
    // return Math.abs(diff)
}


diagonalDifference(arr);