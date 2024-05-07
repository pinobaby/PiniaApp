import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/Client';

export const useClientsSetup = defineStore('Clients', () => {

    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<Client[]>([]);
    

    return {
        //state properties
        currentPage,
        totalPages,
        clients,
       
        //getters
        // squaredCount: computed (() => count.value * count.value ),
        //actions
        setClients(newClients: Client[]) {
            clients.value = newClients;
        },
        setPage(page: number) {
           if(currentPage.value === page) return
              currentPage.value = page;
        }
       
    }
});