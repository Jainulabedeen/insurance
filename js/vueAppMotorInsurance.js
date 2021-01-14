

const vm = new Vue({
        el: '#app',
		
        data() {return{
			carMakeSelected: '',
                carModelSelected: '',
                monthSelected: '',
                daySelected: '',
                yearSelected:'' ,
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
				dateOfBirth:'',
				info:''
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){
	
			//this.registeredDate=this.yearSelected+"-"+this.monthSelected+"-"+this.daySelected;
			//alert(registeredDate);
			//this.dateOfBirth=this.dobyear+"-"+this.dobmonth+"-"+this.dobday;
			
			
            axios.post('http://buhaira.herokuapp.com/api/motor',{
				car_make:this.carMakeSelected,
				car_model:this.carModelSelected,
				first_registration:this.yearSelected+"-"+this.monthSelected+"-"+this.daySelected,
				car_value:this.valueOfCar,
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
				dob:this.dobyear+"-"+this.dobmonth+"-"+this.dobday,
				mobile:this.mobile,
				nationality:this.nationality

			}).then((response) => {
				if(response){
					window.location.href = 'success.html';
					this.info=response
				}
				else{
					this.info=response
					window.location.href = 'error.html';
				}
                    console.log('SUCCESS!! '+response);
					
                 }).catch((error) => {
                       console.log('FAILURE!! '+error);
					 
                 }).finally(() => {
                    
					
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
	
			if(localStorage.yearSelected) {
				  this.yearSelected = localStorage.yearSelected;
			  }
			if(localStorage.monthSelected) {
				  this.monthSelected = localStorage.monthSelected;
			  }
			if(localStorage.daySelected) {
				  this.daySelected = localStorage.daySelected;
			  }  
			if(localStorage.carTypeSelected) {
				  this.carTypeSelected = localStorage.carTypeSelected;
			  }
			if(localStorage.brandChecked) {
				  this.brandChecked = localStorage.brandChecked;
			  }
			if(localStorage.yearofmanufacture) {
				  this.yearofmanufacture = localStorage.yearofmanufacture;
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
			 if(localStorage.valueOfCar) {
				 this.valueOfCar = localStorage.valueOfCar;
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
			 if(localStorage.dobyear) {
				 this.dobyear = localStorage.dobyear;
			 }
			 if(localStorage.dobmonth) {
				 this.dobmonth = localStorage.dobmonth;
			 } 
			 if(localStorage.dobday) {
				 this.dobday = localStorage.dobday;
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
	
	yearSelected(NewyearSelected) {
      localStorage.yearSelected = NewyearSelected;
    },
	monthSelected(NewmonthSelected) {
      localStorage.monthSelected = NewmonthSelected;
    },
	daySelected(NewdaySelected) {
      localStorage.daySelected = NewdaySelected;
    },
	 carTypeSelected(NewcarTypeSelected) {
      localStorage.carTypeSelected = NewcarTypeSelected;
    },
	 brandChecked(NewbrandChecked) {
      localStorage.brandChecked = NewbrandChecked;
    },
	 yearofmanufacture(Newyearofmanufacture) {
      localStorage.yearofmanufacture = Newyearofmanufacture;
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
	dobyear(Newdobyear) {
      localStorage.dobyear = Newdobyear;
    },
	dobmonth(Newdobmonth) {
      localStorage.dobmonth = Newdobmonth;
    },
	dobday(Newdobday) {
      localStorage.dobday = Newdobday;
    },
	email(Newemail) {
      localStorage.email = Newemail;
    },
	mobile(Newmobile) {
      localStorage.mobile = Newmobile;
    },
	nationality(Newnationality) {
      localStorage.nationality = Newnationality;
    },
	valueOfCar(NewvalueOfCar) {
      localStorage.valueOfCar = NewvalueOfCar;
    }
	
  }	
      });