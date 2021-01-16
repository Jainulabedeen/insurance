

const vm = new Vue({
        el: '#app',
		
        data() {
            return {
				fname:'',
				mobile:'',
				email:'',
				insurance:'',
				policyno:'',
				message:'',
				file: ''
				
            };
        },
		computed: {
     
	},
	methods:{

		 formSubmit() {
				let formData = new FormData();
				formData.append('file', this.file);
				
               axios.post('http://buhaira.herokuapp.com/api/non-motor-claim', {
                    full_name: this.fname,
					email: this.email,
					mobile: this.mobile,
					insurance: this.insurance,
					policy_no: this.policyno,
					message: this.message,
					  headers: {
							'Content-Type': 'multipart/form-data'
						}
					
                }).then(function(response){
					alert("Your Claim Submitted Successfully!");
                    console.log('SUCCESS!! '+response);
                }).catch(function(error) {
                     console.log('FAILURE!! '+error);
                });
            }
		,
	 handleFileUpload(){
		this.file = this.$refs.file.files[0];
      }	

	
	},
	
        mounted() {
			 if(localStorage.fname) {
				 this.fname = localStorage.fname;
				 }
			 if(localStorage.mobile) {
				 this.mobile = localStorage.mobile;
			 } 
			 if(localStorage.email) {
				 this.email = localStorage.email;
			 } 
			 if(localStorage.insurance) {
				 this.insurance = localStorage.insurance;
			 } 	
			if(localStorage.policyno) {
				 this.policyno = localStorage.policyno;
			 }
	
			if(localStorage.message) {
				  this.message = localStorage.message;
			  }
		  
        },
	watch:{
    
	 fname(Newfname) {
      localStorage.fname = Newfname;
    },
	mobile(Newmobile) {
      localStorage.mobile = Newmobile;
    },
	email(Newemail) {
      localStorage.email = Newemail;
    },
	 insurance(Newinsurance) {
      localStorage.insurance = Newinsurance;
    },
	policyno(Newpolicyno) {
      localStorage.policyno = Newpolicyno;
    },
	message(Newmessage) {
      localStorage.message = Newmessage;
    }
	
  }	
      });