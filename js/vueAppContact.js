

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
				fname:'',
				email:'',
				mobile:'',
				subject:'',
				message:'',
				info:''
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){
	 
            axios.post('https://buhaira.herokuapp.com/api/contact',{
				full_name:this.fname,
				mobile:this.mobile,
				subject:this.subject,
				detail:this.message,
				email:this.email
				

			}).then((response) => {
				if(response){
				alert("Thank You for Contact Us");
				}
				else{
					
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
			 if(localStorage.subject) {
				 this.subject = localStorage.subject;
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
   
	 fname(Newfname) {
      localStorage.fname = Newfname;
    },
	 subject(Newsubject) {
      localStorage.subject = Newsubject;
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