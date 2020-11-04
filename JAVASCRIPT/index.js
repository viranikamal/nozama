// DOM elements
const hum_menu = document.querySelector('#humberger');
const display_menu = document.getElementById('display_side_menu');
const location_button = document.querySelector('#lct');
const location_box = document.getElementById('location_box');
const remove = document.querySelector('#remove');
const signin_btn = document.querySelector('#reg_form_btn')
const sign_form = document.getElementById('sign-form');
const body = document.getElementById("body");
// Events...
hum_menu.addEventListener('click' , funOne);
location_button.addEventListener('click' , funTwo);
remove.addEventListener('click' , funThree);
signin_btn.addEventListener('click' , funFour);
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

// funFour function..
function funFour(e){
  e.preventDefault();
  sign_form.style.display = "block";
  document.getElementById('Image_01').style.marginTop = "-541px";
  setTimeout(function(){
    sign_form.style.display = "none";
    document.getElementById('Image_01').style.marginTop = "0px";
  },10000);
 
}

