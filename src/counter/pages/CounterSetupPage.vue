<script setup lang="ts">
import { useCounterSetup } from '@/store/Counter-setup';
import { storeToRefs } from 'pinia';
import CounterSetupValue from '../components/components/CounterSetupValue.vue';


  const counterOptions = useCounterSetup();
  const { count, squaredCount } = storeToRefs(counterOptions);
  const { increment,incrementBy  } = counterOptions;
</script>
<template>
    
      <h1> Pinia Options </h1>
      <h4>Counter: {{ count }}</h4>
      <h4>SquareCounter: {{ squaredCount }}</h4>

      <br>

      <button @click="increment()">+1</button>
      <button @click="incrementBy(2)">+2</button>
      <button @click="incrementBy(5)">+5</button>
      <button @click="counterOptions.$reset">reset</button>

      <br>

      <CounterSetupValue />

</template>


<style scoped>
h1 {
  color: red;
}button {
  margin-right:  5px;
}
</style>