"use client";

import { useCreateAircraft } from "@/actions/aircraft/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  client_id: z.string().min(1).max(20),
  location: z.string().min(1).max(20),
  fabricant: z.string(),
  brand: z.string(),
  serial: z.string(),
  acronym: z.string(),
  flight_hours: z.number(),
  cycles: z.number(),
  fabricant_date: z.string(),
  owner: z.string(),
  aircraft_operator: z.string(),
  type_engine: z.string(),
  number_engine: z.number(),
  coments: z.string(),
});

interface FormProps {
  onClose: () => void;
}

export function AircraftForm({ onClose }: FormProps) {
  const { createAircraft } = useCreateAircraft();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createAircraft.mutateAsync(values);
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="client_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cliente</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el Cliente" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Locación</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa la locación" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fabricant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fabricante</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el fabricante" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <FormControl>
                <Input placeholder="Marca de la aeronave" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Serial</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el código del serial" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="acronym"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Placa</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa la placa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="flight_hours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de horas</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese las horas devuelo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cycles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ciclos</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa los ciclos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fabricant_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de fabricación</FormLabel>
              <FormControl>
                <Input
                  placeholder="Fecha en la que fue fabricada la aeronave"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dueño</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese al dueño" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aircraft_operator"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Operador de aeronave</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese al operador de la aeronave"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type_engine"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de motor</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el tipo de motor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number_engine"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de motor</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el número del motor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentarios</FormLabel>
              <FormControl>
                <Input placeholder="Comentarios/Detalles" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={createAircraft.isPending}>
          {createAircraft.isPending ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
