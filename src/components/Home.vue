<template>
  <div class="home">
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">        
      </div>
      <div class="parallax"><img class="logo_bar_img" :src="logo_bar" alt="Unsplashed background img 1"></div>
    </div>
    <div >
      <div class="section section_licores">
        <div class="row container-icon">
          <figure class="section_icon">
            <img :src="icon_bottles">
          </figure>
          <h4 class="section_title">Combos</h4>
        </div> 
        <div class="row">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="c in combos">
              <lic-combo :combo="c" ></lic-combo> 
            </swiper-slide>            
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>       
        </div>       
      </div>
      <div class="section section_contact">
        <div class="row container-icon">
          <figure class="section_icon">
            <img :src="icon_contact">
          </figure>
          <h4>Contacto</h4>
          <lic-contact></lic-contact>  
        </div>         
      </div>
    </div> 
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
        
      </div>
      <div class="parallax"><img :src="background3" alt="Unsplashed background img 3"></div>
    </div>   
  </div>  
</template>
<script>
import LicCombo from '@/components/Combo.vue'
import LicContact from '@/components/Contact.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'Home',
    components: {
      LicCombo,
      LicContact,
      swiper,
      swiperSlide
    },

    data () {
      return {
        logo_bar: require('@/assets/img/back1.jpg'),
        background2: require('@/assets/img/back_2.png'),
        background3: require('@/assets/img/back_3.png'),        
        icon_bottles: require('@/assets/img/icon_bottles.png'),      
        icon_contact: require('@/assets/img/icon_contact_white.png'),
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../node_modules/swiper/dist/css/swiper.css';

  .section_licores:hover .section_icon{
    background-color: black;

  }
  .section_licores{
    padding: 20px;
  }
  .logo_bar_img{
    width: 100%;
  }
  .container-icon{
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

  .section_contact{
    background-color: black;
    color: white;
    padding: 20px;
  }
  .section_contact:hover .section_icon{
    background-color: white;
  } 

</style>
