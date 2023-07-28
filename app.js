const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''

    };
  },
  methods:{
    confirmInput(){
      this.confirmedName=this.name;
    },
    submitForm(event){
      
      alert('submitted');
    }
    ,
    setName(event,lastName){
      this.name = event.target.value 
    },
    add(num){
        this.counter = this.counter + num;
    },
    reduce(num){
        this.counter = this.counter - num;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
