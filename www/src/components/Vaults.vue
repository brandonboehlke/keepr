<template>
    <div id="vaults">
        <div class="row">
            <h1 class="center">Your Vaults</h1>
            <div class="col xs12 s6 m2" v-for="vault in state.vaults">
                <router-link :to="'/vaults'">
                <div class="card-panel teal">
                    <h2>{{vault.name}}</h2>
                    <p> {{vault.description}} </p>
                    <a class="waves-effect amber darken-4 btn-flat" id="right" @click="deleteVault()">Delete {{vault.name}}</a>
                    <a class="waves-effect amber darken-4 btn-flat" id="right" @click="newVault()">Add New Vault</a>
                </div>
                </router-link>
            </div>
           <myKeeps></myKeeps>
        </div>
    </div>
</template>

<script>
import keeps from './keeps'

export default {
name: 'vaults',
// components: {myKeeps},
mounted() {
    this.$root.$data.store.actions.getVaults()
    this.$root.$data.store.actions.getKeeps()
}, 
computed: {
    vaultKeeps() {
        return this.$root.$data.store.state.Vaults
    }
}


}
</script>

<style>

</style>