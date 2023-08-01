const app = Vue.createApp({
  data() {
    return {
        enterdGoalValue: '',
        goals: [] };
  },
  methods:{
    addGoal(){
        this.goals.push(this.enterdGoalValue);

    }
  }
});

app.mount('#user-goals');
