import axios, {AxiosPromise} from "axios"
import { bookData } from "../../interface/bookData"
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const fetchData =async (): AxiosPromise<bookData[]>  => {
    const response = axios.get(API_URL + '/books')
    return response
}

export function useBookData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['book-data'],
        retry: 2
    })

    return{
        ...query,
        data:query.data?.data
    }
}