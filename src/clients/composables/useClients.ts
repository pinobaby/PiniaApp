import clientsApi from "@/api/clients-api";
import { useClientsStore } from "@/store/Clients";
import type { Client } from "../interfaces/Client";
import { useQuery } from "@tanstack/vue-query";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const getClients = async (): Promise<Client[]> => {

  const { data } = await clientsApi.get<Client[]>("/clients?_page=1");
  return data;
};

const useClient = () => {

  const store = useClientsStore();

  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery({
    queryKey: ['clients?page=', 1],
    queryFn: () => getClients(),
  });

  watch(data, (clients) => {
    if (clients) {
      store.setClients(clients);
    }
  });

  return {
    isLoading,
    clients,
  };
};

export default useClient;


