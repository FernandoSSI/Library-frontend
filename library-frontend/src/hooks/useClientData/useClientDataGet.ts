import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { apiResponseClient } from "../../interface/apiResponse"
import { useEffect } from "react"
import { clientData } from "../../interface/clientData"

const API_URL = "http://localhost:8080/clients/search?"

const fetchData = async (text: string, page: number, size?:number): AxiosPromise<apiResponseClient> => {
    const response = axios.get(API_URL + `text=${text}&page=${page}&size=${size?size:10}`)
    return response
}

export function useClientDataGet(text: string, page: number, size?:number) {
    const query = useQuery({
        queryFn: () => fetchData(text, page, size),
        queryKey: ['client-data'],
        retry: 2
    })

    useEffect(() => {
        query.refetch();
    }, [text, page, size]);

    return {
        ...query,
        dataClient: query.data?.data
    }
}


const fetchAllClient = async (): AxiosPromise<clientData> => {
    const response = axios.get("http://localhost:8080/clients")
    return response
}

export function useAllClientData() {
    const query = useQuery({
        queryFn: fetchAllClient,
        queryKey: ['client-data'],
        retry: 2
    })

    return {
        ...query,
        dataClient: query.data?.data
    }
}