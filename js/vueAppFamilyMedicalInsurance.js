

const vm = new Vue({
        el: '#app',
		
        data() {return{
				coverType: '',
                maritalStatus: '',
                visa: '',
				dobmonth:'0',
				dobday:'0',
				dobyear:'0',
                gender: '',
				location:'',
                details:'' ,
                optionalCover:[],
				fname:'',
				lname:'',
				email:'',
				mobile:'',
				nationality:'',
				info:''
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){
            axios.post('http://buhaira.herokuapp.com/api/family-medical',{
				cover_type:this.coverType,
				marital_status:this.maritalStatus,
				visa_emirate:this.visa,
				dob:this.dobyear+"-"+this.dobmonth+"-"+this.dobday,
				gender:this.gender,
				prefer_hospital:this.location,
				detail:this.details,
				optional_cover:this.optionalCover,
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
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
			 if(localStorage.coverType) {
				 this.coverType = localStorage.coverType;
				 }
			if(localStorage.maritalStatus) {
				 this.maritalStatus = localStorage.maritalStatus;
			}
			if(localStorage.visa) {
				 this.visa = localStorage.visa;
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
	
			if(localStorage.gender) {
				  this.gender = localStorage.gender;
			  }
			if(localStorage.location) {
				  this.location = localStorage.location;
			  }
			if(localStorage.details) {
				  this.details = localStorage.details;
			  }  
			if(localStorage.optionalCover) {
				  this.optionalCover = localStorage.optionalCover;
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
	dobyear(Newdobyear) {
      localStorage.dobyear = Newdobyear;
    },
	dobmonth(Newdobmonth) {
      localStorage.dobmonth = Newdobmonth;
    },
	dobday(Newdobday) {
      localStorage.dobday = Newdobday;
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
	optionalCover(NewoptionalCover) {
      localStorage.optionalCover = NewoptionalCover;
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