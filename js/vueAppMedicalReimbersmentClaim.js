

const vm = new Vue({
        el: '#app',
		
        data() {
            return {
				insname:'',
				policyHolderNmae:'',
				insuranceIdNo:'',
				dobmonth:'0',
				dobday:'0',
				dobyear:'0',
				placeOfTreat:'',
				claimAmount:'',
				bankName:'',
				branch:'',
				actNo:'',
				ibnNo:'',
				mobile:'',
				email:'',
				message:'',
				file: ''
				
            };
        },
		computed: {
     
	},
	methods:{

		 formSubmit() {
				let formData = new FormData();
				formData.append('file', this.file);
				
               axios.post('https://buhaira.herokuapp.com/api/medical-reimbursement-claim', {
				    insured_name:this.insname,
					policy_holder_name:this.policyHolderNmae,
					insured_id:this.insuranceIdNo,
					date_of_treatment:this.dobyear+"-"+this.dobmonth+"-"+this.dobday,
					place_of_treatment:this.placeOfTreat,
					claim_amount:this.claimAmount,
					bank_name:this.bankName,
					branch:this.branch,
					account:this.actNo,
					iban:this.ibnNo,
					mobile:this.mobile,
					email:this.email,
					message:this.message,
					  headers: {
							'Content-Type': 'multipart/form-data'
						}
					
                }).then(function(response){
					alert("Your Claim Submitted Successfully!");
                    console.log('SUCCESS!! '+response);
                }).catch(function(error) {
                     console.log('FAILURE!! '+error);
                });
            }
		,
	 handleFileUpload(){
		this.file = this.$refs.file.files[0];
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
			if(localStorage.dobyear) {
				 this.dobyear = localStorage.dobyear;
			 }
			if(localStorage.dobmonth) {
				 this.dobmonth = localStorage.dobmonth;
			 } 
			if(localStorage.dobday) {
				 this.dobday = localStorage.dobday;
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
	dobyear(Newdobyear) {
      localStorage.dobyear = Newdobyear;
    },
	dobmonth(Newdobmonth) {
      localStorage.dobmonth = Newdobmonth;
    },
	dobday(Newdobday) {
      localStorage.dobday = Newdobday;
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