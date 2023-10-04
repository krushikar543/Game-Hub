import axios from "axios"
import { SimpleGrid, Text } from "@chakra-ui/react"
import FetchGamesResponse from "../hooks/FetchGamesResponse"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
    const {games, error, isLoading} = FetchGamesResponse();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return(
        <>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key = {skeleton}/>)}
        
        {error && <Text> {error} </Text>}
        
        <SimpleGrid spacing={10} columns={{sm : 1, md : 2, lg : 3}} padding='10px'>
            {games?.map((game) => (
                <GameCard key = {game.id} game = {game}/>
            ))}
        </SimpleGrid>
        </>
        
    )
}
export default GameGrid 
