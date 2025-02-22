"use client"

import { Flights } from '@/types';
import { useQuery } from '@tanstack/react-query';
import  axios from "axios"

const fetchFlights = async (): Promise<Flights[]> => {
  const  {data}  = await axios.get('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/flights');
  return data;
};

export const useGetFlights = () => {
  return useQuery<Flights[]>({
    queryKey: ['Flights'],
    queryFn: fetchFlights,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};