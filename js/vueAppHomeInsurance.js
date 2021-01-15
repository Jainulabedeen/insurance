

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
				iam: '',
				livein: '',
                optionalCover:[],
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
                cover_type:this.optionalCover,
                contents:this.contentsaed,
				personal_belonging:this.belongingsaed,
				building:this.buildingaed,
				
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
				mobile:this.mobile,
				address:this.address

			}).then((response) => {
				//alert(this.contentsaed);
				if(response.data.length===0){
					window.location.href = 'error.html';
					
					this.info=response
				}
				else{
					this.info=response
					window.location.href = 'success.html';
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
			if(localStorage.optionalCover) {
				  this.optionalCover = localStorage.optionalCover;
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
	optionalCover(NewoptionalCover) {
      localStorage.optionalCover = NewoptionalCover;
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