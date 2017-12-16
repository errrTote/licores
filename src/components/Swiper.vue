<template lang="pug">
  .section.section_licores
    .row.container_icon
      figure.section_icon
        img(:src="icon_bottles")
      h4.section_title Combos
    .row
      swiper.swiper(:options="swiperOption")
        swiper-slide.swiper-slide(v-for="c in combos")
          lic-combo(:combo="c") 
        .swiper-scrollbar(slot="scrollbar")
</template>

<script>
import LicCombo from '@/components/Combo.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'Swiper',
    components: {
      LicCombo,      
      swiper,
      swiperSlide
    },

    data () {
      return {
        icon_bottles: require('@/assets/img/icon_bottles.png'), 
        swiperOption: {
          slidesPerView: 4,
          scrollbar: {
            el: '.swiper-scrollbar'           
          }
        },
        combos: [
          {
            id: 0,
            num: 1,
            nombre: 'Cuba libre',
            img: require('@/assets/img/combo_cacique.jpg'),
            contenido: [
              {
                id: 0,
                num: 1,
                nombre: "Cacique",
                presentacion: "0,70 Lts",
                precio: "500.000Bsf",
              },  
              {
                id: 1,
                num: 2,
                nombre: "Hielo",
                presentacion: "1 bolsa",
                precio: "50.000Bsf",
              }, 
              {
                id: 2,
                num: 3,
                nombre: "Refresco",
                presentacion: "Coca-cola 2Lts",
                precio: "30.000Bsf",
              }             
            ]
          },
          {
            id: 1,
            num: 2,
            nombre: 'Tequila Azteca',
            img: require('@/assets/img/combo_2.jpg'),
            contenido: [
              {
                id: 3,
                num: 1,
                nombre: "Azteca",
                presentacion: "0,70 Lts",
                precio: "1500.000Bsf",
              },  
              {
                id: 4,
                num: 2,
                nombre: "Limon",
                presentacion: "1 Kg",
                precio: "40.000Bsf",
              }, 
              {
                id: 5,
                num: 3,
                nombre: "Sal",
                presentacion: "500g",
                precio: "15.000Bsf",
              }             
            ]
          }, 
          {
            id: 2,
            num: 3,
            nombre: 'Zeppelin',
            img: require('@/assets/img/combo_1.jpg'),
            contenido: [
              {
                id: 6,
                num: 1,
                nombre: "Zeppelin",
                presentacion: "0,70 Lts",
                precio: "350.000Bsf",
              },  
              {
                id: 1,
                num: 2,
                nombre: "Hielo",
                presentacion: "1 bolsa",
                precio: "50.000Bsf",
              }, 
              {
                id: 6,
                num: 3,
                nombre: "Jugo",
                presentacion: "Del Valle 1L",
                precio: "45.000Bsf",
              }             
            ]
          },
          {
            id: 3,
            num: 4,
            nombre: 'Caroreña',
            img: require('@/assets/img/combo_sangria.jpg'),
            contenido: [
              {
                id: 6,
                num: 1,
                nombre: "Sangria",
                presentacion: "Caroreña 0,70 Lts",
                precio: "340.000Bsf",
              },  
              {
                id: 1,
                num: 2,
                nombre: "Hielo",
                presentacion: "1 bolsa",
                precio: "50.000Bsf",
              }, 
              {
                id: 6,
                num: 3,
                nombre: "Refresco",
                presentacion: "Chinotto 1L",
                precio: "30.000Bsf",
              }             
            ]
          },
          {
            id: 0,
            num: 1,
            nombre: 'Cuba libre',
            img: require('@/assets/img/combo_cacique.jpg'),
            contenido: [
              {
                id: 0,
                num: 1,
                nombre: "Cacique",
                presentacion: "0,70 Lts",
                precio: "500.000Bsf",
              },  
              {
                id: 1,
                num: 2,
                nombre: "Hielo",
                presentacion: "1 bolsa",
                precio: "50.000Bsf",
              }, 
              {
                id: 2,
                num: 3,
                nombre: "Refresco",
                presentacion: "Coca-cola 2Lts",
                precio: "30.000Bsf",
              }             
            ]
          },
          {
            id: 1,
            num: 2,
            nombre: 'Tequila Azteca',
            img: require('@/assets/img/combo_2.jpg'),
            contenido: [
              {
                id: 3,
                num: 1,
                nombre: "Azteca",
                presentacion: "0,70 Lts",
                precio: "1500.000Bsf",
              },  
              {
                id: 4,
                num: 2,
                nombre: "Limon",
                presentacion: "1 Kg",
                precio: "40.000Bsf",
              }, 
              {
                id: 5,
                num: 3,
                nombre: "Sal",
                presentacion: "500g",
                precio: "15.000Bsf",
              }             
            ]
          }, 
          {
            id: 2,
            num: 3,
            nombre: 'Zeppelin',
            img: require('@/assets/img/combo_1.jpg'),
            contenido: [
              {
                id: 6,
                num: 1,
                nombre: "Zeppelin",
                presentacion: "0,70 Lts",
                precio: "350.000Bsf",
              },  
              {
                id: 1,
                num: 2,
                nombre: "Hielo",
                presentacion: "1 bolsa",
                precio: "50.000Bsf",
              }, 
              {
                id: 6,
                num: 3,
                nombre: "Jugo",
                presentacion: "Del Valle 1L",
                precio: "45.000Bsf",
              }             
            ]
          },
          {
            id: 3,
            num: 4,
            nombre: 'Caroreña',
            img: require('@/assets/img/combo_sangria.jpg'),
            contenido: [
              {
                id: 6,
                num: 1,
                nombre: "Sangria",
                presentacion: "Caroreña 0,70 Lts",
                precio: "340.000Bsf",
              },  
              {
                id: 1,
                num: 2,
                nombre: "Hielo",
                presentacion: "1 bolsa",
                precio: "50.000Bsf",
              }, 
              {
                id: 6,
                num: 3,
                nombre: "Refresco",
                presentacion: "Chinotto 1L",
                precio: "30.000Bsf",
              }             
            ]
          }          
        ]     
      }
    }
  }
</script>

<style scoped>
  @import '../../node_modules/swiper/dist/css/swiper.css';
  .section_licores:hover .section_icon{
    background-color: black;
  }
  .section_licores{
    padding: 20px;
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
