<template>
  <div class="dashboard">

    <router-link to="/">Back</router-link>

    <h3>My Vaults</h3>
    <div v-for="vault in vaults">
      
      <router-link :to="{ path: '/vaults/' + vault._id }"></router-link>
      <p>{{vault.name}}</p>
    </div>

    <form class="card" @submit.prevent="createVault">
      <input type="text" v-model="name" placeholder="Name"></input>
      <input type="text" v-model="description" placeholder="Description"></input>
      <input type="text" v-model="imageUrl" placeholder="Image"></input>
      <button type="submit">Create New Vault</button>
    </form>

    <h3>My Keeps</h3>
    <div v-for="keep in myKeeps">
      {{keep.title}}
    </div>

    <form class="card" @submit.prevent="createKeep">
      <input type="text" v-model="title" placeholder="Title"></input>
      <input type="text" v-model="body" placeholder="Body"></input>
      <input type="text" v-model="k_imageUrl" placeholder="Image"></input>
      <input type="text" v-model="articleLink" placeholder="Article link"></input>
      <input type="checkbox" id="checkbox" v-model="isPublic">
      <label for="checkbox">Make Public</label>
      <hr>
      <button type="submit">Add Keep</button>
    </form>
    
    </form>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
        name: '',
        description: '',
        imgUrl: '',
        title: '',
        k_imageUrl: '',
        body: '',
        articleLink: '',
        isPublic: false
    }
  },
  mounted() {
    this.$root.$data.store.actions.getDashboard()
  },
  computed: {
      myVaults() {
          return this.$root.$data.store.state.vaults
      },
      myKeeps() {
        return this.$root.$data.store.state.myKeeps
      }
  },
  methods: {
    createVault() {
      console.log(this.imageUrl)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>