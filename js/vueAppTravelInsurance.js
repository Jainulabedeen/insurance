

const vm = new Vue({
        el: '#app',
		
        data: {
			carMakeSelected: '',
                carModelSelected: '',
                monthSelected: '0',
                daySelected: '0',
                yearSelected:'0' ,
                valueOfCar: '',
                carTypeSelected: '',
                brandChecked: '',
                yearofmanufacture:'',
				claimSelected:'',
				existingUserChecked:'',
				uaeLicensedSelected:'',
				plicyExpireChecked:'',
				fname:'',
				lname:'',
				email:'',
				dobmonth:'0',
				dobday:'0',
				dobyear:'0',
				mobile:'',
				nationality:'',
				alldata:'',
				registeredDate:'',
				dateOfBirth:''
		 
		 
		 
        },
		
		computed: {
     
	},
	methods:{
 submitForm:function(){
			this.registeredDate=this.yearSelected+"-"+this.monthSelected+"-"+this.daySelected;
			this.dateOfBirth=this.dobyear+"-"+this.dobmonth+"-"+this.dobday;
			
			alert(" "+" "+this.carMakeSelected);
            axios.post('http://buhaira.herokuapp.com/api/motor',{
				car_make:this.carMakeSelected,
				car_model:this.carModelSelected,
				first_registration:this.registeredDate,
				car_value:this.carValue,
				car_type:this.carTypeSelected,
				car_brand:this.brandChecked,
				mfg_year:this.yearofmanufacture,
				file_claim:this.claimSelected,
				exist_customer:this.existingUserChecked,
				uae_license:this.uaeLicensedSelected,
				prv_policy:this.plicyExpireChecked,
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
				dob:this.dateOfBirth,
				mobile:this.mobile,
				nationality:this.nationality

			}).then((res) => {
				
				
			alert(res.data.carMakeSelected);
			 
			 
                     //Perform Success Action
                 }).catch((error) => {
                     // error.response.status Check status code
				 //alert(error);
                 }).finally(() => {
                     //Perform action in always
				//	alert("Hello");
                 });
        }

	
	},
	
        mounted() {
			 if(localStorage.carMakeSelected) {
				 this.carMakeSelected = localStorage.carMakeSelected;
				 
			 }
			if(localStorage.carModelSelected) {
				 this.carModelSelected = localStorage.carModelSelected;
			 }
	
			if(localStorage.registeredDate) {
				  this.registeredDate = localStorage.registeredDate;
			  }
			if(localStorage.carTypeSelected) {
				  this.carTypeSelected = localStorage.carTypeSelected;
			  }
			if(localStorage.brandChecked) {
				  this.brandChecked = localStorage.brandChecked;
			  }
			if(localStorage.yearofmanufactureSelected) {
				  this.yearofmanufactureSelected = localStorage.yearofmanufactureSelected;
			  }	
			if(localStorage.claimSelected) {
				  this.claimSelected = localStorage.claimSelected;
			  }
			if(localStorage.existingUserChecked) {
				  this.existingUserChecked = localStorage.existingUserChecked;
			  }
			if(localStorage.uaeLicensedSelected) {
				  this.uaeLicensedSelected = localStorage.uaeLicensedSelected;
			  }	
			if(localStorage.plicyExpireChecked) {
				  this.plicyExpireChecked = localStorage.plicyExpireChecked;
			  }
			 if(localStorage.fname) {
				 this.fname = localStorage.fname;
			 } 
			 if(localStorage.carValue) {
				 this.carValue = localStorage.carValue;
			 }


			if(localStorage.fname) {
				 this.fname = localStorage.fname;
			 } 
			 if(localStorage.lname) {
				 this.lname = localStorage.lname;
			 } 
			 if(localStorage.email) {
				 this.email = localStorage.email;
			 } 
			 if(localStorage.mobile) {
				 this.mobile = localStorage.mobile;
			 } 
			 if(localStorage.dateOfBirth) {
				 this.dateOfBirth = localStorage.dateOfBirth;
			 } 
			 if(localStorage.nationality) {
				 this.nationality = localStorage.nationality;
			 } 
			 
			 
		/*	 
          axios.get(urlCarMake).then(response => {
            this.carMakes = response.data
          }),
		   axios.get(urlCarType).then(response => {
            this.carTypes = response.data
          }),
		  
		 
		   axios.get(urlCarClaim).then(response => {
            this.carClaims = response.data
          }),
		   axios.get(urlCarRepair).then(response => {
            this.carRepaires = response.data
          }),
		   axios.get(urlCarCylinder).then(response => {
            this.carCylinderes = response.data
          }),
		    axios.get(urlCarManufacturingCountry).then(response => {
            this.carManufacturingCoutnries = response.data
          }),
		   axios.get(urlNationality).then(response => {
            this.nationality = response.data
          }),
			axios.get(urlUaeLicense).then(response => {
            this.UaeLicenes = response.data
          })
		 */
		  
		  
        },
	watch:{
    carMakeSelected(NewcarMakeSelected) {
      localStorage.carMakeSelected = NewcarMakeSelected;
    },
	carModelSelected(NewcarModelSelected) {
      localStorage.carModelSelected = NewcarModelSelected;
    },
	
	 registeredDate(NewregisteredDate) {
      localStorage.registeredDate = NewregisteredDate;
    },
	 carTypeSelected(NewcarTypeSelected) {
      localStorage.carTypeSelected = NewcarTypeSelected;
    },
	 brandChecked(NewbrandChecked) {
      localStorage.brandChecked = NewbrandChecked;
    },
	 yearofmanufactureSelected(NewyearofmanufactureSelected) {
      localStorage.yearofmanufactureSelected = NewyearofmanufactureSelected;
    },
	 claimSelected(NewclaimSelected) {
      localStorage.claimSelected = NewclaimSelected;
    },
	 existingUserChecked(NewexistingUserChecked) {
      localStorage.existingUserChecked = NewexistingUserChecked;
    },
	 uaeLicensedSelected(NewuaeLicensedSelected) {
      localStorage.uaeLicensedSelected = NewuaeLicensedSelected;
    },
	 plicyExpireChecked(NewplicyExpireChecked) {
      localStorage.plicyExpireChecked = NewplicyExpireChecked;
    },
	 fname(Newfname) {
      localStorage.fname = Newfname;
    },
	 lname(Newlname) {
      localStorage.lname = Newlname;
    },
	dateOfBirth(NewdateOfBirth) {
      localStorage.dateOfBirth = NewdateOfBirth;
    },
	email(Newemail) {
      localStorage.email = Newemail;
    },
	mobile(Newmobile) {
      localStorage.mobile = Newmobile;
    },
	nationality(Newnationality) {
      localStorage.nationality = Newnationality;
    }
	
  }	
      });