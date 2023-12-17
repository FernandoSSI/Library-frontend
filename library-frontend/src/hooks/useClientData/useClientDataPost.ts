import axios, {AxiosPromise} from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { clientData } from "../../interface/clientData"

const API_URL = "http://localhost:8080"

const postData =async (data: clientData): AxiosPromise<any>  => {
    const response = axios.post(API_URL + '/clients', data)
    return response
}

export function useClientDataMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate
}