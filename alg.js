var login = document.querySelector('body');
login.addEventListener('keydown', function(event) {
  var username = document.getElementById('user');
  var password = document.getElementById('password');
  var loginbutton = document.querySelector('.loginbutton');
  if(username.value && password.value != 0) {
    console.log('is different');
    loginbutton.style.backgroundColor = "#7a7aff";
  } else {
    loginbutton.style.backgroundColor = "#b5e2f0";
  }
});