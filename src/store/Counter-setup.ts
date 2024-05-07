import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCounterSetup = defineStore('counterSetup', () => {

    const count       = ref<number>(0);
    const lastChanged  = ref<Date>();
    const incrementBy = (value: number) => {
        count.value += value;
        lastChanged.value = new Date();
    }

    return {
        //state properties
        count,
        lastChanged,
        //getters
        squaredCount: computed (() => count.value * count.value ),
        //actions
        incrementBy,
        increment: () => incrementBy(1)
    }
});