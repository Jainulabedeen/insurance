$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#form1").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      
	  diseases1:"required",
	  diseases2:"required",
	  diseases3:"required",
	  diseases4:"required",
	  diseases5:"required",
	  diseases6:"required",
	  diseases7:"required",
	  diseases8:"required",
	  diseases9:"required",
	  diseases10:"required",
	  diseases11:"required",
	  diseases12:"required",
	  diseases13:"required",
	  diseases14:"required",
	  diseases15:"required",
	  diseases16:"required",
	  diseases17:"required",
	  diseases18:"required",
	  diseases19:"required",
	  diseases20:"required",
	  diseases21:"required",
	   diseases22:"required",
	    diseases24:"required"
     
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
	    window.location= "familyMedical.html";
    }
  });
});