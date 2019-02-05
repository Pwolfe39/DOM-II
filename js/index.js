// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
//select
//dblclick

// changes the color of h1 fun bus 
let logoHeadingColor = document.querySelector('.logo-heading');
logoHeadingColor.addEventListener('click', () => {
    if (logoHeadingColor.style.color == 'red') {
        logoHeadingColor.style.color = 'blue';
    } else {
        logoHeadingColor.style.color = 'red';
    }
});
console.log(logoHeadingColor);

// dblclick changes the size of h2, welcome to fun bus!
let dbl_returnClick = 'dblclick'
const dbl_click = document.querySelector('div header h2');
dbl_click.addEventListener('dblclick', event => {
    if (dbl_click == dbl_click) {
        dbl_click.style.fontFamily = 'Roboto';
    } else {
        dbl_click.style.color = 'Sans';
    }
});

// mouseover changes the size to h2's let's go 
const mouse_over = document.querySelector('section div h2');
mouse_over.addEventListener('mouseover', () => {
    if (mouse_over >= '3.0rem') {
        mouse_over.style.fontSize = '4rem';
    } else {
        mouse_over.style.fontSize = '3.2rem';
    }
});
console.log(mouse_over);

// mouseout add a highlighted border to the images
const mouse_out = document.querySelector('section div img');
mouse_out.addEventListener('mouseout', () => {
    mouse_out.style.border = '5px solid yellow';
});
console.log(mouse_out);

//mousedown adds a border to all images
const mouse_down = document.querySelectorAll('img');
mouse_down.forEach(e => {
    e.addEventListener('mousedown', event => event.target.style.border = '5px solid dodgerblue');
});
//mouseup exits displaying the border
const mouse_up = document.querySelectorAll('img');
mouse_down.forEach(e => {
    e.addEventListener('mouseup', event => event.target.style.border = 'none');
});




// add a light colored background to the all three trip packages
let key_down = document.querySelectorAll('.content-pick .destination');
key_down = Array.from(key_down);
key_down.forEach(e => {
    e.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'gray';
        event.target.style.border = '5px solid black';
        console.log(`mouse_enter`);
    });

});

// change the color of the background with mouseleave then add and remove the black border with mouse enter then mouseleave
key_down.forEach(e => {
    e.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'initial';
        event.target.style.border = 'none';
        console.log(`mouse_leave`);
    });

});

// right click to change the border of the buttons
context_menu = document.querySelectorAll('.btn');
context_menu.forEach(e => {
    e.addEventListener('contextmenu', event => {
        event.target.style.border = '5px solid darkblue';
        console.log(context_menu);
    });
    
});

// wheel
mouse_wheel = document.querySelector('body');
mouse_wheel.addEventListener('wheel', event => {
    event.target.style.backgroundColor = ' #fbd3a6';
});