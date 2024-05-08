<script setup lang="ts">
import LoadingModal from '@/components/icons/LoadingModal.vue';
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import useClient from '../composables/useClients';

const { isLoading, clients, currentPage, getPage, totalPages } = useClient();


</script>
<template>
  <div>
    <h1>Lista de clientes</h1>
    <!-- Client list -->
    <ClientList :clients="clients" />
    <!-- PaginationNumbers -->
    <PaginationNumbers
    :currentPage="currentPage"
    :totalPages="totalPages"
    @page-changed="getPage"
    />
    <!-- LoadingModal -->

   <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped>
</style>