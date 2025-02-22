"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from "@tanstack/react-query";

const queryFlight = new QueryClient();

interface Props {
  children: ReactNode;
}

const QueryFlightProvider = ({ children }: Props) => {
  return (
    <RQQueryClientProvider client={queryFlight}>
      {children}
    </RQQueryClientProvider>
  );
};

export default QueryFlightProvider;
