<template lang="pug" >
  #index-banner.parallax-container
    .section.no-pad-bot
    .parallax
      img.logo_bar_img(:src="image", alt="Unsplashed background img 1")
</template>

<script>  
  export default {
    props: {
      image: {
        type: String,
        required: true
      }
    }      
  }
</script>