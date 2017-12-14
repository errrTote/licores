<template>
  <div class="card">
    <div class="card-image">
      <img :src="combo.img">
    </div>
    <div class="card-content">
      <ul>
        <li v-for="c in combo.contenido"> {{ c.nombre }} {{ c.presentacion }}</li>
      </ul>
    </div>                
  </div>
</template>

<script>  
  export default {
    props: {
      combo: {
        type: Object,
        required: true
      }
    }      
  }
</script>

<style scoped>
  .card-image img{
    height: 250px;
    width: 250px;
  }

  .card{
    display: inline-block;
  } 

</style>