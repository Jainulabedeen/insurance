

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
				iam: '',
				livein: '',
                optionalCover1:'',
				optionalCover2:'',
				optionalCover3:'',
                contentsaed: '',
				belongingsaed: '',
				buildingaed: '',
				
				fname:'',
				lname:'',
				email:'',
				mobile:'',
				address:'',
				
				info:null
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){

            axios.post('http://buhaira.herokuapp.com/api/home-insurance',{
				who_am:this.iam,
				live_in:this.livein,
                cover_type:JSON.stringify(this.optionalCover1+","+this.optionalCover2+","+this.optionalCover3),
                contents:this.contentsaed,
				personal_belonging:this.belongingsaed,
				building:this.buildingaed,
				
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
				mobile:this.mobile,
				address:this.address

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
			 if(localStorage.iam) {
				 this.iam = localStorage.iam;
				 }
			if(localStorage.livein) {
				 this.livein = localStorage.livein;
			 }
			if(localStorage.optionalCover1) {
				  this.optionalCover1 = localStorage.optionalCover1;
			  }
			if(localStorage.optionalCover2) {
				  this.optionalCover2 = localStorage.optionalCover2;
			  }
			if(localStorage.optionalCover3) {
				  this.optionalCover3 = localStorage.optionalCover3;
			  }  
			if(localStorage.contentsaed) {
				  this.contentsaed = localStorage.contentsaed;
			  }
			if(localStorage.belongingsaed) {
				  this.belongingsaed = localStorage.belongingsaed;
			  }
			if(localStorage.buildingaed) {
				  this.buildingaed = localStorage.buildingaed;
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
			 if(localStorage.address) {
				 this.address = localStorage.address;
			 }
			 
        },
		
	watch:{
    iam(Newiam) {
      localStorage.iam = Newiam;
    },
	livein(Newlivein) {
      localStorage.livein = Newlivein;
    },
	optionalCover1(NewoptionalCover1) {
      localStorage.optionalCover1 = NewoptionalCover1;
    },
	optionalCover2(NewoptionalCover2) {
      localStorage.optionalCover2 = NewoptionalCover2;
    },
	optionalCover3(NewoptionalCover3) {
      localStorage.optionalCover3 = NewoptionalCover3;
    },
	contentsaed(Newcontentsaed) {
      localStorage.contentsaed = Newcontentsaed;
    },
	belongingsaed(Newbelongingsaed) {
      localStorage.belongingsaed = Newbelongingsaed;
    },
	buildingaed(Newbuildingaed) {
      localStorage.buildingaed = Newbuildingaed;
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
	address(Newaddress) {
      localStorage.address = Newaddress;
    }
	
  }	
      });