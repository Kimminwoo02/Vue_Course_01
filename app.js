const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      fullname:'',
      lastName:''


    };
  },
  watch:{
    counter(value){
      if (value> 50){
        this.counter = 0
      }
    },
      
  
    lastName(value){
      if(value ===''){
        this.fullname = '';
      }else{
        this.fullname = this.name+ ' ' + value;
      }
    }
  },
  computed:{
    fullname(){
      console.log('Running again');
      if(this.name ==='' || this.lastName ===''){
        return ''
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods:{
    outputFullname(){
      if(this.name ===''){
        return '';
      }
      return this.name + ' ' + 'Minu';
    },
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
