"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from "@tanstack/react-query";

const queryAircraft = new QueryClient();

interface Props {
  children: ReactNode;
}

const QueryAircraftProvider = ({ children }: Props) => {
  return (
    <RQQueryClientProvider client={queryAircraft}>
      {children}
    </RQQueryClientProvider>
  );
};

export default QueryAircraftProvider;