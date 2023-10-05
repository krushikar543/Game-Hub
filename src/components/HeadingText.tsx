
import { Heading } from "@chakra-ui/react"
import { Genre } from "../hooks/FetchGenres"
import { Platform } from "../hooks/FetchGamesResponse";

interface Props{
    genre : Genre | null;
    platform : Platform | null;
}
const HeadingText = ({genre, platform} : Props) => {
    const head = `${platform?.name || ''} ${genre?.name || ''} Games`;
    return(
        <Heading fontSize='5xl'>
            {head}
        </Heading>
    )
}

export default HeadingText 
