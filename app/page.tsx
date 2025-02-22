import { ClientForm } from "@/components/forms/client-form";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registro de Clientes</h1>
      <ClientForm />
      <Toaster />
    </main>
  );
}
