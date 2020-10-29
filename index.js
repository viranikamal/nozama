// DOM elements
const hum_menu = document.querySelector('#humberger');
const display_menu = document.getElementById('display_side_menu');
const location_button = document.querySelector('#lct');
const location_box = document.getElementById('location_box');
const remove = document.querySelector('#remove');
// Events...
hum_menu.addEventListener('click' , funOne);
location_button.addEventListener('click' , funTwo);
remove.addEventListener('click' , funThree);
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

// funTwo function...
function funTwo(e){
  e.preventDefault();
  location_box.style.display = "block";
}

// funThree function..
function funThree(e){
  e.preventDefault();
 location_box.style.display = "none";
}
