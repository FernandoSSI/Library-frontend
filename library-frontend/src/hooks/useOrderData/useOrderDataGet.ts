import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { OrderData } from "../../interface/OrderData"

const API_URL = "http://localhost:8080/orders"

const fetchData = async (): AxiosPromise<OrderData[]> => {
    const response = axios.get(API_URL)
    return response
}

export function useOrderData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['order-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}