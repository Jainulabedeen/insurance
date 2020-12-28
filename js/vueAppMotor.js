const urlCarMake = "http://mrinsurance.ae/public/api/car-body-type";
const urlCarType = "http://mrinsurance.ae/public/api/car-road-type";
const urlCarModel = "http://mrinsurance.ae/public/api/car-model";
const urlCarClaim = "http://mrinsurance.ae/public/api/claim";
const urlCarRepair = "http://mrinsurance.ae/public/api/repair";
const urlCarCylinder = "http://mrinsurance.ae/public/api/cylinder";
const urlCarManufacturingCountry = "http://mrinsurance.ae/public/api/mfg-country";
const urlNationality = "http://mrinsurance.ae/public/api/nationality";


const vm = new Vue({
        el: '#app',
        data: {
          carMakes: [],
		  carTypes:[],
		  carModels:[],
		  carClaims:[],
		  carRepaires:[],
		  carCylinderes:[],
		  carManufacturingCoutnries:[],
		   nationality:[]
		 
        },
        mounted() {
          axios.get(urlCarMake).then(response => {
            this.carMakes = response.data
          }),
		   axios.get(urlCarType).then(response => {
            this.carTypes = response.data
          }),
		  axios.get(urlCarModel).then(response => {
            this.carModels = response.data
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
