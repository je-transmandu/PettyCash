"use client"

import { Route } from '@/types';
import { useQuery } from '@tanstack/react-query';
import  axios from "axios"

const fetchRoute = async (): Promise<Route[]> => {
  const  {data}  = await axios.get('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/route');
  return data;
};

export const useGetRoute = () => {
  return useQuery<Route[]>({
    queryKey: ['routes'],
    queryFn: fetchRoute,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};