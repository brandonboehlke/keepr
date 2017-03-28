<template>
<div>
  <div class="row">
        <div class="col s12 m4 l3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title"></span>
              <p> {{keep.imageUrl}} </p>
              <p> {{keep.title}}</p>
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
name: keeps,
data() {
    return {
        keeps: []
    }
    computed: {
        getKeeps: this.$root.$data.store.action.getKeeps()
    }
}

}
</script>


<style>

</style>