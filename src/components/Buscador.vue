<template>
 <div class="buscador mx-auto">
     <input type="text" placeholder="ingrese pais" 
       class="form-control my-2 mx-auto"
       v-model="texto"
       @keyup="procesarTexto">

      
       <div class="icon">
          <i class='bx bx-search' ></i>
       </div>
   
 </div>
 
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const texto = ref('')
        const store = useStore()

        const procesarTexto = () =>{
          store.dispatch('filtroNombre', texto.value)
        }

        return {texto, procesarTexto}
    }
}
</script>

<style  scoped>
 .buscador{
   width: 310px;
   display: flex;
   position: relative;
   align-items: center;
 }

 .icon{
   position: absolute;
 }

 .icon i{
   margin-left: 15px;
   margin-top: 5px;
   font-size: 27px;
 }

  input{
    padding-left: 40px;
    width: 300px;
    border-radius: 50px;
    font-weight: 700;
  }

  @media screen and (max-width:990px){
    .buscador{
      width: 500px;
    }

    input{
      width: 500px;
    }
  }
</style>