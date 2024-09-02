const { createApp } = Vue

createApp({
  data() {
    return {
      eMails: []
    }
  },
 
  created(){
    for (let i = 0; i < 10; i++){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp) => {
            this.eMails.push(resp.data.response);  
            
        })       
    }
  }
  
}).mount('#app')




