import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { apiResponseBook } from "../../interface/apiResponse"
import { useEffect } from "react"
import { bookData } from "../../interface/bookData"

const API_URL = "http://localhost:8080/books/search?"

const fetchData = async (text: string, page: number, size?:number): AxiosPromise<apiResponseBook> => {
    const response = axios.get(API_URL + `text=${text}&page=${page}&size=${size?size:10}`)
    return response
}

export function useBookData(text: string, page: number, size?:number) {
    const query = useQuery({
        queryFn: () => fetchData(text, page, size),
        queryKey: ['book-data'],
        retry: 2
    })

    useEffect(() => {
        query.refetch();
    }, [text, page, size]);

    return {
        ...query,
        dataBook: query.data?.data
    }
}

const fetchAllData = async (): AxiosPromise<bookData> => {
    const response = axios.get("http://localhost:8080/books")
    return response
}

export function useAllBookData() {
    const query = useQuery({
        queryFn: fetchAllData,
        queryKey: ['book-data'],
        retry: 2
    })

    return {
        ...query,
        dataBook: query.data?.data
    }
}