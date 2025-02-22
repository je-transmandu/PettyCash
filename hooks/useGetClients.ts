import { Client } from '@/types';
import { useQuery } from '@tanstack/react-query';
import  axios from "axios"

const fetchClients = async (): Promise<Client[]> => {
  const  {data}  = await axios.get('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/clients');
  return data;
};

export const useGetClients = () => {
  return useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: fetchClients,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};