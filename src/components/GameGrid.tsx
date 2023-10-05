import axios from "axios"
import { SimpleGrid, Text } from "@chakra-ui/react"
import FetchGamesResponse, { Platform } from "../hooks/FetchGamesResponse"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import {Genre} from '../hooks/FetchGenres'
interface Props{
    selectedPlatform : Platform | null;
    selectedGenre : Genre | null;
    selectedsort : string | null;
}

const GameGrid = ({selectedPlatform, selectedGenre, selectedsort} : Props) => {
    const {games, error, isLoading} = FetchGamesResponse(selectedGenre, selectedPlatform, selectedsort);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return(
        <>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key = {skeleton}/>)}
        
        {error && <Text> {error} </Text>}
        
        <SimpleGrid spacing={5} columns={{sm : 1, md : 2, lg : 3}} padding='10px'>
            {games?.map((game) => (
                <GameCard key = {game.id} game = {game}/>
            ))}
        </SimpleGrid>
        </>
        
    )
}
export default GameGrid 
