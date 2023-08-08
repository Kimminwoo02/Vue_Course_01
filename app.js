const app = Vue.createApp({
  data(){
    return {
      detailsAreVisible: false,
      detailsAreVisibleB: false,
      friends: [
        {id:'manuel', 
         name: 'Manuel Lorenz', 
         phone: '01234 5678 999', 
         email: 'asdfjgn@naver.com'
        },
        {
          id: 'julie',
          name: 'julie jones',
          phone: '01234 5432 143',
          email: 'julie@localhost.com'
        },
      ]
    }
  },
  methods: {
    toggleDetails(id){
      this.detailsAreVisible =!this.detailsAreVisible;
    }
  }
});

app.mount('#app');