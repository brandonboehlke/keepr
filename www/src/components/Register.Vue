<template>
    <div class="register container">
        <form @submit.prevent="registerUser" action="#">
            <input type="text" v-model="username" placeholder="Username" required>
            <input type="email" v-model="email" placeholder="Email" required>
            <input type="password" v-model="password" placeholder="Password" reqiured>
            <button class="waves-effect waves-light btn">Register</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                username: '',
                email: '',
                password: ''
            }
        },
        methods: {
            registerUser() {
                this.$root.$data.store.actions.register(this.username, this.email, this.password)

                this.$router.push({
                    path: '/'
                })
        
            }
        },
        computed: {
            logIn(){
                return this.$root.$data.store.state.actions.login()
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .register {
        padding-top: 5rem;
    }
    
   
     .flex-container1 {
        display: inline-block;
        /*flex-direction: row;*/
    }
   
</style>