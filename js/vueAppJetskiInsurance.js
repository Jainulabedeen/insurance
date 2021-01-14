

const vm = new Vue({
        el: '#app',
		
        data() {
			return{
				boatType: '',
				nationality:'',
				manufacturer: '',
                yearOfManufacturer: '',
                engineType: '',
				lengthBoat:'',
				estimatedValue:'',
				extenstionValue:'',
				duration:'',
				info:null
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){
	 //alert("Hello I am travel");
            axios.post('http://buhaira.herokuapp.com/api/travel',{
				days:this.boatType,
				nationality:this.nationality,
                cover_type:this.manufacturer,
                detail:this.yearOfManufacturer,
				first_name:this.engineType,
				last_name:this.lengthBoat,
				email:this.estimatedValue,
				mobile:this.extenstionValue,
				duration:this.duration,
				

			}).then((response) => {
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
			 if(localStorage.boatType) {
				 this.boatType = localStorage.boatType;
				 }
			if(localStorage.nationality) {
				 this.nationality = localStorage.nationality;
			 }	 
			if(localStorage.manufacturer) {
				 this.manufacturer = localStorage.manufacturer;
			 }
			if(localStorage.yearOfManufacturer) {
				  this.yearOfManufacturer = localStorage.yearOfManufacturer;
			  }
			if(localStorage.details) {
				  this.details = localStorage.details;
			  }
			if(localStorage.engineType) {
				 this.engineType = localStorage.engineType;
			 } 
			 if(localStorage.lengthBoat) {
				 this.lengthBoat = localStorage.lengthBoat;
			 } 
			 if(localStorage.estimatedValue) {
				 this.estimatedValue = localStorage.estimatedValue;
			 } 
			 if(localStorage.extenstionValue) {
				 this.extenstionValue = localStorage.extenstionValue;
			 } 
			 if(localStorage.duration) {
				 this.duration = localStorage.duration;
			 } 
			 
        },
	watch:{
    boatType(NewboatType) {
      localStorage.boatType = NewboatType;
    },
	nationality(Newnationality) {
      localStorage.nationality = Newnationality;
    },
	manufacturer(Newmanufacturer) {
      localStorage.manufacturer = Newmanufacturer;
    },
	yearOfManufacturer(NewyearOfManufacturer) {
      localStorage.yearOfManufacturer = NewyearOfManufacturer;
    },
	engineType(NewengineType) {
      localStorage.engineType = NewengineType;
    },
	 lengthBoat(NewlengthBoat) {
      localStorage.lengthBoat = NewlengthBoat;
    },
	estimatedValue(NewestimatedValue) {
      localStorage.estimatedValue = NewestimatedValue;
    },
	extenstionValue(NewextenstionValue) {
      localStorage.extenstionValue = NewextenstionValue;
    },
	duration(Newduration) {
      localStorage.duration = Newduration;
    }
	
  }	
      });