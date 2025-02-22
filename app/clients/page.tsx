"use client";

import { Client } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useGetClients } from "@/hooks/useGetClients";
import { ClientDialog } from "@/components/dialogs/ClientDialog";

const VendorsPage = () => {
  const { data, isLoading } = useGetClients();
  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mt-2">
        Control de Clientes
      </h1>
      <p className="text-sm text-muted-foreground text-center italic mt-2">
        Aquí puede llevar el control de los proveedores registrados para las
        diferentes compras.
      </p>
      <ClientDialog />
      {data && <DataTable columns={columns} data={data} />}
    </div>
  );
};

export default VendorsPage;
