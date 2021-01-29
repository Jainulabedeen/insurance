

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
			claimExperience: '',
               sumInsured: '',
                use: '',
                operatorExperience: '',
				fname:'',
				lname:'',
				email:'',
				mobile:'',
				boatDetails:'',
				engineDetails:'',
				info:null
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){
            axios.post('https://buhaira.herokuapp.com/api/yacht-insurance',{
				claims:this.claimExperience,
				sum_insured:this.sumInsured,
                use:this.use,
                operator_exp:this.operatorExperience,
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
				mobile:this.mobile,
				boat_detail:this.boatDetails,
				engine_detail:this.engineDetails

			}).then((response) => {
				localStorage.clear();
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
			 if(localStorage.claimExperience) {
				 this.claimExperience = localStorage.claimExperience;
				 }
			if(localStorage.sumInsured) {
				 this.sumInsured = localStorage.sumInsured;
			 }
			if(localStorage.use) {
				  this.use = localStorage.use;
			  }
			if(localStorage.operatorExperience) {
				  this.operatorExperience = localStorage.operatorExperience;
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
			 if(localStorage.boatDetails) {
				 this.boatDetails = localStorage.boatDetails;
			 } 
			 if(localStorage.engineDetails) {
				 this.engineDetails = localStorage.engineDetails;
			 } 
			 
        },
	watch:{
    claimExperience(NewclaimExperience) {
      localStorage.claimExperience = NewclaimExperience;
    },
	sumInsured(NewsumInsured) {
      localStorage.sumInsured = NewsumInsured;
    },
	use(Newuse) {
      localStorage.use = Newuse;
    },
	operatorExperience(NewoperatorExperience) {
      localStorage.operatorExperience = NewoperatorExperience;
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
	boatDetails(NewboatDetails) {
      localStorage.boatDetails = NewboatDetails;
    },
	engineDetails(NewengineDetails) {
      localStorage.engineDetails = NewengineDetails;
    }
	
  }	
      });