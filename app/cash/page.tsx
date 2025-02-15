"use client";

import { useGetPettyCash } from "@/hooks/useGetPettyCash";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const PettyCash = () => {
  const { data, isLoading } = useGetPettyCash();
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mt-2">
        Control de Clientes
      </h1>
      <p className="text-sm text-muted-foreground text-center italic mt-2">
        Aquí puede llevar el control de los proveedores registrados para las
        diferentes compras.
      </p>
      {isLoading && <p>Its Loading...</p>}
      {data && <DataTable columns={columns} data={data} />}
    </div>
  );
};

export default PettyCash;
