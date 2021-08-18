
// var submit=document.getElementById('register');
// var signin=document.getElementById('signin');



function store(){

var email=document.getElementById('email');
var password=document.getElementById('psw');
var cpassword=document.getElementById('psw-repeat');

localStorage.setItem('email',email.value);
localStorage.setItem('password',password.value);
localStorage.setItem('confirmPassword',cpassword.value);
alert("Your account has been created successfully.");
}


function check(){
var useremail=document.getElementById('useremail');
var userpassword=document.getElementById('userpsw');

var storeemail= localStorage.getItem('email');
var storepw= localStorage.getItem('password');

if(storeemail == useremail.value && storepw == userpassword.value){
    alert("You are logged in successfully");
}
else{
alert("Error in login");
}

}

submit.addEventListener("click", store);
signin.addEventListener("click", check);