import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"

export const useCreateRoute = () => {

    const queryRoute = useQueryClient()
    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            await axios.post('http://172.190.0.215/SIGEAC_Backend/public/api/transmandu/route', data)
          },
        onSuccess: () => {
            queryRoute.invalidateQueries({queryKey: ['routes']})
            toast("¡Creado!", {
                description: `¡La ruta se ha creado correctamente!`
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
      createRoute: createMutation,
    }
}
