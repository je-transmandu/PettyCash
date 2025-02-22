"use client";

import { useGetAircrafts } from "@/hooks/useGetAircrafts";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { AircraftDialog } from "@/components/dialogs/AircraftDialog";

const AircraftPage = () => {
  const { data, isLoading } = useGetAircrafts();
    if (isLoading) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mt-2">
          Control de Aviones
        </h1>
        <p className="text-sm text-muted-foreground text-center italic mt-2">
          Aqui puede llevar el control de los aviones 
        </p>
        <AircraftDialog/>
        {data && <DataTable columns={columns} data={data} />}
      </div>
    );
};

export default AircraftPage;