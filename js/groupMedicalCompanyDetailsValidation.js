$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#form1").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
    cname : {
		required: true,
		
		},
	details : {
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
      //form.submit();
	    vm.submitForm();
    }
  });
    $.validator.addMethod("mobile", function (phone_number, element) {
      phone_number = phone_number.replace(/\s+/g, "");
	  //alert("Hello"+(this.optional(element) || (phone_number.length ==12) && (phone_number.match(/^\[0-9]{12}$/))));
      return this.optional(element) || ((phone_number.length ==12))&& (phone_number.match(/^\(?([9]{1}[7]{1}[1]{1})\)?([0-9]{9})$/));
  }, "Please specify a valid phone number");
  
  $.validator.addMethod("dob", function (date_of_birth, element) {
      //date_of_birth = date_of_birth.replace(/\s+/g, "");
	   var data = date_of_birth.split("-");
	   var today=new Date();
	   var age=(Number.parseInt(today.getFullYear())-Number.parseInt(data[0]));
	 // alert("Hello"+data[0]+" "+Number.parseInt(data[0])+" "+today.getFullYear()+" "+today.getMonth()+" "+today.getDay()+" "+data);
//alert(Number.parseInt(today.getFullYear())-Number.parseInt(data[0]));     
	 return this.optional(element) || (age>18 && age<=65);//&& (date_of_birth.match(/^\(?([9]{1}[7]{1}[1]{1})\)?([0-9]{9})$/));
  }, "Please specify a valid phone number");
});