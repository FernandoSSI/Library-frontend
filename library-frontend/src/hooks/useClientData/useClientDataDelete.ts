import axios, {AxiosPromise} from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const deleteData =async (id: string): AxiosPromise<any>  => {
    const response = axios.delete(API_URL + '/clients/' + id )
    return response
}

export function useClientDataDelete(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate
}