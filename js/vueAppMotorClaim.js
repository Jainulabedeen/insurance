

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
				files: ''
				
            };
        },
		computed: {
     
	},
	methods:{

		 formSubmit() {
				let formData = new FormData();
				for( var i = 0; i < this.files.length; i++ ){
					let file = this.files[i];
					formData.append('file[' + i + ']', file);
				}
				formData.append('full_name', this.fname);
				formData.append('email', this.email);
				formData.append('motor_claim', this.motorClaim);
				formData.append('policy_no', this.policyno);
				formData.append('message', this.message);
				
               axios.post('https://buhaira.herokuapp.com/api/motor-claim',formData,{
					
					  headers: {
							'Content-Type': 'multipart/form-data'
						}
					
                }).then(function(response){
					if(response){
					window.location.href = 'motor-claim-success.html';
					this.info=response
					}
				else{
					this.info=response
					window.location.href = 'error.html';
					}
                    console.log('SUCCESS!! '+response);
                }).catch(function(error) {
                     console.log('FAILURE!! '+error);
                });
            }
		,
	 handleFileUpload(){
		// alert("Hello");
		this.files = this.$refs.files.files;
		//alert(this.file);
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