

const vm = new Vue({
        el: '#app',
		
        data() {return{
				fname:'',
				lname:'',
				email:'',
				mobile:'',
				cname:'',
				details:'',
				info:''
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){

	     axios.post('https://buhaira.herokuapp.com/api/property-insurance',{
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
				mobile:this.mobile,
				company:this.cname,
				detail:this.details

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
			 if(localStorage.cname) {
				 this.cname = localStorage.cname;
			 }
			 if(localStorage.details) {
				 this.details = localStorage.details;
			 } 
		  
        },
	watch:{
   
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
	cname(Newcname) {
      localStorage.cname = Newcname;
    },
	details(Newdetails) {
      localStorage.details = Newdetails;
    }
	
  }	
      });