$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#form1").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      ownershipStatus: "required",
      typeOfHome: "required",
	  plan:"required",
	  constructionType:"required",
	  itemValue:"required",
	  buildingValue:"required",
	  itemValueNeed:"required",
	  itemName:"required",
	  itemValue:"required",
	  helperName:"required",
     passportNumber:"required",
     claim:"required"
     
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
	    window.location= "propertyPersonalDetails.html";
    }
  });
});