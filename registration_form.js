// Dom element...
const name = document.getElementById('customer_name');
const mobile_number = document.getElementById('num'); 
const email_id = document.getElementById('email_id'); 
const password = document.getElementById('pass_word');
const submit = document.getElementById('submit');
const main = document.getElementById('registration_form');

// addEventListner..
main.addEventListener('submit' , submit_form);
// function submit_form..
function submit_successful(){
     
  const para = document.createElement('p');
  para.id = "success";
  para.appendChild(document.createTextNode(" You Successfully Registered.."));

  const ins =  document.querySelector('#registration_form');
  const bfr = document.querySelector('#name');

  ins.insertBefore(para , bfr);
  setTimeout(function(){
   para.remove();
 },3000);

}
function submit_form(e){
   e.preventDefault();
   if(name.value === '' || mobile_number.value === '' || email_id.value === '' || password.value === ''){
     const para = document.createElement('p');
     para.className = "alert";
     para.appendChild(document.createTextNode(" All Field is Mandatory"));

     const ins =  document.querySelector('#registration_form');
     const bfr = document.querySelector('#name');

     ins.insertBefore(para , bfr);
     setTimeout(function(){
      para.remove();
    },3000);
   }

   else{

    const information = {
      user_Name: name.value,
      user_Mobile_number: mobile_number.value,
      user_Email: email_id.value,
      user_Password:password.value
    }
    // check from the local storage...
    if(localStorage.getItem('info') === null){
      var info = [];
      info.push(information);
      localStorage.setItem('info' , JSON.stringify(info));
    
    }
    else{
      var info = JSON.parse(localStorage.getItem('info'));
      info.forEach(function(infor_mation , index){
        if(infor_mation.user_Mobile_number === information.user_Mobile_number || infor_mation.user_Email === information.user_Email){
          info.splice(index,1);
        }

      });

      info.push(information);
      localStorage.setItem('info' , JSON.stringify(info));

    }

    submit_successful();
   }
  
}


// sign in remaining..