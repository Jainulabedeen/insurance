const urlCarMake = "https://buhaira.herokuapp.com/api/car-make";
const urlCarType = "https://buhaira.herokuapp.com/api/car-road-type";
//const urlCarModel = "https://buhaira.herokuapp.com/api/car-model";
const urlCarClaim = "https://buhaira.herokuapp.com/api/claim";
const urlCarRepair = "https://buhaira.herokuapp.com/api/repair";
const urlCarCylinder = "https://buhaira.herokuapp.com/api/cylinder";
const urlCarManufacturingCountry = "https://buhaira.herokuapp.com/api/mfg-country";
const urlNationality = "https://buhaira.herokuapp.com/api/nationality";
const urlCarModel = "https://buhaira.herokuapp.com/api/getcarmodel/";
//const urlCarValue = "https://buhaira.herokuapp.com/api/getcardepvalue/1/1/01-01-2029";
const urlCarValue = "https://buhaira.herokuapp.com/api/getcardepvalue/";
const urlUaeLicense = "https://buhaira.herokuapp.com/api/uae-license-age";
const urlGetQuote = "https://buhaira.herokuapp.com/api/getQuoteValue/";
//https://buhaira.herokuapp.com/api/getQuoteValue/%7Bcar_value%7D/%7Bcar_make%7D/%7Bcar_model%7D/%7Broad_type%7D/%7Bclaim%7D/%7Buae_license_age%7D/%7Bnationality%7D
//https://buhaira.herokuapp.com/api/getQuoteValue/720000/1/2/1/1/1/1


const vm = new Vue({
        el: '#app',
		
        data: {
			carValue:0,
          carMakes: [],
		  carTypes:[],
		  carClaims:[],
		  carRepaires:[],
		  carCylinderes:[],
		  carManufacturingCoutnries:[],
		   nationality:[],
		   carModels:[],
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
		 plicyExpireChecked:'',
		 UaeLicenes:[],
		 nationalitySelected:'',
		 QuoteValues:[],
		 quotationPrice:0,
		 policyPrice:[],
		 j:[0,1,2]
		 
		 
		 
        },
		
		computed: {
      total: function () {
      return this.carValue
		}
	},
	methods:{

		getModel:function(carModelId){
	 axios.get(urlCarModel+""+carModelId).then(response => {
			 this.carModels = response.data
				this.carValue=0;
          });
  },
  getValue:function(carMakesId,carModelsId,registeredDate){
	 axios.get(urlCarValue+""+carMakesId+"/"+carModelsId+"/"+registeredDate).then(response => {
            this.carValues = response.data
			document.getElementById("valueOfCar").max=this.carValues.maxcost;
document.getElementById("valueOfCar").min=this.carValues.mincost;
document.getElementById("valueOfCar").carValue=this.carValues.carcost;
document.getElementById("valueOfCar").value=this.carValues.carcost;

		  
	this.max=this.carValues.maxcost;
	this.min=this.carValues.mincost;
	this.carValue=this.carValues.carcost;
          });
		  


  },

  getQuoteValue:function(){
	 axios.get(urlGetQuote+""+this.carValue+"/"+this.carMakeSelected+"/"+this.carModelSelected+"/"+this.carTypeSelected+"/"+this.claimSelected+"/"+this.uaeLicensedSelected+"/"+this.nationalitySelected).then(response => {
           this.QuoteValues = response.data
		   for(i=0;i<this.QuoteValues.length;i++){
quotationPrice=(this.carValue*this.QuoteValues[i].base_rate)/100;


if(quotationPrice>this.QuoteValues[i].minimum_premium){

	this.policyPrice[i]=Math.round(quotationPrice);
//alert(policyPrice);		
}
else{
	this.policyPrice[i]=Math.round(this.QuoteValues[i].minimum_premium);
	//alert(policyPrice);		
}
}
          });
		  
//alert(this.QuoteValues[0]+""+urlGetQuote+""+this.carValue+"/"+this.carMakeSelected+"/"+this.carModelSelected+"/"+this.carTypeSelected+"/"+this.claimSelected+"/"+this.uaeLicensedSelected+"/"+this.nationalitySelected);		  
//$quotationPrice = (($sessionItem->car_value * $list->base_rate) / 100);

/*
if($quotationPrice > $list->minimum_premium)
{
    $policy_price = $quotationPrice;
}
else
{
    $policy_price = $list->minimum_premium;
}*/
  }
	
	},
	
        mounted() {
			 if(localStorage.carMakeSelected) {
				 this.carMakeSelected = localStorage.carMakeSelected;
				 
			 }
			if(localStorage.carModelSelected) {
				 this.carModelSelected = localStorage.carModelSelected;
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
			 if(localStorage.nationalitySelected) {
				 this.nationalitySelected = localStorage.nationalitySelected;
			 } 
			 if(localStorage.carValue) {
				 this.carValue = localStorage.carValue;
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
          }),
			axios.get(urlUaeLicense).then(response => {
            this.UaeLicenes = response.data
          })
		 
		  
		  
        },
	watch:{
    carMakeSelected(NewcarMakeSelected) {
      localStorage.carMakeSelected = NewcarMakeSelected;
    },
	carModelSelected(NewcarModelSelected) {
      localStorage.carModelSelected = NewcarModelSelected;
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
    },
	 nationalitySelected(NewnationalitySelected) {
      localStorage.nationalitySelected = NewnationalitySelected;
    },
	 carValue(NewcarValue) {
      localStorage.carValue = NewcarValue;
    }
  }	
      });
