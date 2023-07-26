const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Learn Vue',
            vueLink: 'http://vuejs.org/'
        };
    }
});

app.mount('#user-goal');