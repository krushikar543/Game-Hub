import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

interface Game {
    id : number;
    name : string;
}
interface FetchGames{
    count : number;
    results : Game[];
}

const FetchGamesResponse = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const contoller = new AbortController();

        apiClient.get<FetchGames>('/games', {signal : contoller.signal})
                 .then(res => setGames(res.data.results))
                 .catch((err) => {
                    if(err instanceof CanceledError) return;
                    setError(err.message)
                });

        return () => contoller.abort();
    }, []);

    return {games, error};
}
export default FetchGamesResponse 
