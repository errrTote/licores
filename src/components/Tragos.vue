<template lang="pug">
  .section.section_licores
    .row.container_icon
      figure.section_icon
        img(:src="icon_drink")
      h4.section_title Tragos
    .row
      swiper.swiper(:options="swiperOption")
        swiper-slide.swiper-slide(v-for="t in tragos")
          lic-trago(:trago="t") 
        .swiper-scrollbar(slot="scrollbar")
</template>

<script>
import LicTrago from '@/components/Trago.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'Swiper',
    components: {
      LicTrago,      
      swiper,
      swiperSlide
    },

    data () {
      return {
        icon_drink: require('@/assets/img/icon_drink.png'), 
        swiperOption: {
          slidesPerView: 4,
          scrollbar: {
            el: '.swiper-scrollbar'           
          }
        },
        tragos: [
          {
            nombre: 'Sangria (20 personas)',
            img: require('@/assets/img/sangria.jpg'),
            especial: true,
            contenido: [
              'Azucar',
              'Brandy',
              'Jugo de Limon',
              'Jugo de Naranja',
              'Limon',
              'Manzana',
              'Naranja',
              'Soda',
              'Triple Sec',
              'Vino Tinto'
            ]
          },
          {
            nombre: 'Banana daiquiri',
            img: require('@/assets/img/banana_daiquiri.jpg'),
            contenido: [
              'Azucar',
              'Cambur',
              'Limon',
              'Ron Blanco'
            ]
          },
          {
            nombre: 'Piña colada tropical',
            img: require('@/assets/img/pina_colada.jpg'),
            contenido: [
              'Crema de coco',
              'Jugo de Piña',
              'Leche evaporada',
              'Piña',
              'Ron Blanco',
              'Ron Saborizado de Coco'
            ]
          },
          {
            nombre: 'Chocolate Martini',
            img: require('@/assets/img/chocolate_martini.jpg'),
            especial: true,
            contenido: [
              'Licor de Cacao',
              'Sirope de Chocolate',
              'Vodka'
            ]
          },
          {
            nombre: 'Caipirinha',
            img: require('@/assets/img/caipirinha.jpg'),
            contenido: [
              'Azucar',
              'Cachaça',
              'Limon'
            ]
          },
          {
            nombre: 'Vodkazul',
            img: require('@/assets/img/vodkazul.jpg'),
            contenido: [
              'Blue Curaçao',
              'Ginebra',
              'Jarabe De Goma',
              'Jugo de limon',
              'Ron Blanco',
              'Tequila Blanco',
              'Vodka'
            ]
          },
          {
            nombre: 'Sex on The Beach',
            img: require('@/assets/img/sex_beach.jpg'),
            contenido: [
              'Granadina',
              'Jugo de Arandano',
              'Jugo de Piña',
              'Licor de Durazno',
              'Vodka'
            ]
          },
        ]     
      }
    }
  }
</script>

<style scoped>
  @import '../../node_modules/swiper/dist/css/swiper.css';
  .section_licores:hover .section_icon{
    background-color: #BD1919;
  }
  .section_licores{
    padding: 20px;
    padding-bottom: 40px;
  }  
  .container_icon{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .section_icon{
    position: relative;
    display: inline-block;
    transition: .3s;
    border-radius: 50%;    
  }
  .section_title{
    margin: 0;
  }
  .section_icon img {
    width: 70px;
    height: 70px;   
  }
  
</style>
