import axios, {AxiosPromise} from "axios"
import { bookData } from "../../interface/bookData"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { clientData } from "../../interface/clientData"

const API_URL = "http://localhost:8080"




const putData =async (data: clientData): AxiosPromise<any>  => {

    const response = axios.put(API_URL + `/clients/${data.id}`, data)
    return response
}

export function useClientDataPut(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate
}