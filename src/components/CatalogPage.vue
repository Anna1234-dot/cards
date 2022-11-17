<template>
  <div>
    <input  class="input" type="text"
           v-bind:value="inputValue"
           v-on:input="changeInput"
           placeholder="Введите фамилию или имя сотрудника">

    <div class="catalog" >
      <CardPage
        v-for="worker in inStr"
        :key="worker.id"
        v-bind:workers_data="worker"
        />
    </div>

  </div>
</template>

<script>
import CardPage from "@/components/CardPage";

export default {
  name: 'CatalogPage',
  data(){
    return{
      inputValue: '',
    }
  },
  components: {
    CardPage,
  },
  methods: {
    changeInput() {
      this.inputValue = event.target.value;
    },
  },
  computed: {
    workers(){
      return this.$store.getters.workers
    },
    inStr() {
      return this.workers.filter(worker => {
        return worker.LastName.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1 ||
            worker.FirstName.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1 ||
            (worker.LastName+' '+worker.FirstName).toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1 ||
            (worker.FirstName+' '+worker.LastName).toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1
      })
    }
  }
}


</script>

<style>
 .catalog{
   display: flex;
   flex-wrap: wrap;
   padding: 0 50px;
 }
 .input{
   width: 520px;
   height: 40px;
   border-radius: 10px;
   border: 2px solid black;
   padding: 0 10px;
 }
</style>