import axios, {AxiosPromise} from "axios"
import { bookData } from "../interface/bookData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const postData =async (data: bookData): AxiosPromise<any>  => {
    const response = axios.post(API_URL + '/books', data)
    return response
}

export function useBookDataMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['book-data'])
        }
    })

    return mutate
}