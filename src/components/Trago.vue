<template lang="pug">         
  .card(:class="{'special': trago.especial === true}")
    .card-image
      span(v-if="trago.especial" class="special_tag") Especial
      img(:src="trago.img")        
    .card-content
      .card-title {{ trago.nombre }}
      ul.collapsible( data-collapsible="accordion" )
        li
          .collapsible-header Contenido
          .collapsible-body
            li(v-for="i in trago.contenido") {{ i }}      
</template>

<script>  
  export default {
    props: {
      trago: {
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

  .card-image{
    position: relative;
    display: inline-block;
  }


  .special{
    border: solid gold 2px;
  }

  .special_tag{
    color: black;
    background-color: gold;
    rotate: 30deg;
  }

</style>