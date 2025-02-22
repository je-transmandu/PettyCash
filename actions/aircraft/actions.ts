import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"

export const useCreateAircraft = () => {

    const queryAircraft = useQueryClient()
    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            await axios.post('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/aircrafts', data)
          },
        onSuccess: () => {
            queryAircraft.invalidateQueries({queryKey: ['aircrafts']})
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
      createAircraft: createMutation,
    }
}