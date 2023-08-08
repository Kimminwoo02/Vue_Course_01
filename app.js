const app = Vue.createApp({
  data(){
    return {
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

app.component('friend-contact', {
  template: `
  <li v-for="friend in friends" :key="friend.id">
          <h2>{{ friend.name}}</h2>
          <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>
  `,
  data(){
    return {detailsAreVisible: false,
      friends:{
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5672 991',
        email: 'manuel@localhost.com'
      },
    };
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');