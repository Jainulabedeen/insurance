

const vm = new Vue({
        el: '#app',
		
        data() {
			
			return{
				companyName: '',
                cname: '',
				mobile:'',
				email:'',
				companyType:'',
                country: '',
                products:[],
				spanData:[],
                info:null
			
		 
		 
		 }
        },
		
		computed: {
     
	},
	methods:{
 submitForm(){

var productData = document.getElementsByClassName('selectedProducts');
for (var i = 0; i < productData.length; i++) {
 this.spanData[i]=productData[i].innerHTML;
 //console.log(this.spanData[i]);
}
			
            axios.post('https://buhaira.herokuapp.com/api/aviation',{
				company_name:this.companyName,
				contact_name:this.cname,
				email:this.email,
				mobile:this.mobile,
				company_type:this.companyType,
				country:this.country,
				products:JSON.stringify(this.spanData)

			}).then((response) => {
				localStorage.clear();
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
			 if(localStorage.companyName) {
				 this.companyName = localStorage.companyName;
				}
			if(localStorage.cname) {
				 this.cname = localStorage.cname;
			 }
			 if(localStorage.email) {
				 this.email = localStorage.email;
			 } 
			 if(localStorage.mobile) {
				 this.mobile = localStorage.mobile;
			 } 
			 if(localStorage.companyType) {
				 this.companyType = localStorage.companyType;
			 }
			 if(localStorage.country) {
				 this.country = localStorage.country;
			 }
			 
			 if(localStorage.products) {
				 this.products = localStorage.products;
			 } 
			
		  
        },
	watch:{
    companyName(NewcompanyName) {
      localStorage.companyName = NewcompanyName;
    },
	cname(Newcname) {
      localStorage.cname = Newcname;
    },
	email(Newemail) {
      localStorage.email = Newemail;
    },
	mobile(Newmobile) {
      localStorage.mobile = Newmobile;
    },
	companyType(NewcompanyType) {
      localStorage.companyType = NewcompanyType;
    },
	country(Newcountry) {
      localStorage.country = Newcountry;
    },
	products(Newproducts) {
      localStorage.products = Newproducts;
    }
	
  }	
      });