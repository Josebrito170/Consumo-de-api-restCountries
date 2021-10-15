<template>
  <div class="card mb-3">
      <div class="card-body text-dark rounded">
          <p class="text-center">
              <img :src="pais.flags[1]" :alt="`bandera-${pais.name}`" class="img-fluid w-75">
          </p>
          <p class="card-text">
              <h3 class="d-block mb-1 text-center">{{pais.name.common}}</h3>
              <span class="badge badge-danger d-block p-3 mb-1">Población: {{numeroFormato(pais.population)}}</span>
              <h5 class=" d-block mb-1">Capital: {{pais.capital}}</h5>
              <h5 class=" d-block mb-1">Región: {{pais.region}}</h5>

          </p>
      </div>
  </div>
</template>

<script>
export default {
    props:['pais'],

    setup(){
        const numeroFormato = (num) =>{
            //(de-DE) es el codigo para el orden de los numeros
            return new Intl.NumberFormat("de-DE").format(num)
        }

        return {numeroFormato}
    }
}
</script>

<style scoped>
    .card{
        width: 300px;
        background: #f5f6fa;
    }
</style>