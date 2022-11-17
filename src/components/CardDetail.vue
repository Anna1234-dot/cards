<template>
  <div>
    <MainInfo
        v-bind:worker="worker"/>
    <router-link to="/"><button class="btn">Назад</button></router-link>

  </div>
</template>

<script>

import MainInfo from "@/components/MainInfo";
export default {
  props: {
    id: Number,
  },
  name: "CardDetail",
  components: {
    MainInfo,
  },
  computed: {
    worker(){
      const id = Number(this.id)
      return this.$store.getters.workerById(id)
    }
  }
}
</script>

<style scoped>
  .btn{
    border: solid lightgreen 1px;
    background-color: lightgreen;
  }
</style>