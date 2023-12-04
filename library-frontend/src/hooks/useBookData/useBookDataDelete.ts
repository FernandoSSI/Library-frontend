import axios, {AxiosPromise} from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const deleteData =async (id: string): AxiosPromise<any>  => {
    const response = axios.delete(API_URL + '/books/' + id )
    return response
}

export function useBookDataDelete(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['book-data'])
        }
    })

    return mutate
}