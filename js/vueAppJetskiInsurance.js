

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

            axios.post('http://buhaira.herokuapp.com/api/jet-ski',{
				boat_type:this.boatType,
				nationality:this.nationality,
                mfg_company:this.manufacturer,
                mfg_year:this.yearOfManufacturer,
				engine_type:this.engineType,
				boat_length:this.lengthBoat,
				estimated_value:this.estimatedValue,
				risk_value:this.extenstionValue,
				policy_duration:this.duration,
				

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