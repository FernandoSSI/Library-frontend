import axios, {AxiosPromise} from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { OrderData } from "../../interface/OrderData"

const API_URL = "http://localhost:8080/orders"

const postData =async (data: OrderData): AxiosPromise<any>  => {
    const response = axios.post(API_URL, data)
    return response
}

export function useOrderDataMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['order-data'])
        }
    })

    return mutate
}