

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
				coverType: '',
                maritalStatus: '',
                visa: '',
				dobSelected:'',
				gender: '',
				location:'',
                details:'' ,
                foptionalCover1:'',
				foptionalCover2:'',
				foptionalCover3:'',
				fname:'',
				lname:'',
				email:'',
				mobile:'',
				nationality:'',
				info:null
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){
            axios.post('https://buhaira.herokuapp.com/api/family-medical',{
				cover_type:this.coverType,
				marital_status:this.maritalStatus,
				visa_emirate:this.visa,
				dob:this.dobSelected,
				gender:this.gender,
				prefer_hospital:this.location,
				detail:this.details,
				optional_cover:JSON.stringify(this.foptionalCover1+","+this.foptionalCover2+","+this.foptionalCover3),
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
				mobile:this.mobile,
				nationality:this.nationality

			}).then((response) => {
				window.location.href = 'success.html';
				    console.log('SUCCESS!! '+response);
                 }).catch((error) => {
                      this.info=error.response.data.errors;
                     console.log('FAILURE!! '+error);
					 
                 }).finally(() => {
                    
					
                 });
				 
        }

	
	},
	
        mounted() {
			 if(localStorage.coverType) {
				 this.coverType = localStorage.coverType;
				 }
			if(localStorage.maritalStatus) {
				 this.maritalStatus = localStorage.maritalStatus;
			}
			if(localStorage.visa) {
				 this.visa = localStorage.visa;
			}
			 if(localStorage.dobSelected) {
				 this.dobSelected = localStorage.dobSelected;
			 }
	
			if(localStorage.gender) {
				  this.gender = localStorage.gender;
			  }
			if(localStorage.location) {
				  this.location = localStorage.location;
			  }
			if(localStorage.details) {
				  this.details = localStorage.details;
			  }  
			if(localStorage.foptionalCover1) {
				  this.foptionalCover1 = localStorage.foptionalCover1;
			  }
			if(localStorage.optionalCover2) {
				  this.foptionalCover2 = localStorage.foptionalCover2;
			  }
			if(localStorage.optionalCover3) {
				  this.foptionalCover3 = localStorage.foptionalCover3;
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
			
			 if(localStorage.nationality) {
				 this.nationality = localStorage.nationality;
			 } 
			 
			 
		  
        },
	watch:{
    coverType(NewcoverType) {
      localStorage.coverType = NewcoverType;
    },
	maritalStatus(NewmaritalStatus) {
      localStorage.maritalStatus = NewmaritalStatus;
    },
	visa(Newvisa) {
      localStorage.visa = Newvisa;
    },
	dobSelected(NewdobSelected) {
      localStorage.dobSelected = NewdobSelected;
    },
	gender(Newgender) {
      localStorage.gender = Newgender;
    },
	location(Newlocation) {
      localStorage.location = Newlocation;
    },
	details(Newdetails) {
      localStorage.details = Newdetails;
    },
	foptionalCover1(NewfoptionalCover1) {
      localStorage.foptionalCover1 = NewfoptionalCover1;
    },
	foptionalCover2(NewfoptionalCover2) {
      localStorage.foptionalCover2 = NewfoptionalCover2;
    },
	foptionalCover3(NewfoptionalCover3) {
      localStorage.foptionalCover3 = NewfoptionalCover3;
    },
	 fname(Newfname) {
      localStorage.fname = Newfname;
    },
	 lname(Newlname) {
      localStorage.lname = Newlname;
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
	
	
  }	
      });