import axios from "axios"
import { Text } from "@chakra-ui/react"
import FetchGamesResponse from "../hooks/FetchGamesResponse"

const MovieGrid = () => {
    const {games, error} = FetchGamesResponse();
    return(
        <>
        {error && <Text> {error} </Text>}
        <ul>
            {games?.map(game => <li key={game.id}> {game.name} </li>)}
            
        </ul>
        </>
        
    )
}
export default MovieGrid 
