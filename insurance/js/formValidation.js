// Document is ready 
$(document).ready(function () { 
	
// Validate Username 
	$('#usercheck').hide();	 
	let usernameError = true; 
	$('#fname').keyup(function () { 
		validateUsername(); 
	}); 
	$('#usercheck2').hide();	 
	let usernameError2 = true; 
	$('#lname').keyup(function () { 
		validateUsername2(); 
	});
	
	function validateUsername() { 
	let usernameValue = $('#fname').val(); 
	if (usernameValue.length == '') { 
	$('#usercheck').show(); 
		usernameError = false; 
		return false; 
	} 
	else if((usernameValue.length < 3)|| 
			(usernameValue.length > 10)) { 
		$('#usercheck').show(); 
		$('#usercheck').html 
("**length of username must be between 3 and 10"); 
		usernameError = false; 
		return false; 
	} 
	else { 
		$('#usercheck').hide(); 
	} 
	} 
	
	function validateUsername2() { 
	let usernameValue = $('#lname').val(); 
	if (usernameValue.length == '') { 
	$('#usercheck2').show(); 
		usernameError2 = false; 
		return false; 
	} 
	else if((usernameValue.length < 3)|| 
			(usernameValue.length > 10)) { 
		$('#usercheck2').show(); 
		$('#usercheck2').html 
("**length of username must be between 3 and 10"); 
		usernameError2 = false; 
		return false; 
	} 
	else { 
		$('#usercheck2').hide(); 
	} 
	} 

// Validate Email 
	const email = 
		document.getElementById('email'); 
	email.addEventListener('blur', ()=>{ 
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
	let s = email.value; 
	if(regex.test(s)){ 
		email.classList.remove( 
				'is-invalid'); 
		emailError = true; 
		} 
		else{ 
			email.classList.add( 
				'is-invalid'); 
			emailError = false; 
		} 
	}) 
	
// Validate Password 
	$('#passcheck').hide(); 
	let passwordError = true; 
	$('#password').keyup(function () { 
		validatePassword(); 
	}); 
	function validatePassword() { 
		let passwrdValue = 
			$('#password').val(); 
		if (passwrdValue.length == '') { 
			$('#passcheck').show(); 
			passwordError = false; 
			return false; 
		} 
		if ((passwrdValue.length < 3)|| 
			(passwrdValue.length > 10)) { 
			$('#passcheck').show(); 
			$('#passcheck').html("**length of your password must be between 3 and 10"); 
			$('#passcheck').css("color", "red"); 
			passwordError = false; 
			return false; 
		} else { 
			$('#passcheck').hide(); 
		} 
	} 
		
// Validate Confirm Password 
	$('#conpasscheck').hide(); 
	let confirmPasswordError = true; 
	$('#conpassword').keyup(function () { 
		validateConfirmPasswrd(); 
	}); 
	function validateConfirmPasswrd() { 
		let confirmPasswordValue = 
			$('#conpassword').val(); 
		let passwrdValue = 
			$('#password').val(); 
		if (passwrdValue != confirmPasswordValue) { 
			$('#conpasscheck').show(); 
			$('#conpasscheck').html( 
				"**Password didn't Match"); 
			$('#conpasscheck').css( 
				"color", "red"); 
			confirmPasswordError = false; 
			return false; 
		} else { 
			$('#conpasscheck').hide(); 
		} 
	} 
	
// Submitt button 
	$('#submitbtn').click(function () { 
		validateUsername(); 
		validateUsername2(); 
		validatePassword(); 
		validateConfirmPasswrd(); 
		validateEmail(); 
		if ((usernameError == true) && 
			(passwordError == true) && 
			(confirmPasswordError == true) && 
			(emailError == true)) { 
			return true; 
		} else { 
			return false; 
		} 
	}); 
}); 
