

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
                //e.preventDefault();
				let formData = new FormData();
				formData.append('file', this.file);
				alert("I am submit claim");
                let currentObj = this;
                this.axios.post('http://buhaira.herokuapp.com/api/motor', {
                    fname: this.fname,
					
                headers: {
                    'Content-Type': 'multipart/form-data'
                }    
                })
                .then(function (response) {
                    console.log('SUCCESS!! ');
                })
                .catch(function (error) {
                     console.log('FAILURE!! '+error);
                });
            }
		,
	 handleFileUpload(){
		this.file = this.$refs.file.files[0];
		//alert("I am file");
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