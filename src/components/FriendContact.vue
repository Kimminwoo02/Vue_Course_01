<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails"> 디테일 Show</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong> {{friend.phone}}</li>
            <li><strong>email: </strong> {{friend.email}}</li>
        </ul>
    </li>
</template>

<script>
export default{
    data(){
        return{
          detailsAreVisible: false,
          friend: {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "0123 4563 20",
            email: "manuel@localhost.com",
          },
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>