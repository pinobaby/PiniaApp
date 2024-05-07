<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';


</script>
<template>
  <div>
    <h1>Lista de clientes</h1>
    <!-- Client list -->
    <ClientList />
    <!-- PaginationNumbers -->
    <PaginationNumbers />
    <!-- LoadingModal -->
  </div>
</template>

<style scoped>
</style>