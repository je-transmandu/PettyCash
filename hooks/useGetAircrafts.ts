"use client"

import { Aircraft } from '@/types';
import { useQuery } from '@tanstack/react-query';
import  axios from "axios"

const fetchAircrafts = async (): Promise<Aircraft[]> => {
  const  {data}  = await axios.get('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/aircrafts');
  return data;
};

export const useGetAircrafts = () => {
  return useQuery<Aircraft[]>({
    queryKey: ['Aircrafts'],
    queryFn: fetchAircrafts,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};