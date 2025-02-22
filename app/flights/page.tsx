"use client";

import { useGetFlights } from "@/hooks/useGetFlights";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { FlightDialog } from "@/components/dialogs/FlightDialog";

const FlightPage = () => {
  const { data, isLoading } = useGetFlights();
    if (isLoading) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mt-2">
          Control de Vuelos
        </h1>
        <p className="text-sm text-muted-foreground text-center italic mt-2">
          Aqui puede llevar el control de los vuelos 
        </p>
        <FlightDialog/>
        {data && <DataTable columns={columns} data={data} />}
      </div>
    );
};

export default FlightPage;
