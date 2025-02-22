"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/tables/DataTableHeader";
import { Cash } from "@/types";
import CashDropdownActions from "@/components/dropdowns/CashDropdownActions";

export const columns: ColumnDef<Cash>[] = [
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader filter column={column} title="Descripción" />
    ),
    meta: { title: "Descripción" },
    cell: ({ row }) => (
      <div className="flex justify-center font-bold">
        {row.original.description}
      </div>
    ),
  },
  {
    accessorKey: "responsible",
    header: ({ column }) => (
      <DataTableColumnHeader filter column={column} title="Responsable" />
    ),
    meta: { title: "Responsable" },
    cell: ({ row }) => (
      <div className="flex justify-center font-bold">
        {row.original.responsible}
      </div>
    ),
  },
  {
    accessorKey: "income",
    header: ({ column }) => (
      <DataTableColumnHeader filter column={column} title="Ingreso" />
    ),
    meta: { title: "Ingreso" },
    cell: ({ row }) => (
      <div className="flex justify-center">
        <span className="text-muted-foreground italic">
          {row.original.income}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "outcome",
    header: ({ column }) => (
      <DataTableColumnHeader filter column={column} title="Egreso" />
    ),
    meta: { title: "Egreso" },
    cell: ({ row }) => (
      <div className="flex justify-center">
        <span className="text-muted-foreground italic">
          {row.original.outcome}
        </span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <CashDropdownActions responsible={row.original.responsible} />;
    },
  },
];
