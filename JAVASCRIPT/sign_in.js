const login_btn = document.getElementById('login_btn');
const email_phone = document.getElementById('email_phone');
const login = document.getElementById('sign_nozama_form');

login.addEventListener('submit', login_form);

// sign in....
function login_form(e) {
  e.preventDefault();
  if (email_phone.value === '') {
    const para = document.createElement('p');
    para.className = "alert";
    para.appendChild(document.createTextNode(" All Field is Mandatory"));

    const ins2 = document.querySelector('#sign_nozama_form');
    const bfr2 = document.querySelector('#fetch_login');

    ins2.insertBefore(para, bfr2);
    setTimeout(function () {
      para.remove();
    }, 3000);
  }

  else {
    var info = JSON.parse(localStorage.getItem('info'));
    info.forEach(function (infor_mation) {
      if (infor_mation.user_Mobile_number === email_phone.value || infor_mation.user_Email === email_phone.value) {
        const para = document.createElement('p');
        para.id = "success";
        para.appendChild(document.createTextNode(" You Successfully Login.."));


        const ins2 = document.querySelector('#sign_nozama_form');
        const bfr2 = document.querySelector('#fetch_login');


        ins2.insertBefore(para, bfr2);
        setTimeout(function () {
          para.remove();
        }, 3000);

         setTimeout(function () {
        // I just add functionalities. I am not adding webPages.... 
          location.replace('http://127.0.0.1:5500/nozma/index.html');

         },4000);
     

      }


      
    });

  
  }
}