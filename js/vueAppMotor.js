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
		  registeredDate:null,
		  carMakeSelected:null,
		  carModelSelected:null,
		 
		 
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
		//alert(this.carModels);
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
//alert(registeredDate+" "+carMakesId+" "+carModelsId);
//alert(this.carValues.maxCost);
	//return carModelId;
  }
  
		
	},
	
        mounted() {
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
		  
		  
        }
      });
