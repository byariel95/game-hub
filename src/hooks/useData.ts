import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface IFetchResponse<T> {
    count: number;
    results: T[];
}

export const useData = <T>(enpoint: string,requestConfig?:AxiosRequestConfig,deps?: any[])=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<IFetchResponse<T>>(enpoint,{signal:controller.signal,...requestConfig})
            .then(res => {
                setData(res.data.results);
                setIsLoading(false);
                
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
                
        return ()=> controller.abort()
    },  deps ?[...deps]: []);

    return {data,error,isLoading}

} 