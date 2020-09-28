const form = document.getElementById('loginFormId');

function loginValidate() {

	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail = document.getElementById('loginEmail');
	var inputPassword = document.forms["loginForm"]["loginPassword"];

	if(loginEmail.value == "") {
		loginEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "This field cannot be empty";
        acumErrores ++;
    }else if(!emailValidator(loginEmail.value)){
		loginEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Email format is not correct";
		acumErrores ++;
	}
    if(loginPassword.value == "") {
		loginPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "This field cannot be empty";
		acumErrores ++;
	}
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function emailValidator(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}