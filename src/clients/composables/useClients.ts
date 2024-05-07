import clientsApi from "@/api/clients-api";
import type { Client } from "../interfaces/Client";
import { useQuery } from "@tanstack/vue-query";

const getClients = async (): Promise<Client[]> => {
    const { data } = await clientsApi.get<Client[]>("/clients?_page=1");
    return data;
};

const useClient = () => {

   const { isLoading, data } = useQuery({
        queryKey: ["clients"],
        queryFn: () => getClients(),
   });
    return {
        isLoading,
        clients: data,
    };
};

export default useClient;
