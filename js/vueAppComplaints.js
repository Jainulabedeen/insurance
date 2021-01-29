

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
				fname:'',
				email:'',
				mobile:'',
				complaints:'',
				message:'',
				info:null
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){

            axios.post('https://buhaira.herokuapp.com/api/complain',{
				full_name:this.fname,
				mobile:this.mobile,
				subject:this.complaints,
				detail:this.message,
				email:this.email
				

			}).then((response) => {
				localStorage.clear();
				window.location.href = 'complaints-success.html';
				    console.log('SUCCESS!! '+response);
					
                 }).catch((error) => {
                       this.info=error.response.data.errors;
                     console.log('FAILURE!! '+error);
					 
                 }).finally(() => {
                    
					
                 });
				 
        }

	
	},
	
        mounted() {
			

			if(localStorage.fname) {
				 this.fname = localStorage.fname;
			 } 
			 if(localStorage.complaints) {
				 this.complaints = localStorage.complaints;
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
	 complaints(Newcomplaints) {
      localStorage.complaints = Newcomplaints;
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