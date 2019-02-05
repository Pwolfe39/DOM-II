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
   if(logoHeadingColor.style.color == 'red') {
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
    if(dbl_click == dbl_click ) {
    dbl_click.style.fontFamily = 'Roboto';
    } else {
        dbl_click.style.color = 'Sans';
    }
});

// mouseover changes the size to h2's let's go 
const mouse_over = document.querySelector('section div h2');
mouse_over.addEventListener('mouseover', () => {
    if(mouse_over >= '3.0rem') {
    mouse_over.style.fontSize = '4rem';
    } else  {
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

//
const 

// use the wheel event to display whatever I want while the page is being scrolled

// const mouse_down = document.querySelectorAll('.navlink');
// mouse_down.addEventListener('mousedown', function() {
//     mouse_down.style.color = 'red';
    
// });
// console.log(Array.from(mouse_down));

// const mouse_down = '';
// const mouse_down = document.querySelectorAll('img');
// mouse_down.forEach( (element) =>  {
//     element.addEventListener('click', event => {
//         if(event.target == mouse_down) {

//         }
//     });
   
//     console.log(element);
// });