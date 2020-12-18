$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#form1").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
    fname : {
		required: true,
		minlength: 3
		},
	
    email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
		},
	dob : {
		required: true,
	
	
		},
	mobile : {
		required: true,
		mobile:true,
		maxlength:12
		
		},
		nationality:{
			required:true,
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
      //form.submit();
	    window.location= "propertyPremium.html";
    }
  });
    $.validator.addMethod("mobile", function (phone_number, element) {
      phone_number = phone_number.replace(/\s+/g, "");
	  //alert("Hello"+(this.optional(element) || (phone_number.length ==12) && (phone_number.match(/^\[0-9]{12}$/))));
      return this.optional(element) || ((phone_number.length ==12))&& (phone_number.match(/^\(?([9]{1}[7]{1}[1]{1})\)?([0-9]{9})$/));
  }, "Please specify a valid phone number");
  
});