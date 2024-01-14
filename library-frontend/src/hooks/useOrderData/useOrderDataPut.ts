import axios, {AxiosPromise} from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { OrderData } from "../../interface/OrderData"

const API_URL = "http://localhost:8080"

const putData =async (data: OrderData): AxiosPromise<any>  => {

    const response = axios.put(API_URL + `/orders/${data.id}`, data)
    return response
}

export function useOrderDataPut(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['order-data'])
        }
    })

    return mutate
}