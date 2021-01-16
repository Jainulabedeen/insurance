

const vm = new Vue({
        el: '#app',
		
        data() {
            return {
				fname:'',
				motorClaim:'',
				email:'',
				mobile:'',
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
				
               axios.post('https://buhaira.herokuapp.com/api/motor-claim', {
                    full_name: this.fname,
					email: this.email,
					motor_claim: this.motorClaim,
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
			 if(localStorage.motorClaim) {
				 this.motorClaim = localStorage.motorClaim;
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
	 motorClaim(NewmotorClaim) {
      localStorage.motorClaim = NewmotorClaim;
    },
	policyno(Newpolicyno) {
      localStorage.policyno = Newpolicyno;
    },
	message(Newmessage) {
      localStorage.message = Newmessage;
    }
	
  }	
      });