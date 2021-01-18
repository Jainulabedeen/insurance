

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
				fname:'',
				email:'',
				mobile:'',
				enquiryType:'',
				message:'',
				info:''
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){

            axios.post('https://buhaira.herokuapp.com/api/inquiry',{
				full_name:this.fname,
				mobile:this.mobile,
				inquiry_type:this.enquiryType,
				message:this.message,
				email:this.email
				

			}).then((response) => {
				
				if(response){
					window.location.href = 'enquiry-success.html';
					}
				else{
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
			

			if(localStorage.fname) {
				 this.fname = localStorage.fname;
			 } 
			 if(localStorage.enquiryType) {
				 this.enquiryType = localStorage.enquiryType;
			 } 
			 if(localStorage.email) {
				 this.email = localStorage.email;
			 } 
			 if(localStorage.mobile) {
				 this.mobile = localStorage.mobile;
			 } 
			 if(localStorage.message) {
				 this.message = localStorage.message;
			 }
			 
		  
		  
        },
	watch:{
   
	 fname(Newfname) {
      localStorage.fname = Newfname;
    },
	 enquiryType(NewenquiryType) {
      localStorage.enquiryType = NewenquiryType;
    },
	message(Newmessage) {
      localStorage.message = Newmessage;
    },
	email(Newemail) {
      localStorage.email = Newemail;
    },
	mobile(Newmobile) {
      localStorage.mobile = Newmobile;
    }
	
  }	
      });