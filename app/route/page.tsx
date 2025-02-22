"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useGetRoute } from "@/hooks/useGetRoutes";
import { RouteDialog } from "@/components/dialogs/RouteDialog";

const FehaPage = () => {
  const { data, isLoading } = useGetRoute();
  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mt-2">
        Control de Rutas
      </h1>
      <p className="text-sm text-muted-foreground text-center italic mt-2">
        Aqui puede llevar el control de las rutas registradas para las aeronaves
      </p>
      <RouteDialog />
      {data && <DataTable columns={columns} data={data} />}
    </div>
  );
};

export default FehaPage;
