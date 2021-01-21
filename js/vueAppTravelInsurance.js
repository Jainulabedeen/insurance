

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
			coverDays: '',
               region: '',
                coverFor: '',
                details: '',
				fname:'',
				lname:'',
				email:'',
				mobile:'',
				nationality:'',
				destination:'',
				info:null
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){
	 //alert("Hello I am travel");
            axios.post('https://buhaira.herokuapp.com/api/travel',{
				days:this.coverDays,
				region:this.region,
                cover_type:this.coverFor,
                detail:this.details,
				first_name:this.fname,
				last_name:this.lname,
				email:this.email,
				mobile:this.mobile,
				nationality:this.nationality,
				destination:this.destination

			}).then((response) => {
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
			 if(localStorage.coverDays) {
				 this.coverDays = localStorage.coverDays;
				 }
			if(localStorage.region) {
				 this.region = localStorage.region;
			 }
			if(localStorage.coverFor) {
				  this.coverFor = localStorage.coverFor;
			  }
			if(localStorage.details) {
				  this.details = localStorage.details;
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
			 if(localStorage.nationality) {
				 this.nationality = localStorage.nationality;
			 } 
			 if(localStorage.destination) {
				 this.destination = localStorage.destination;
			 } 
			 
        },
	watch:{
    coverDays(NewcoverDays) {
      localStorage.coverDays = NewcoverDays;
    },
	region(Newregion) {
      localStorage.region = Newregion;
    },
	coverFor(NewcoverFor) {
      localStorage.coverFor = NewcoverFor;
    },
	details(Newdetails) {
      localStorage.details = Newdetails;
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
	nationality(Newnationality) {
      localStorage.nationality = Newnationality;
    },
	destination(Newdestination) {
      localStorage.destination = Newdestination;
    }
	
  }	
      });