"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { AircraftForm } from "../forms/aircraft-form";

export function AircraftDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant={"outline"}
          className="flex items-center justify-center gap-2 h-8 border-dashed">
          Registrar Avión 
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Crear Avión</DialogTitle>
          <DialogDescription>Cree un nuevo avión.</DialogDescription>
        </DialogHeader>
        <AircraftForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}