<script setup lang="ts">
import useClients from '@/clients/composables/useClients';


 const { clients } = useClients();
 
</script>

<template>
  <ul>
    <RouterLink :to="{
        name: 'client-id',
        params: { id: 1 },
      }"
    >
      Client Name
    </RouterLink>
  </ul>
</template>

<style scoped></style>
