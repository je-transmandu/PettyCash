import { Cash } from '@/types';
import { useQuery } from '@tanstack/react-query';
import  axios from "axios"

const fetchPettyCash = async (): Promise<Cash[]> => {
  const  {data}  = await axios.get('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/petty-cash');
  return data;
};

export const useGetPettyCash = () => {
  return useQuery<Cash[]>({
    queryKey: ['petty-cash'],
    queryFn: fetchPettyCash,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
