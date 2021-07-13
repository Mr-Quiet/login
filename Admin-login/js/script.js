let userNameSuccessInput = document.querySelector("#usernameSuccess > input"),
	userName = document.getElementById("usernameSuccess"),
	userPass = document.getElementById("userpassSuccess"),
	userPassSuccessInput = document.querySelector("#userpassSuccess > input"),
	eye = document.querySelector(".login__userpass img"),
	submit = document.querySelector(".login__btn button");
	
let regUser = /^(\w{4,})|([a-z_]{4,})$/gi;
let regPassword = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gi;

let errorsContainer = document.querySelector('.errors-container');
function showErrorMSG(text) {
	errorsContainer.insertAdjacentHTML('beforeend', `
		<div class="error-toast">
			<div class="error-progress"></div>
			<p class="error-text">${text}</p>
		</div>
	`);
	let toast = document.querySelector('.error-toast:last-child .error-progress');	
	let progress_width = 100;
	setInterval(() => {		
		if (progress_width <= 0) {
			toast.closest('.error-toast').remove();
		} else {
			progress_width = progress_width - 2;
			toast.style.width = progress_width + "%";
		}
	}, 100);
}

function validUser() {
	if (userNameSuccessInput.value == userNameSuccessInput.value.match(regUser)) {
		userName.classList.add("login__username_success");
		return true;
	} else {
		userName.classList.remove("login__username_success");
		return false;
	}
}

function validPassword() {
	if (userPassSuccessInput.value == userPassSuccessInput.value.match(regPassword)) {
		userPass.classList.add("login__userpass_success");
		return true;
	} else  {
		userPass.classList.remove("login__userpass_success");
		return false;
	}

}

function eyeDis() {
	let src = "/img/icons/eye_def.svg";
	if (eye.getAttribute("src") == src) {
		eye.setAttribute("src", "/img/icons/eye-dis.svg");
		userPassSuccessInput.setAttribute("type", "text");
	} else {
		eye.setAttribute("src", "/img/icons/eye_def.svg");
		userPassSuccessInput.setAttribute("type", "password");
	}
}

function submitForm() {
	if (!validUser() && !validPassword()) {
		showErrorMSG("Поле логин не может быть пустым, или содержать кириллицу.");
		showErrorMSG("Пароль должен быть не менее 8 символов, иметь как миммум 1 букву в верхнем и нижних регистрах, и не иметь проблов");
		event.preventDefault();
	}else if(!validUser()){
		showErrorMSG("Поле логин не может быть пустым, или содержать кириллицу.");
		event.preventDefault();
	}else if(!validPassword()){
		showErrorMSG("Пароль должен быть не менее 8 символов, иметь как миммум 1 букву в верхнем и нижних регистрах, и не иметь проблов");
		event.preventDefault();
	}
}
userNameSuccessInput.addEventListener("input", validUser);
userPassSuccessInput.addEventListener("input", validPassword);
eye.addEventListener("click", eyeDis);
submit.addEventListener("click", submitForm);