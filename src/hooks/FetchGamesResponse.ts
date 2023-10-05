import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";
import {Genre} from './FetchGenres'

export interface Platform{
    id : number;
    name : string;
    slug : string;
}

export interface Game {
    id : number;
    name : string;
    background_image : string;
    parent_platforms : {platform : Platform} [];
    metacritic : number;
}

interface FetchGames{
    count : number;
    results : Game[];
}

const FetchGamesResponse = (selectedGenre : Genre | null, selectedPlatform : Platform | null, selectedsort : string, searchText : String) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGames>('/games', {signal : controller.signal, params : {genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: selectedsort, search: searchText}})
                 .then(res => {
                    setGames(res.data.results);
                    setLoading(false);
                })
                 .catch((err) => {
                    if(err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });

        return () => controller.abort();
    }, [selectedGenre, selectedPlatform, selectedsort, searchText]);

    return {games, error, isLoading};
}
export default FetchGamesResponse 
