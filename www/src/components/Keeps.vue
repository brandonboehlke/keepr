<template>
<div>
  <div class="row">
        <div class="col s12 m4 l3">
          <div class="card blue-grey darken-1" v-for="keep in keeps">
            <div class="card-content white-text">
              <span class="card-title"> {{keep.title}}</span>
              <p> {{keep.imgUrl}} </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
            

</div>

</template>

<script>

export default {
name: 'keeps',
data() {
    return {
        title: '',
        imgUrl: '',
        articleLink: '',
        isPublic: true,
        tags: '',
    }
},
    mounted() {
       this.$root.$data.store.actions.getKeeps()
    },
    computed: {
      keeps() {
          return this.$root.$data.store.state.keeps
      },
      vaults() {
          return this.$root.$data.store.state.vaults
      },
      user() {
          return this.$root.$data.store.state.user
      }
    }
}
</script>


<style>

</style>