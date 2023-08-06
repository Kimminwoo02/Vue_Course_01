const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      ///this.message = this.currentUserInput;
      this.message = this.$refs.userText;
    },
    beforeCreate(){
      console.log('beforeCreate()');
    },
    created(){
      console.log('created()');
    },
    boforeMount(){
      console.log('beforeMount()');
    },
    mounted(){
      console.log('mounted()');
    },
    beforeUpdated(){
      console.log('beforeUpdated');
    },
    update(){
      console.log('updated()');
    }
  },
});

app.mount('#app');

app.unmount();

const app2= Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p
  `,
  data() {
    return{
      favoriteMeal: 'Something'
    };
  }
});
app2.mount('#app2');
