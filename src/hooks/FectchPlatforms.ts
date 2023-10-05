import { Platform } from "./FetchGamesResponse"
import apiClient from "../services/api-client"
import { useState, useEffect } from "react"
import { CanceledError } from "axios"


interface getPlatforms{
    count : number;
    results: Platform[];
}

const FetchPlatforms = () => {
    const [platforms, setPlatforms] = useState< Platform[] >([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<getPlatforms>('/platforms/lists/parents', {signal : controller.signal})
                 .then((res) => {
                    setPlatforms(res.data.results);
                    setLoading(false);
                 })
                 .catch((err) => {
                    if(err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                 });
            return () => controller.abort();
    }, [])
    return {platforms, error, isLoading};
}
export default FetchPlatforms 
