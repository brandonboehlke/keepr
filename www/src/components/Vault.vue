<template>
  <div class="vault">
    <div v-for="keep in vaultKeeps">
        {{keep}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vault',
  data () {
    return {
    }
  },
  mounted() {
      this.$root.$data.store.actions.getVaultKeeps(this.$route.params.id)
  },
  computed: {
      vaultKeeps() {
          return this.$root.$data.store.state.vault.keeps || []
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>