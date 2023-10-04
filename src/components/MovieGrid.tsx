import axios from "axios"
import { SimpleGrid, Text } from "@chakra-ui/react"
import FetchGamesResponse from "../hooks/FetchGamesResponse"
import GameCard from "./GameCard"

const MovieGrid = () => {
    const {games, error} = FetchGamesResponse();
    return(
        <>
        {error && <Text> {error} </Text>}
        <SimpleGrid spacing={10} columns={{sm : 1, md : 2, lg : 3}} padding='10px'>
            {games?.map((game) => (
                <GameCard key = {game.id} game = {game}/>
            ))}
        </SimpleGrid>
        </>
        
    )
}
export default MovieGrid 
