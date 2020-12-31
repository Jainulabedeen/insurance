const urlCarMake = "http://mrinsurance.ae/public/api/car-make";
const urlCarType = "http://mrinsurance.ae/public/api/car-road-type";
//const urlCarModel = "http://mrinsurance.ae/public/api/car-model";
const urlCarClaim = "http://mrinsurance.ae/public/api/claim";
const urlCarRepair = "http://mrinsurance.ae/public/api/repair";
const urlCarCylinder = "http://mrinsurance.ae/public/api/cylinder";
const urlCarManufacturingCountry = "http://mrinsurance.ae/public/api/mfg-country";
const urlNationality = "http://mrinsurance.ae/public/api/nationality";
const urlCarModel = "http://mrinsurance.ae/public/api/getcarmodel/";
//const urlCarValue = "http://mrinsurance.ae/public/api/getcardepvalue/1/1/01-01-2029";
const urlCarValue = "http://mrinsurance.ae/public/api/getcardepvalue/";
alert("Hello I am vueapp");
const vm = new Vue({
        el: '#app',
        data: {
			value:0,
          carMakes: [],
		  carTypes:[],
		  carModels:[],
		  carClaims:[],
		  carRepaires:[],
		  carCylinderes:[],
		  carManufacturingCoutnries:[],
		   nationality:[],
		   carModels:[],
		   carMakeSelected:null,
		   carValues:[],
		   max:0,
		   min:0,
		  registeredDate:'',
		  carMakeSelected:'',
		  carModelSelected:'',
		 carTypeSelected:'',
		 brandChecked:'',
		 yearofmanufactureSelected:'',
		 claimSelected:'',
		 existingUserChecked:'',
		 uaeLicensedSelected:'',
		 plicyExpireChecked:''
		 
		 
        },
		
		computed: {
      total: function () {
      return this.value
		}
	},
	methods:{
		getModel:function(carModelId){
	 axios.get(urlCarModel+""+carModelId).then(response => {
			 this.carModels = response.data
	
	this.value=0;
          });
  },
  getValue:function(carMakesId,carModelsId,registeredDate){
	 axios.get(urlCarValue+""+carMakesId+"/"+carModelsId+"/"+registeredDate).then(response => {
            this.carValues = response.data
          });	
document.getElementById("valueOfCar").max=this.carValues.maxcost;
document.getElementById("valueOfCar").min=this.carValues.mincost;
document.getElementById("valueOfCar").value=this.carValues.carcost;
		  
	this.max=this.carValues.maxcost;
	this.min=this.carValues.mincost;
	this.value=this.carValues.carcost;

  },
  
		
	},
	
        mounted() {
			 if(localStorage.carMakeSelected) {
				 this.carMakeSelected = localStorage.carMakeSelected;
			 }
			if(localStorage.registeredDate) {
				  this.registeredDate = localStorage.registeredDate;
			  }
			if(localStorage.carTypeSelected) {
				  this.carTypeSelected = localStorage.carTypeSelected;
			  }
			if(localStorage.brandChecked) {
				  this.brandChecked = localStorage.brandChecked;
			  }
			if(localStorage.yearofmanufactureSelected) {
				  this.yearofmanufactureSelected = localStorage.yearofmanufactureSelected;
			  }	
			if(localStorage.claimSelected) {
				  this.claimSelected = localStorage.claimSelected;
			  }
			if(localStorage.existingUserChecked) {
				  this.existingUserChecked = localStorage.existingUserChecked;
			  }
			if(localStorage.uaeLicensedSelected) {
				  this.uaeLicensedSelected = localStorage.uaeLicensedSelected;
			  }	
			if(localStorage.plicyExpireChecked) {
				  this.plicyExpireChecked = localStorage.plicyExpireChecked;
			  }
			  
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
          })
		 
		  
		  
        },
	watch:{
    carMakeSelected(NewcarMakeSelected) {
      localStorage.carMakeSelected = NewcarMakeSelected;
    },
	 registeredDate(NewregisteredDate) {
      localStorage.registeredDate = NewregisteredDate;
    },
	 carTypeSelected(NewcarTypeSelected) {
      localStorage.carTypeSelected = NewcarTypeSelected;
    },
	 brandChecked(NewbrandChecked) {
      localStorage.brandChecked = NewbrandChecked;
    },
	 yearofmanufactureSelected(NewyearofmanufactureSelected) {
      localStorage.yearofmanufactureSelected = NewyearofmanufactureSelected;
    },
	 claimSelected(NewclaimSelected) {
      localStorage.claimSelected = NewclaimSelected;
    },
	 existingUserChecked(NewexistingUserChecked) {
      localStorage.existingUserChecked = NewexistingUserChecked;
    },
	 uaeLicensedSelected(NewuaeLicensedSelected) {
      localStorage.uaeLicensedSelected = NewuaeLicensedSelected;
    },
	 plicyExpireChecked(NewplicyExpireChecked) {
      localStorage.plicyExpireChecked = NewplicyExpireChecked;
    }
  }	
      });
