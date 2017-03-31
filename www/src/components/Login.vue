<template>
  <div class="login container">
    <form @submit.prevent="loginUser">
      <input type="email" v-model="email" placeholder="Email" required >
      <input type="password" v-model="password" placeholder="Password" required>
      <button class="waves-effect waves-light btn">Login</button>
    </form>
   
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      loginUser() {
        if(this.email && this.password){
        this.$root.$data.store.actions.login(this.email, this.password)
        this.email = ''
        this.password = ''
        this.$router.push({path: '/'})

        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  padding-top: 5rem;
}
</style>