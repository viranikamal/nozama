// DOM elements
const hum_menu = document.querySelector('#humberger');
const display_menu = document.getElementById('display_side_menu');
// Events...
hum_menu.addEventListener('click' , funOne);

// function..
function funOne(e){
  e.preventDefault();
   display_menu.style.transition = "0.9s";
   display_menu.style.marginLeft = "0px";

   display_menu.style.zIndex= "3";
   setTimeout(function(){

    display_menu.style.marginLeft = "-900px"

   },4000);


  
}

