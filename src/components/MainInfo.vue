<template>
    <div class="card-body" >
      <h3 class="card-title">Информация о сотруднике {{ worker.id }}</h3>
      <h4 class="card-text">{{ worker.LastName }} {{ worker.FirstName }}</h4>
      <h5 class="card-text"> Номер телефона: {{ worker.PhoneNumber }}</h5>
      <h5 class="card-text">Почта: {{ worker.email }}</h5>
    </div>
</template>

<script>
export default {
  name: "MainInfo",
  props:{
    worker: {
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style>
  .card-body{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    min-width: 350px;
  }
  h3{
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
</style>