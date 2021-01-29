

const vm = new Vue({
        el: '#app',
		
        data() {
            return {
				fname:'',
				email:'',
				mobile:'',
				message:'',
				files: '',
				info:null
				
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
				formData.append('mobile', this.mobile);
				formData.append('message', this.message);
				
               axios.post('https://buhaira.herokuapp.com/api/motor-claim',formData,{
					
					  headers: {
							'Content-Type': 'multipart/form-data'
						}
					
                }).then((response) => {
					localStorage.clear();
					window.location.href = 'success-careers.html';
				    console.log('SUCCESS!! '+response);
					
                 }).catch((error) => {
					 this.info=error.response.data.errors;
                     console.log('FAILURE!! '+error);
					 
                 }).finally(() => {
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
	message(Newmessage) {
      localStorage.message = Newmessage;
    }
	
  }	
      });