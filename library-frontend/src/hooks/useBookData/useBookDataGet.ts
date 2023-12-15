import axios, { AxiosPromise } from "axios"
import { bookData } from "../../interface/bookData"
import { useQuery } from "@tanstack/react-query"
import { apiResponse } from "../../interface/apiResponde"
import { useEffect } from "react"

const API_URL = "http://localhost:8080/books/search?"

const fetchData = async (text: string, page: number): AxiosPromise<apiResponse> => {
    const response = axios.get(API_URL + `text=${text}&page=${page}&size=10`)
    return response
}

export function useBookData(text: string, page: number) {
    const query = useQuery({
        queryFn: () => fetchData(text, page),
        queryKey: ['book-data'],
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