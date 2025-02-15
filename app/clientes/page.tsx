"use client";

import { Client } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const clients: Client[] = [
  {
    id: 1,
    dni: "V27602204",
    first_name: "Angel",
    last_name: "Anton",
    phone_number: "04242025399",
    address: "Sierra Parima",
  },
  {
    id: 2,
    dni: "V27602204",
    first_name: "Joselyn",
    last_name: "Espejo",
    phone_number: "0424718367",
    address: "Villa Brasil",
  },
  {
    id: 3,
    dni: "V27602204",
    first_name: "Osmary",
    last_name: "Barriga",
    phone_number: "0412781342",
    address: "Lomas del Caroni",
  },
  {
    id: 4,
    dni: "V27602204",
    first_name: "Henry",
    last_name: "Guzman",
    phone_number: "04247188382",
    address: "Guamo",
  },
  {
    id: 5,
    dni: "V27602204",
    first_name: "Joel",
    last_name: "Abreu",
    phone_number: "0424187239",
    address: "No se",
  },
];

const VendorsPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mt-2">
        Control de Clientes
      </h1>
      <p className="text-sm text-muted-foreground text-center italic mt-2">
        Aquí puede llevar el control de los proveedores registrados para las
        diferentes compras.
      </p>
      <DataTable columns={columns} data={clients} />
    </div>
  );
};

export default VendorsPage;
