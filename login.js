function check(form) {
    username = new Array("jesus", "jesus", "admin");
    password = new Array("@candyman9977", "@candyman9977", "admin");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('adminhome.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('https://login.i-ready.com')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}