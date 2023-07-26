const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Learn Vue',
            vueLink: 'http://vuejs.org/'
        };
    },
    
    methods: {
        outputGoal(){
            const randomNumber  =Math.random();
            if(randomNumber <0.5){
                return 'Learn vue';
            } else {
                return 'Master Vue!';
            }
            
        }
    }
});

app.mount('#user-goal');