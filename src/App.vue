<template>

  <div>
    <div class="my-3 border-bottom">
      <h1 class="text-center">Paises API <i class='bx bx-world'></i></h1>
    </div>
     <div class="row justify-content-start">
       <div class="col-lg-4 col-md-12">
         <div class="sticky">
          <Continentes />
          <Buscador />
         </div> 
       </div>
       <div class="col-lg-8 col-md-12">
          <CardList />
       </div>
     </div>
   
  </div>
  
</template>

<script>
import Buscador from './components/Buscador'
import Continentes from './components/Continentes'
import CardList from './components/CardList'
export default {
  name: 'App',
  components: {
    CardList, Continentes, Buscador
  }
}
</script>

<style scoped>
  .row{
    width: 100% !important;
  }

  .col-lg-4{
    border-right: 1px solid #dee2e6!important;
  }

  .sticky{
    top: 30px;
    position: sticky;
  }

  @media screen and (max-width:990px) {
    .col-lg-4{
      border-right: none !important;
      border-bottom: 1px solid #dee2e6!important;
      margin-bottom: 30px;
      padding-bottom: 20px;
  }
  }
</style>

