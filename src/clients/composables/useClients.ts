import clientsApi from "@/api/clients-api";
import { useClientsStore } from "@/store/Clients";
import type { Client } from "../interfaces/Client";
import { useQuery } from "@tanstack/vue-query";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";

const getClients = async (page: number): Promise<Client[]> => {

  await new Promise(resolve => {
    setTimeout(() => resolve(true), 1500 );
  });
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClient = () => {

  const store = useClientsStore();

  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery({
    queryKey: ['clients?page=', currentPage],
    queryFn: () => getClients( currentPage.value ),
  });

  watch(data, (clients) => {
    if (clients) {
      store.setClients(clients);
    }
  });

  return {
    isLoading,
    clients,
    currentPage,
    totalPages,

    //methdos
    getPage(page: number) {
      store.setPage(page);
    },

    //Getters
    totalPageNumbers: computed(() => [...new Array(totalPages.value)].map( (v,i) => i + 1)),
  };
};

export default useClient;


