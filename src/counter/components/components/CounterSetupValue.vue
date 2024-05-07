<script setup lang="ts">
import { useCounterSetup } from '@/store/Counter-setup';


    const counter = useCounterSetup();
</script>

<template>
    <h1>el valor es: {{ counter.count }}</h1>
    <h4>el ultimo cambio fue: {{ counter.lastChanged }} </h4>
</template>

<style lang="scss" scoped>

</style>