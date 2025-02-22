"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from "@tanstack/react-query";

const queryRoute = new QueryClient();

interface Props {
  children: ReactNode;
}

const QueryRouteProvider = ({ children }: Props) => {
  return (
    <RQQueryClientProvider client={queryRoute}>
      {children}
    </RQQueryClientProvider>
  );
};

export default QueryRouteProvider;
