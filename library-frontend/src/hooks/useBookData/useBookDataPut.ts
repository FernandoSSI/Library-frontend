import axios, {AxiosPromise} from "axios"
import { bookData } from "../../interface/bookData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"




const putData =async (data: bookData): AxiosPromise<any>  => {

    const response = axios.put(API_URL + `/books/${data.id}`, data)
    return response
}

export function useBookDataPut(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['book-data'])
        }
    })

    return mutate
}