<template>
  <div class="row">
      <div 
      class="container"
      v-for="pais in paises" :key="pais.name"
      >
          <card :pais="pais"/>
      </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore} from 'vuex'
import card from './card'
export default {
    components:{
        card 
    },
    setup(){
        const store = useStore()

        const paises = computed(() => {
            //return store.state.paises (para invocar el array de paises)
            //para invocar la funcion de ordenar paises
            return store.getters.topPaisesPoblacion
        })
        onMounted(async() => {
            //dispatch para disparar la accion de getpaises
          await store.dispatch('getPaises')

          await store.dispatch('filtrarContinente', 'Americas')
        })

        return {paises}
    }
}
</script>

<style scope>
  .row{
      width: 800px !important;
  }
 .container{
     width: 320px;
 }
</style>