import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"

export const useCreateFlight = () => {

    const queryFlight = useQueryClient()
    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            await axios.post('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/flights', data)
          },
        onSuccess: () => {
            queryFlight.invalidateQueries({queryKey: ['flights']})
            toast("¡Creado!", {
                description: `¡El vuelo se ha creado correctamente!`
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
      createFlight: createMutation,
    }
}