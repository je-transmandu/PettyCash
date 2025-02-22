import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"

export const useCreateClient = () => {

    const queryClient = useQueryClient()
    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            await axios.post('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/clients', data)
          },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['clients']})
            toast("¡Creado!", {
                description: `¡El cliente se ha creado correctamente!`
            })
          },
        onError: (error) => {
            toast('Hey', {
              description: `No se creo correctamente: ${error}`
            })
          },
        }
    )

    return {
      createClient: createMutation,
    }
}
