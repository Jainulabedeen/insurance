$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#form1").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
    coverType : {
		required: true,
		
		},
	maritalStatus : {
		required: true,
		
		},
    visa: {
        required: true,

		},
	dp1 : {
		required: true,
		dp1:true
	
		},
	mobile : {
		required: true,
		mobile:true,
		maxlength:12
		
		},
		gender:{
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
      form.submit();
	    window.location= "family-medical-location.html";
    }
  });
    $.validator.addMethod("mobile", function (phone_number, element) {
      phone_number = phone_number.replace(/\s+/g, "");
	  //alert("Hello"+(this.optional(element) || (phone_number.length ==12) && (phone_number.match(/^\[0-9]{12}$/))));
      return this.optional(element) || ((phone_number.length ==12))&& (phone_number.match(/^\(?([9]{1}[7]{1}[1]{1})\)?([0-9]{9})$/));
  }, "Please specify a valid phone number");
  
  $.validator.addMethod("dp1", function (date_of_birth, element) {
       var data = date_of_birth.split("-");
	   var todaySelectedDate=date_of_birth;
		vm.dobSelected=todaySelectedDate;
	   var today=new Date();
	   var currentYear=today.getFullYear();
	   var currentMonth=today.getMonth()+1;
	   var currentDay=today.getDate();
	   var todayDate=currentYear+"-"+currentMonth+"-"+currentDay;
	 
	   var selectedYear=Number.parseInt(data[0]);
	   var selectedMonth=Number.parseInt(data[1]);
	   var selectedDay=Number.parseInt(data[2]);
	
	   if(selectedYear==currentYear&&selectedMonth<=currentMonth&&selectedDay<=currentDay){
			return this.optional(element) || (true); 	  
	   }
	   if(selectedYear<currentYear&&selectedYear>1900){
		   return this.optional(element) || (true); 
	   }
  }, "Please specify a valid age");
});