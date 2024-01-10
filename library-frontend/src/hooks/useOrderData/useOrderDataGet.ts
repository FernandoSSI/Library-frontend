import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { OrderData } from "../../interface/OrderData"
import { useEffect } from "react"
import { apiResponseOrder } from "../../interface/apiResponse"

const API_URL = "http://localhost:8080/orders/search?"

const fetchData = async (text: string, page: number, size?:number): AxiosPromise<apiResponseOrder> => {
    const response = axios.get(API_URL + `text=${text}&page=${page}&size=${size?size:10}`)
    return response
}

export function useOrderDataGet(text: string, page: number, size?:number) {
    const query = useQuery({
        queryFn: () => fetchData(text, page, size),
        queryKey: ['order-data'],
        retry: 2
    })

    useEffect(() => {
        query.refetch();
    }, [text, page, size]);

    return {
        ...query,
        data: query.data?.data
    }
}

const fetchAllData = async (): AxiosPromise<OrderData[]> => {
    const response = axios.get("http://localhost:8080/orders")
    return response
}

export function useAllOrderData() {
    const query = useQuery({
        queryFn: fetchAllData,
        queryKey: ['order-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}