
import { useState, useEffect } from "react";
import apiClient from "../services/api-client"
import { CanceledError } from "axios";
export interface Genre{
    id : number;
    name : string;
    image_background: string;
}
interface getGenres{
    count : number;
    results : Genre[];
}
const FetchGenres = () => {
    const [genres, setGenres] = useState< Genre[] >([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<getGenres>('./genres', {signal : controller.signal})
                 .then((res) => {
                    setGenres(res.data.results);
                    setLoading(false);
                 })
                 .catch((err) => {
                    if(err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                 });
            return () => controller.abort();
    }, [])
    return {genres, error, isLoading};
}
export default FetchGenres 
