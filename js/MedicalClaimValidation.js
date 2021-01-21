$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#form1").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
    insname : {
		required: true,
		},
	mobile : {
		required: true,
	
		},
    email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
		},
	
	insuranceIdNo : {
		required: true,
		},
		
	dp1 : {
		required: true,
		},
	placeOfTreat : {
		required: true,
		},
	claimAmount : {
		required: true,
		},
	bankName : {
		required: true,
		},
	branch : {
		required: true,
		},
	actNo : {
		required: true,
		},
	ibnNo : {
		required: true,
		},
	files : {
		required: true,
		},
		
		
	message : {
		required: true,
		
		}
	
      },
    // Specify validation error messages
    messages: {
     
    },
	highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
		 vm.formSubmit();
      //form.submit();
	  //  window.location= "login.html";

    }
  });
});