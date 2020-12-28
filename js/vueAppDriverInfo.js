const urlNationality = "http://mrinsurance.ae/public/api/nationality";

const vm = new Vue({
        el: '#app',
        data: {
		  nationality:[]
        },
        mounted() {
          axios.get(urlNationality).then(response => {
            this.nationality = response.data
          })
		  
        }
      });
