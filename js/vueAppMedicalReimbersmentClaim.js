

const vm = new Vue({
        el: '#app',
		
        data() {
            return {
				insname:'',
				policyHolderNmae:'',
				insuranceIdNo:'',
				treatDateSelected:'yyyy-mm-dd',
				placeOfTreat:'',
				claimAmount:'',
				bankName:'',
				branch:'',
				actNo:'',
				ibnNo:'',
				mobile:'',
				email:'',
				message:'',
				files: ''
				
            };
        },
		computed: {
     
	},
	methods:{

		 formSubmit() {
				let formData = new FormData();
				for( var i = 0; i < this.files.length; i++ ){
					let file = this.files[i];
					formData.append('file[' + i + ']', file);
				}
				//formData.append('file', this.file);
				formData.append('insured_name', this.insname);
				formData.append('policy_holder_name', this.policyHolderNmae);
				formData.append('insured_id', this.insuranceIdNo);
				formData.append('date_of_treatment', this.treatDateSelected);
				formData.append('place_of_treatment', this.placeOfTreat);
				formData.append('claim_amount', this.claimAmount);
				formData.append('bank_name', this.bankName);
				formData.append('branch', this.branch);
				formData.append('account', this.actNo);
				formData.append('iban', this.ibnNo);
				formData.append('mobile', this.mobile);
				formData.append('email', this.email);
				formData.append('message', this.message);
				
               axios.post('https://buhaira.herokuapp.com/api/medical-reimbursement-claim',formData, {
					  headers: {
							'Content-Type': 'multipart/form-data'
						}
					
                }).then(function(response){
					if(response){
					window.location.href = 'motor-claim-success.html';
					this.info=response
					}
				else{
					this.info=response
					window.location.href = 'error.html';
					}
                    console.log('SUCCESS!! '+response);
                }).catch(function(error) {
                     console.log('FAILURE!! '+error);
                });
            }
		,
	 handleFileUpload(){
		this.files = this.$refs.files.files;
      }	

	
	},
	
        mounted() {
							
			 if(localStorage.insname) {
				 this.insname = localStorage.insname;
				 }
			 if(localStorage.mobile) {
				 this.mobile = localStorage.mobile;
			 } 
			 if(localStorage.email) {
				 this.email = localStorage.email;
			 } 
			 if(localStorage.policyHolderNmae) {
				 this.policyHolderNmae = localStorage.policyHolderNmae;
			 } 	
			if(localStorage.insuranceIdNo) {
				 this.insuranceIdNo = localStorage.insuranceIdNo;
			 }
			if(localStorage.message) {
				  this.message = localStorage.message;
			  }
			if(localStorage.treatDateSelected) {
				 this.treatDateSelected = localStorage.treatDateSelected;
			 }
			   
		   if(localStorage.placeOfTreat) {
				 this.placeOfTreat = localStorage.placeOfTreat;
			 }    
		   if(localStorage.claimAmount) {
				 this.claimAmount = localStorage.claimAmount;
			 }    
		   if(localStorage.bankName) {
				 this.bankName = localStorage.bankName;
			 }    
		   if(localStorage.branch) {
				 this.branch = localStorage.branch;
			 }    
		   if(localStorage.actNo) {
				 this.actNo = localStorage.actNo;
			 }    
		   if(localStorage.ibnNo) {
				 this.ibnNo = localStorage.ibnNo;
			 }  
        },
	watch:{
    
	 insname(Newinsname) {
      localStorage.insname = Newinsname;
    },
	mobile(Newmobile) {
      localStorage.mobile = Newmobile;
    },
	email(Newemail) {
      localStorage.email = Newemail;
    },
	policyHolderNmae(NewpolicyHolderNmae) {
      localStorage.policyHolderNmae = NewpolicyHolderNmae;
    },
	insuranceIdNo(NewinsuranceIdNo) {
      localStorage.insuranceIdNo = NewinsuranceIdNo;
    },
	message(Newmessage) {
      localStorage.message = Newmessage;
    },
	treatDateSelected(NewtreatDateSelected) {
      localStorage.treatDateSelected = NewtreatDateSelected;
    },
	placeOfTreat(NewplaceOfTreat) {
      localStorage.placeOfTreat = NewplaceOfTreat;
    },
	claimAmount(NewclaimAmount) {
      localStorage.claimAmount = NewclaimAmount;
    },
	bankName(NewbankName) {
      localStorage.bankName = NewbankName;
    },
	branch(Newbranch) {
      localStorage.branch = Newbranch;
    },
	actNo(NewactNo) {
      localStorage.actNo = NewactNo;
    },
	ibnNo(NewibnNo) {
      localStorage.ibnNo = NewibnNo;
    },
	
  }	
      });