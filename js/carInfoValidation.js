$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
 
  $("#form1").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
     
      cartype: "required",
	  carmodel:"required",
	  brand:"required",
	  yearofmanufacture:"required",
	  claim:"required",
	  carlicense:"required",
	  valueOfCar:"required",
	  dp1:{
		  required:true,
			dp1:true
		  },  
	  customer:"required",
	  license:"required"
     
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
	    window.location= "driver-info.html";
    }
	 
  });
  $.validator.addMethod("dp1", function (date_of_registered, element) {
     
	   var data = date_of_registered.split("-");
	   var todaySelectedDate=date_of_registered;
	 
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
	      vm.dateSelected=todaySelectedDate;
	  // alert(vm.dateSelected);
	   //alert(todayDate+" "+date_of_registered);
	  // alert(selectedYear+" "+selectedMonth+" "+selectedDay);
	  // alert(totalYears);
	   //var age=(Number.parseInt(today.getFullYear())-Number.parseInt(data[0]));
	 // alert("Hello"+data[0]+" "+Number.parseInt(data[0])+" "+today.getFullYear()+" "+today.getMonth()+" "+today.getDay()+" "+data);
//alert(Number.parseInt(today.getFullYear())-Number.parseInt(data[0]));     
	 //&& (date_of_birth.match(/^\(?([9]{1}[7]{1}[1]{1})\)?([0-9]{9})$/));
  }, "Please specify a valid registered date.Must be past date");
  
});