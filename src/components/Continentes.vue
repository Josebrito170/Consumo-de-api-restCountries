<template>
  <div class="text-center">
      <h2>Buscar por Continentes</h2>
       <div class="btn-group my-3" role="group" aria-label="Basic example">
         <button type="button" class="btn btn-dark" @click="filtro('Americas')">AM</button>
         <button type="button" class="btn btn-dark" @click="filtro('Europe')">EU</button>
         <button type="button" class="btn btn-dark" @click="filtro('Asia')">AS</button>
         <button type="button" class="btn btn-dark" @click="filtro('Oceania')">OC</button>
         <button type="button" class="btn btn-dark" @click="filtro('Africa')">AF</button>
         <button type="button" class="btn btn-dark" @click="filtro('')">TODOS</button>
      </div>  
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()

        const filtro = (region) => {
            store.dispatch('filtrarContinente', region)
        }

        return {filtro}
    }
}
</script>

<style scoped>
    .btn-group{
        width: auto;
    }
</style>
