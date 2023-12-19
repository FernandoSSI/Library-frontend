import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { apiResponseClient } from "../../interface/apiResponse"
import { useEffect } from "react"

const API_URL = "http://localhost:8080/clients/search?"

const fetchData = async (text: string, page: number): AxiosPromise<apiResponseClient> => {
    const response = axios.get(API_URL + `text=${text}&page=${page}&size=10`)
    return response
}

export function useClientDataGet(text: string, page: number) {
    const query = useQuery({
        queryFn: () => fetchData(text, page),
        queryKey: ['client-data'],
        retry: 2
    })

    useEffect(() => {
        query.refetch();
    }, [text, page]);

    return {
        ...query,
        data: query.data?.data
    }
}