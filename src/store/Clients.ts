import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/Client';

export const useClientsStore = defineStore('clients', () => {

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
           if(page <= 0 ) return
        //    if(page > totalPages.value) return

              currentPage.value = page;
        }
       
    }
});