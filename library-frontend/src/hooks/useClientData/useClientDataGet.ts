import axios, {AxiosPromise} from "axios"
import { useQuery } from "@tanstack/react-query"
import { clientData } from "../../interface/clientData"

const API_URL = "http://localhost:8080"

const fetchData =async (): AxiosPromise<clientData[]>  => {
    const response = axios.get(API_URL + '/clients')
    return response
}

export function useClientDataGet(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['client-data'],
        retry: 2
    })

    return{
        ...query,
        data:query.data?.data
    }
}