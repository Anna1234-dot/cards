<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <MainInfo
      v-bind:worker="workers_data"
      />

      <router-link
          :to="'/detail/'+this.workers_data.id"
          v-bind:worker="workers_data">
        <button class="btn">Подробнее</button>
      </router-link>

    </div>
  </div>
</template>

<script>


import MainInfo from "@/components/MainInfo";
export default {
  name: 'CardPage',
  components: {
    MainInfo
  },
  data(){
    return {
      pageDetail: false,
      newWorker: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  },
  props: {
    page: Boolean,
    workers_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .card{
    position: relative;
    border: solid 2px;
    margin: 1em;
    width: 400px;
    min-width: 400px;
    border-radius: 9px;
    background-color: rgba(180, 253, 233, 0.84);
  }
  .btn{
    position: relative;
    border: solid rgba(180, 253, 233, 0.84) 0.1px;
    border-radius: 3px;
    background-color: bisque;
    bottom: 10px;
  }
</style>