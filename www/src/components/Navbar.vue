<template>

<nav class = "fixed-nav-bar"v-if= "true">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Keepr</a>
      <div v-if="loading">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>loading ... please wait...</li>
      </ul>
      </div>
      <div v-else-if="!user.name">
       <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="login">Login </router-link> </li>
            <li><router-link to="register">Register </router-link> </li>
            <li><router-link to="keeps"> Browse All Keeps</router-link></li>
            
      </ul>
      </div>
      <div v-else>
       <ul id="nav-mobile" class="right hide-on-med-and-down" >
        <li> Welcome, <strong>{{user.name}}</strong>!</li>
        <li><router-link to="dashboard"> Go to Dashboard</router-link> </li>
        <li><router-link to="keeps"> Browse All Keeps</router-link></li>
        <li><a href='#' @click="logout">Logout</a></li>
      </ul>
      </div>
    </div>
  </nav>


    
</template>

<script>
    export default {
        name: 'navbar',
        mounted() {
            this.$root.$data.store.actions.authenticate()
        },
        methods: {
            logout() {
                this.$root.$data.store.actions.logout()
                this.$router.push({path: '/'})
            }
                },
        computed: {
            user() {
                return this.$root.$data.store.state.activeUser
            },
            loading() {
                return this.$root.$data.store.state.isLoading
            },
            vault() {
                return this.$root.$data.store.state.myVaults
            }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        text-align: right;
        padding-right: 5%;
    }
    nav{
        background-color: black;
        font-family:'Montserrat', sans-serif;
        z-index: 2;
        overflow: hidden;
        position: fixed;
       
    }
    .nav-wrapper{
        text-align: left;
    }
    .fixed-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 50px;
}
    a{
       color: #11abb0
    }
    .badger{
        height: 5vh;
    }
</style>